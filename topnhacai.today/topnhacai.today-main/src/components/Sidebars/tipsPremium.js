import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


function formatTime(timestamp) {
  var x = new Date(timestamp * 1000);
  var dd = x.getDate();
  var mm = x.getMonth() + 1;
  var hour = x.getHours()
  var minute = x.getMinutes()
  return (dd > 9 ? dd : '0' + dd) + "-" + (mm > 9 ? mm : '0' + mm) + " " +
    (hour > 9 ? hour : '0' + hour) + ":" +
    (minute > 9 ? minute : '0' + minute);
}
const mapData = (arr1, arr2) => {
  var result = []
  arr1.map((item, index) => {
    arr2.map((item1, index) => {
      if (item.homeId === item1.teamId || item.awayId === item1) {
        result.push({ liveScore: item, item1 })
      }
    })
  })
  return result;
}

function handleSoccerTips(matchId, listOddsUnder) {
  if (listOddsUnder) {
    for (let i = 1; i < listOddsUnder.length; i++) {
      if (matchId === listOddsUnder[i].split(',')[0]) {
        if (listOddsUnder[i].split(',')[2]){
          return listOddsUnder[i].split(',')[2];
        } 
      }
    }
  }
}
  function handleOdds(matchId, listOddsUnder) {
    if (listOddsUnder) {
      for (let i = 1; i < listOddsUnder.length; i++) {
        if (matchId === listOddsUnder[i].split(',')[0]) {
          if (listOddsUnder[i].split(',')[3]){
            return listOddsUnder[i].split(',')[3];
          } 
        }
      }
    }
  

  // console.log(listLiveScore, listOddsUnder);
  // if (listLiveScore && listOddsUnder) {
  //   console.log(listOddsUnder[0].split(',')[0])
  //   for (let i = 1; i < listLiveScore.length; i++) {
  //     if (listLiveScore[i].matchId === listOddsUnder[0].split(',')[0]) {
  //       console.log(123123123)
  //     }
  //   }
  // }
  // return null;
}

  
function TipsPremium(props) {
  const [dataTip, setDataTip] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const resLiveScore = await fetch(`${process.env.api_isports}/liveScoreTodays?limit=10`)
        .then((res) => (res ? res.json() : null))
        .then(data => {
          return data
        });
      //get data teamprofile 
      var arrTeamIds = []

      resLiveScore && resLiveScore?.map(item => {
        arrTeamIds.push(item.homeId)
        arrTeamIds.push(item.awayId)
      })
      var dataReq = {
        teamIds: arrTeamIds
      }
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const options = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(dataReq)
      };
      const resTeamProfile = await fetch(`${process.env.api_topnhacai}/teamProfiles/getByTeamIds`, options)
        .then(res => res.json())
        .then((data) => {
          return data;
        });
      const resOdds = await fetch(`${process.env.api_isports}/getPrematchAndInPlayOddsAll`)
        .then(response => response.json())
        .then(result => { return result?.data?.handicap })
        .catch(error => console.log('error', error));

      setDataTip({
        listLiveScore: resLiveScore ? resLiveScore : [],
        listTeamProfile: resTeamProfile ? resTeamProfile : [],
        listOdds: resOdds ? resOdds : []
      });
    };
    fetchData();
  }, []);

  const Data = mapData(dataTip ? dataTip.listLiveScore : [], dataTip ? dataTip.listTeamProfile : []);
  
  return (
    <article id="ctwidget_tips-2" className="widget widget_ctwidget_tips">
      <div className="bxwd_tips sdwg_tips">
        <div className="title bxwidget_title">
          <Link href="/tips-bong-da/">
            <>
              <span className="wgicon_top">top</span>Tips premium mới nhất
            </>
          </Link>
        </div>
        { Data?.map((item, index) => {
          return (
            <div className="bx_inner" key={index}>
          <div className="bxitem">
            <div className="head">
              <p className="league">
                <span>{item.liveScore?.leagueShortName}</span>-<span>{formatTime(item.liveScore?.matchTime)}</span>
              </p>
            </div>
            <div className="bxflex bxinfo">
              <div className="bxlogo">
                <div className="logo">
                  <span>
                    <Image
                      alt=""
                      data-lazyloaded="1"
                      src={item.liveScore?.homeId === item.item1?.teamId ? item.item1?.logo : 'https://topnhacai.b-cdn.net/no-logo.gif'}
                      width="100"
                      height="100"
                      data-ll-status="loaded"
                      className="entered litespeed-loaded"
                    />
                  </span>
                </div>
                <div className="name">{item.liveScore?.homeName}</div>
              </div>
              <div className="bxvs">
                <p className="vs">VS</p>
                <p className="odds"> {
                      (handleOdds(item.liveScore?.matchId, dataTip.listOdds)) != undefined ? 
                      (handleOdds(item.liveScore?.matchId, dataTip.listOdds)) : "-"
                      }</p>
              </div>
              <div className="bxlogo">
                <div className="logo">
                  <span>
                    <Image
                      alt=""
                      data-lazyloaded="1"
                      src={item.liveScore?.awayId === item.item1?.teamId ? item.item1?.logo : 'https://topnhacai.b-cdn.net/no-logo.gif'}
                      width="100"
                      height="100"
                      data-ll-status="loaded"
                      className="entered litespeed-loaded"
                    />
                  </span>
                </div>
                <div className="name">{item.liveScore?.awayName}</div>
              </div>
            </div>
            <div className="bxbottom">
              <div className="bxinner">
                <p className="tips">{
                        handleSoccerTips(item.liveScore?.matchId, dataTip.listOdds) > 0 ? 
                        "Over " + handleSoccerTips(item.liveScore?.matchId, dataTip.listOdds) :
                        handleSoccerTips(item.liveScore?.matchId, dataTip.listOdds) < 1 ? 
                        item.liveScore?.homeName + " " + handleSoccerTips(item.liveScore?.matchId, dataTip.listOdds) : 
                        "-"
                      }</p>
                <p className="source_tips">Mightytips.com</p>
              </div>
            </div>
          </div>
        </div>
          )
       
        })}
      </div>
    </article>
  );
}

export default TipsPremium;
