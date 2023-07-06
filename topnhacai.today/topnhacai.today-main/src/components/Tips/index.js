import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Loading from "../../components/Loading";
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

const splitData = (arr) => {
  var result = [];
  arr.map((item, index) => {
    result.push(item.split(',')[0])
    result.push(item.split(',')[2])
    result.push(item.split(',')[3])
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

function Tips(props) {
  const [dataTip, setDataTip] = useState();
  const [dataOdds, setDataOdd] = useState();
  useEffect(() => {
    // fetch(`${process.env.api_topnhacai}/isports/liveScores?limit=50`)
    // .then(response => response.json())
    // .then(data => {
    //   setDataTip(data)
    // });
    const fetchData = async () => {
      const resLiveScore = await fetch(`${process.env.api_isports}/liveScoreTodays?limit=40`)
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
        .then(result => { return result.data.handicap })
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
  //  const DataSplit = splitData(dataOdds ? dataOdds.overUnder : []);

  return (
    <div className="marg_0016">
      <div className="table_tips_premium">
        <div id="app_shortcode_tips" className="table-tips">
          <div className="headtips bxflex">
            <h2>
              <a href="https://topnhacai.today/tips-bong-da/" rel="dofollow">
                Tips bóng đá mới nhất{" "}
                <span className="lightAnimation dn-none dn-md-inline-block">
                  Tips premium miễn phí
                </span>
              </a>
            </h2>
            <div className="headtips-wrap__label dn-md-none">
              <span className="headtips-label lightAnimation">
                Tips premium miễn phí
              </span>
            </div>
            <p className="headtips-uptime">
              <FontAwesomeIcon icon={["fas", "fa-refresh"]} style={{ marginRight: "5px" }} />
              Cập nhật: 30 phút trước
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th className="th-time bxleft">Time</th>
                <th className="th-match bxleft">Match</th>
                <th className="th-tips">Soccer Tips</th>
                <th className="th-odds">Odds</th>
                <th className="th-premium bxleft">Premium Tips</th>
                <th className="th-result">Result</th>
                <th className="th-status">Status</th>
              </tr>
            </thead>
            <tbody>
               {Data ? Data?.map((item, index) => {
                return (
                  <tr className="active" data-index="1" key={index} >
                    <td className="td-time bxleft">
                      <span className="time">{formatTime(item.liveScore.matchTime)}</span>
                      <span className="league">{item.liveScore.leagueShortName}</span>
                    </td>
                    <td className="match bxleft">
                      <div className="fc-name-tips">
                        <div className="bxlogo">
                          <span className="logo">
                            <Image
                              data-lazyloaded="1"
                              src={item.liveScore.homeId === item.item1.teamId ? item.item1.logo : 'https://topnhacai.b-cdn.net/no-logo.gif'}
                              width="50"
                              height="50"
                              alt="Guairena"
                              data-ll-status="loaded"
                              className="entered litespeed-loaded"
                            />
                          </span>
                          <span className="name">{item.liveScore.homeName}</span>
                        </div>
                        <div className="bxlogo">
                          <span className="logo">
                            <Image
                              data-lazyloaded="1"
                              src={item.liveScore.awayId === item.item1.teamId ? item.item1.logo : 'https://topnhacai.b-cdn.net/no-logo.gif'}
                              width="50"
                              height="50"
                              alt="Tacuary"
                              data-ll-status="loaded"
                              className="entered litespeed-loaded"
                            />
                          </span>
                          <span className="name">{item.liveScore.awayName}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="td-tips">{
                        handleSoccerTips(item.liveScore.matchId, dataTip.listOdds) > 0 ? 
                        "Over " + handleSoccerTips(item.liveScore.matchId, dataTip.listOdds) :
                        handleSoccerTips(item.liveScore.matchId, dataTip.listOdds) < 1 ? 
                        item.liveScore.homeName + " " + handleSoccerTips(item.liveScore.matchId, dataTip.listOdds) : 
                        "-"
                      }</span>
                    </td>
                    <td className="premium_sc td-odds"> {
                      (handleOdds(item.liveScore.matchId, dataTip.listOdds)) != undefined ? 
                      (handleOdds(item.liveScore.matchId, dataTip.listOdds)) : "-"
                      }</td>
                    <td className="bxleft">
                      <span className="link-premium">Under2goals.uk</span>
                      <div className="reviews">
                        <div className="star">
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                          <span className="active">
                            <FontAwesomeIcon icon={["fas", "fa-star"]} />
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="td-result">
                      <span className="rsempty">-:-</span>
                    </td>
                    <td className="td-status">
                      <span className="status-tips status-wait">
                        {item.liveScore.status === 0 ? 'wait' : 'FT'}
                      </span>
                    </td>
                  </tr>
                )
              }) : <Loading />
              }

            </tbody>
          </table>
          <div className="bxlinkall btnalltips ">
            <a
              href="https://topnhacai.today/tips-bong-da"
              data-start="5"
              data-viewmore="5"
              data-next="10"
              data-all="47"
            >
              Xem tất cả các tips bóng đá khác
              <FontAwesomeIcon
                style={{ marginLeft: "5px" }}
                icon={["fas", "fa-chevron-down"]}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tips;
