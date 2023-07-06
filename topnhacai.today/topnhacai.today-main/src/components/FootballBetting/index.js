/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Content from "../Content";
import fetch from "isomorphic-fetch";

function formatDate(timestamp) {
  var x = new Date(timestamp);
  var dd = x.getDate();
  var mm = x.getMonth() + 1;
  return (dd > 9 ? dd : "0" + dd) + "/" + (mm > 9 ? mm : "0" + mm);
}

function formatTime(timestamp) {
  var x = new Date(timestamp * 1000);
  var hh = x.getHours();
  var mm = x.getMinutes();
  return (hh > 9 ? hh : "0" + hh) + ":" + (mm > 9 ? mm : "0" + mm);
}

function getLogos(teamId, teamProfiles) {
  for (var i = 0; i < teamProfiles.length; i++) {
    if (teamId == teamProfiles[i].teamId) {
      return teamProfiles[i].logo;
    }
  }
}

function FootballBetting(props) {
  const { data } = props;
  const [teamProfiles, setTeamProfiles] = useState();

  useEffect(() => {
    const fetchData = async () => {
      var _teamIds = [];
      data &&
        data.map((item) => {
          _teamIds.push(item.homeId, item.awayId);
        });

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const options = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ teamIds: _teamIds }),
      };
      const _teamProfiles = await fetch(
        `${process.env.api_topnhacai}/teamProfiles/getByTeamIds`,
        options
      )
        .then((res) => res.json())
        .then((data) => {
          return data;
        });

      setTeamProfiles(_teamProfiles);
    };
    fetchData();
  }, []);

  const showListSchedule = () => {
    var result = null;
    if (data && data.length > 0) {
      const newArray = [...data];
      result = newArray.map((dt, index) => {
        const slug = `soi-keo-${dt.homeName.replaceAll(
          " ",
          "-"
        )}-vs-${dt.awayName.replaceAll(" ", "-").toLowerCase()}`;
        return (
          <tr key={index}>
            <td className="time">
              {`${formatDate(Date.now())} ${formatTime(dt.matchTime)}`}
            </td>
            <td className="league">{dt.leagueName}</td>
            <td className="td_dau">
              <div className="bxitemdau">
                <div className="bxdoi doi1">
                  <p>{dt.homeName}</p>
                  <span>
                    <Image
                      src={
                        teamProfiles
                          ? getLogos(dt.homeId, teamProfiles) ||
                            "https://topnhacai.b-cdn.net/no-logo.gif"
                          : "https://topnhacai.b-cdn.net/no-logo.gif"
                      }
                      data-lazyloaded="1"
                      width={30}
                      height={30}
                      data-ll-status="loaded"
                      className="entered litespeed-loaded"
                    />
                  </span>
                </div>
                <div className="vs">
                  <span>vs</span>
                </div>
                <div className="bxdoi doi2">
                  <span>
                    <Image
                      src={
                        teamProfiles
                          ? getLogos(dt.awayId, teamProfiles) ||
                            "https://topnhacai.b-cdn.net/no-logo.gif"
                          : "https://topnhacai.b-cdn.net/no-logo.gif"
                      }
                      data-lazyloaded="1"
                      width={30}
                      height={30}
                      data-ll-status="loaded"
                      className="entered litespeed-loaded"
                    />
                  </span>
                  <p>{dt.awayName}</p>
                </div>
              </div>
            </td>
            <td>
              <Link
                href={{
                  pathname: `/soi-keo-bong-da/[...slug]`,
                  query: { slug: slug, matchId: dt.matchId },
                }}
              >
                <a target="_blank" className="soi-keo">
                  <div className="img-before img-sk"></div>
                  Soi kèo
                </a>
              </Link>
            </td>
          </tr>
        );
      });
    }
    return result;
  };

  return (
    <>
      <div className="bxss bxndmain bxgttips pad0">
        <div className="bxinner">
          <div id="bo-loc-du-doan" className="marg_0030">
            <div className="bxinner">
              <div className="bo_loc">
                <div
                  className="app-loadicon text-center"
                  style={{ display: "none" }}
                >
                  <span className="loadicon active"></span>
                </div>
                <div id="app_tool_filter" className="app_fiter_soikeo app-init">
                  <div className="ng-scope">
                    <div className="container apt ng-scope">
                      <div className="main-functional">
                        <div className="main-fiter-soikeo">
                          <table className="table_lsdd tbsoikeo">
                            <tbody>
                              <tr>
                                <th>Thời gian</th>
                                <th>Giải</th>
                                <th className="align_center">Trận đấu</th>
                                <th></th>
                              </tr>

                              {showListSchedule()}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Content /> */}
    </>
  );
}

export default FootballBetting;
