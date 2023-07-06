import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

function ConfrontationList(props) {
  const { teamProfiles } = props;
  const showListHeadToHead = () => {
    var result = null;
    var data = props.data || null;
    if (data && data.length > 0) {
      const newArray = [...data];
      result = newArray.map((dt, index) => {
        var imgHome =
          getLogos(dt.homeId, teamProfiles) ||
          "https://topnhacai.b-cdn.net/no-logo.gif";
        var imgAway =
          getLogos(dt.awayId, teamProfiles) ||
          "https://topnhacai.b-cdn.net/no-logo.gif";

        const slug = `${dt.homeName
          .replaceAll(" ", "-")
          .toLowerCase()}-vs-${dt.awayName.replaceAll(" ", "-").toLowerCase()}`;

        if (props.isHot && index < 5) {
          return (
            <tr key={index}>
              <td>
                <span>{formatDate(Date.now())}</span>{" "}
                <span>{formatTime(dt.matchTime)}</span>
              </td>
              <td className="td_dau">
                <div className="bxitemdau">
                  <div className="bxdoi doi1">
                    <p>{dt.homeName}</p>
                    <span>
                      <Image
                        alt=""
                        width={30}
                        height={30}
                        data-lazyloaded="1"
                        src={imgHome}
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
                        alt=""
                        width={30}
                        height={30}
                        data-lazyloaded="1"
                        src={imgAway}
                        data-ll-status="loaded"
                        className="entered litespeed-loaded"
                      />
                    </span>
                    <p>{dt.awayName}</p>
                  </div>
                </div>
              </td>
              <td className="txt_right">
                <Link
                  // href="/lich-su-doi-dau/details"
                  href={{
                    pathname: "/lich-su-doi-dau/[...slug]",
                    query: { slug: slug, matchId: dt.matchId },
                  }}
                >
                  <a target="_blank">
                    Xem đối đầu
                    <FontAwesomeIcon
                      icon={["fas", "fa-chevron-right"]}
                      style={{ marginLeft: "5px" }}
                    />
                  </a>
                </Link>
              </td>
            </tr>
          );
        } else if (!props.isHot) {
          return (
            <tr key={index}>
              <td>
                <span>{formatDate(Date.now())}</span>{" "}
                <span>{formatTime(dt.matchTime)}</span>
              </td>
              <td className="td_dau">
                <div className="bxitemdau">
                  <div className="bxdoi doi1">
                    <p>{dt.homeName}</p>
                    <span>
                      <Image
                        alt=""
                        width={30}
                        height={30}
                        data-lazyloaded="1"
                        src={imgHome}
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
                        alt=""
                        width={30}
                        height={30}
                        data-lazyloaded="1"
                        src={imgAway}
                        data-ll-status="loaded"
                        className="entered litespeed-loaded"
                      />
                    </span>
                    <p>{dt.awayName}</p>
                  </div>
                </div>
              </td>
              <td className="txt_right">
                <Link
                  href={{
                    pathname: `/lich-su-doi-dau/[slug]`,
                    query: { slug: slug, matchId: dt.matchId },
                  }}
                >
                  <a target="_blank">
                    Xem đối đầu
                    <FontAwesomeIcon
                      icon={["fas", "fa-chevron-right"]}
                      style={{ marginLeft: "5px" }}
                    />
                  </a>
                </Link>
              </td>
            </tr>
          );
        }
      });
    }
    return result;
  };

  return (
    <>
      <div className="bxssvb lsdd_today">
        <div className="bxinner">
          <div className="bxbo_tt">
            <div className="bxinner">
              <h2>{props.title}</h2>
              <div className="bxpad20 bxbo_tt_inner">
                <div className="table_lsdd">
                  <table>
                    <thead>
                      <tr>
                        <th>Thời gian</th>
                        <th className="txt_center">Trận đấu</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{showListHeadToHead()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfrontationList;
