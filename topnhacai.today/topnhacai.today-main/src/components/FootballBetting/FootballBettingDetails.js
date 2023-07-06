/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../components/Loading";
import fetch from "isomorphic-fetch";

const today = formatDateToYYYMMDD(Date.now());

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

function formatDateToDDMMYYY(timestamp) {
  var x = new Date(timestamp);
  var dd = x.getDate();
  var mm = x.getMonth() + 1;
  var yyyy = x.getFullYear();
  return (dd > 9 ? dd : "0" + dd) + "/" + (mm > 9 ? mm : "0" + mm) + "/" + yyyy;
}

function formatDateToYYYMMDD(timestamp) {
  var x = new Date(timestamp);
  var dd = x.getDate();
  var mm = x.getMonth() + 1;
  var yyyy = x.getFullYear();
  return yyyy + "-" + (mm > 9 ? mm : "0" + mm) + "-" + (dd > 9 ? dd : "0" + dd);
}

function convertStatusMatch(status) {
  if (status === "l") return "lose";
  else if (status === "w") return "win";
  else if (status === "d") return "hoa";
  else if (status === "v") return "";
  else return "";
}

function convertResultMatch(text) {
  if (text === "l") return "L";
  else if (text === "w") return "W";
  else if (text === "d") return "H";
  else if (text === "v") return "";
  else return "";
}

function getLogos(teamId, teamProfiles) {
  for (var i = 0; i < teamProfiles.length; i++) {
    if (teamId == teamProfiles[i].teamId) {
      return teamProfiles[i].logo;
    }
  }
}

function getStatusMatch(status) {
  switch (status) {
    case 0:
      return "Not started";
    case 1:
      return "First half";
    case 2:
      return "Half-time break";
    case 3:
      return "Second half";
    case 4:
      return "Extra time";
    case 5:
      return "Penalty";
    case -1:
      return "Finished";
    case -10:
      return "Cancelled";
    case -11:
      return "TBD";
    case -12:
      return "Terminated";
    case -13:
      return "Interrupted";
    case -14:
      return "Postponed";
    default:
      return "Not started";
  }
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const limitLiveScore = 20;

function FootballBettingDetails(props) {
  const router = useRouter();
  const { matchId } = router.query;

  const [resp, setData] = useState({
    listMatchToday: null,
    dataMatchHeadToHead: null,
    dataMatch: null,
    teamProfiles: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      const fetchData = async () => {
        setLoading(true);

        const resMatchToday = await fetch(
          `${process.env.api_isports}/liveScoreTodays?limit=${limitLiveScore}`
        )
          .then((res) => (res ? res.json() : null))
          .then((data) => {
            return data;
          });
        const respMatchHeadToHead = await fetch(
          `${process.env.api_topnhacai}/isports/analysis?matchId=${matchId}`
        )
          .then((res) => (res ? res.json() : null))
          .then((data) => {
            if (data.code === 1) return [];
            return JSON.parse(data);
          });
        const resMatch = await fetch(
          `${process.env.api_topnhacai}/isports/schedule?matchId=${matchId}`
        )
          .then((res) => (res ? res.json() : null))
          .then((data) => {
            return JSON.parse(data).datas;
          });

        var _teamIds = [];
        resMatchToday &&
          resMatchToday.map((item) => {
            _teamIds.push(item.homeId, item.awayId);
          });

        _teamIds.push(resMatch[0].homeId, resMatch[0].awayId);

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

        setLoading(false);
        setData({
          listMatchToday: resMatchToday ? resMatchToday : [],
          dataMatchHeadToHead: respMatchHeadToHead,
          dataMatch: resMatch ? resMatch[0] : [],
          teamProfiles: _teamProfiles,
        });
      };
      fetchData();
    }
  }, [matchId]);

  const showListHeadToHead = () => {
    var result = null;
    if (
      resp.dataMatchHeadToHead?.headToHead &&
      resp.dataMatchHeadToHead?.headToHead.length > 0
    ) {
      const newArray = [...resp.dataMatchHeadToHead?.headToHead];
      result = newArray.map((dt, index) => {
        var dtItem = dt.split(",");
        return (
          <tr key={index}>
            <td>
              <span>{dtItem[1]}</span>
            </td>
            <td>
              <span>
                <span>{formatDateToDDMMYYY(parseInt(dtItem[3]) * 1000)}</span>
              </span>
            </td>
            <td>
              <span
                className={
                  resp.dataMatch?.homeId === dtItem[5] ? "bluefont" : ""
                }
              >
                {dtItem[4]}
              </span>
            </td>
            <td>
              <span>{`${dtItem[8]} : ${dtItem[9]}`}</span>
            </td>
            <td>
              <span
                className={
                  resp.dataMatch?.homeId === dtItem[7] ? "bluefont" : ""
                }
              >
                {dtItem[6]}
              </span>
            </td>
          </tr>
        );
      });
    }
    return result;
  };

  const showListSchedule = () => {
    var result = null;
    if (resp.listMatchToday && resp.listMatchToday.length > 0) {
      const newArray = [...resp.listMatchToday];
      result = newArray.map((dt, index) => {
        const slug = `soi-keo-${dt.homeName.replaceAll(
          " ",
          "-"
        )}-vs-${dt.awayName.replaceAll(" ", "-").toLowerCase()}`;
        if (index < 5)
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
                          resp.teamProfiles
                            ? getLogos(dt.homeId, resp.teamProfiles) ||
                              "https://topnhacai.b-cdn.net/no-logo.gif"
                            : "https://topnhacai.b-cdn.net/no-logo.gif"
                        }
                        data-lazyloaded="1"
                        width={30}
                        height={30}
                        data-ll-status="loaded"
                        className="entered litespeed-loaded"
                        alt=""
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
                          resp.teamProfiles
                            ? getLogos(dt.awayId, resp.teamProfiles) ||
                              "https://topnhacai.b-cdn.net/no-logo.gif"
                            : "https://topnhacai.b-cdn.net/no-logo.gif"
                        }
                        data-lazyloaded="1"
                        width={30}
                        height={30}
                        data-ll-status="loaded"
                        className="entered litespeed-loaded"
                        alt=""
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

  const showListHomeLastMatches = () => {
    var result = null;
    if (
      resp.dataMatchHeadToHead?.homeLastMatches &&
      resp.dataMatchHeadToHead?.homeLastMatches.length > 0
    ) {
      const newArray = [...resp.dataMatchHeadToHead?.homeLastMatches];
      result = newArray.map((dt, index) => {
        var dtItem = dt.split(",");
        return (
          <tr key={index}>
            <td>
              <span>{dtItem[1]}</span>
            </td>
            <td>
              <span>
                <span>{formatDateToDDMMYYY(parseInt(dtItem[3]) * 1000)}</span>
              </span>
            </td>
            <td>
              <span
                className={
                  resp.dataMatch?.homeId === dtItem[5] ? "bluefont" : ""
                }
              >
                {dtItem[4]}
              </span>
            </td>
            <td>
              <span>{`${dtItem[8]} : ${dtItem[9]}`}</span>
            </td>
            <td>
              <span
                className={
                  resp.dataMatch?.homeId === dtItem[7] ? "bluefont" : ""
                }
              >
                {dtItem[6]}
              </span>
            </td>
          </tr>
        );
      });
    }
    return result;
  };

  const showListAwayLastMatches = () => {
    var result = null;
    if (
      resp.dataMatchHeadToHead?.awayLastMatches &&
      resp.dataMatchHeadToHead?.awayLastMatches.length > 0
    ) {
      const newArray = [...resp.dataMatchHeadToHead?.awayLastMatches];
      result = newArray.map((dt, index) => {
        var dtItem = dt.split(",");
        return (
          <tr key={index}>
            <td>
              <span>{dtItem[1]}</span>
            </td>
            <td>
              <span>
                <span>{formatDateToDDMMYYY(parseInt(dtItem[3]) * 1000)}</span>
              </span>
            </td>
            <td>
              <span
                className={
                  resp.dataMatch?.awayId === dtItem[5] ? "bluefont" : ""
                }
              >
                {dtItem[4]}
              </span>
            </td>
            <td>
              <span>{`${dtItem[8]} : ${dtItem[9]}`}</span>
            </td>
            <td>
              <span
                className={
                  resp.dataMatch?.awayId === dtItem[7] ? "bluefont" : ""
                }
              >
                {dtItem[6]}
              </span>
            </td>
          </tr>
        );
      });
    }
    return result;
  };

  return (
    <>
      <div className="bxflex bxsingle_posttpl">
        {loading ? (
          <div
            className="app-loadicon text-center"
            style={{ width: "100%", padding: "2rem 0;" }}
          >
            <span className="loadicon active"></span>
          </div>
        ) : (
          <div id="app_soikeo_detail" className="app-init">
            <div className="bxss bxsoikeomain">
              <div className="bxtoptitle">
                <div className="bxinner">
                  <h1 className="font30">
                    {`Soi kèo ${resp.dataMatch?.homeName} vs ${resp.dataMatch?.awayName}`}
                  </h1>
                  <div
                    className="marg_0016 bxdoidau_info bxdau_soikeo"
                    style={{
                      background:
                        'url("https://topnhacai.b-cdn.net/bgnd5.png") center center / cover no-repeat;',
                    }}
                  >
                    <h2>{resp.dataMatch?.leagueName}</h2>
                    <div className="bxinfo">
                      <div className="bxdoi doi1">
                        <p>{resp.dataMatch?.homeName}</p>
                        <span>
                          <Image
                            data-lazyloaded="1"
                            src={
                              resp.teamProfiles
                                ? getLogos(
                                    resp.dataMatch?.homeId,
                                    resp.teamProfiles
                                  ) || "https://topnhacai.b-cdn.net/no-logo.gif"
                                : "https://topnhacai.b-cdn.net/no-logo.gif"
                            }
                            data-ll-status="loading"
                            className="entered litespeed-loading"
                            alt=""
                            width={150}
                            height={150}
                          />
                        </span>
                      </div>
                      <div className="bxvstime">
                        <div className="vs">
                          <span>vs</span>
                        </div>
                        <div className="time_vs">
                          {formatTime(
                            parseInt(resp.dataMatch?.matchTime) * 1000
                          )}
                        </div>
                        <div className="date_vs">
                          {formatDate(
                            parseInt(resp.dataMatch?.matchTime) * 1000
                          )}
                        </div>
                      </div>
                      <div className="bxdoi doi2">
                        <p>{resp.dataMatch?.awayName}</p>
                        <span>
                          <Image
                            data-lazyloaded="1"
                            src={
                              resp.teamProfiles
                                ? getLogos(
                                    resp.dataMatch?.awayId,
                                    resp.teamProfiles
                                  ) || "https://topnhacai.b-cdn.net/no-logo.gif"
                                : "https://topnhacai.b-cdn.net/no-logo.gif"
                            }
                            data-ll-status="loading"
                            className="entered litespeed-loading"
                            alt=""
                            width={150}
                            height={150}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bxsapo">
                    {`Top nhà cái soi kèo bóng đá hôm nay, soi kèo nhà cái trận đấu ${
                      resp.dataMatch?.homeName
                    } vs ${resp.dataMatch?.awayName}, ngày ${formatDate(
                      parseInt(resp.dataMatch?.matchTime) * 1000
                    )} thuộc khuôn khổ giải ${
                      resp.dataMatch?.leagueName
                    }. Dữ liệu soi kèo bóng đá được cung cấp bởi các công ty cá cược hàng đầu như W88, M88, Fb88… Từ đó phần mềm soi kèo bóng đá tại topnhacai.today phân tích dữ liệu trận đấu ${
                      resp.dataMatch?.homeName
                    } vs ${
                      resp.dataMatch?.awayName
                    } và đưa ra lời khuyên nên chọn kèo nào để có tỷ lệ thắng cao nhất, soi kèo dự đoán tỷ số bóng đá.`}
                  </div>
                </div>
              </div>
              <div>
                <div className="bxphantich-tran">
                  <h2 className="bxtt bxttinner">
                    {`Dữ liệu phân tích trận đấu ${resp.dataMatch?.homeName} vs ${resp.dataMatch?.awayName}`}
                  </h2>
                  <p>
                    <strong className="subtitle">Lịch sử đối đầu</strong>
                  </p>
                  <div className="tablelsdd">
                    <table>
                      <thead>
                        <tr>
                          <td>Giải</td>
                          <td>Ngày</td>
                          <td>Chủ nhà</td>
                          <td>Tỉ số</td>
                          <td>Khách</td>
                          {/* <td>
                            <span>1X2</span>
                            <span>O/U</span>
                          </td> */}
                        </tr>
                      </thead>
                      <tbody>{showListHeadToHead()}</tbody>
                    </table>
                  </div>

                  <p>
                    <strong className="subtitle">Phong độ gần đây</strong>
                  </p>

                  <div className="bxchar_line bxdoi1">
                    <div className="bxinner">
                      <div className="head-name">
                        <span>{`${resp.dataMatch?.homeName}`}</span>
                      </div>
                    </div>
                    <div className="tablelsdd">
                      <table>
                        <thead>
                          <tr>
                            <td>Giải</td>
                            <td>Ngày</td>
                            <td>Chủ nhà</td>
                            <td>Tỉ số</td>
                            <td>Khách</td>
                          </tr>
                        </thead>
                        <tbody>{showListHomeLastMatches()}</tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bxchar_line bxdoi2">
                    <div className="bxinner">
                      <div className="head-name">
                        <span>{`${resp.dataMatch?.awayName}`}</span>
                      </div>
                    </div>
                    <div className="tablelsdd">
                      <table>
                        <thead>
                          <tr>
                            <td>Giải</td>
                            <td>Ngày</td>
                            <td>Chủ nhà</td>
                            <td>Tỉ số</td>
                            <td>Khách</td>
                          </tr>
                        </thead>
                        <tbody>{showListAwayLastMatches()}</tbody>
                      </table>
                    </div>
                  </div>

                  <p>
                    <strong className="subtitle">
                      Soi kèo các trận đấu sắp diễn ra
                    </strong>
                  </p>
                  <div className="tablelsdd">
                    <table className="table_lsdd tbsoikeo">
                      <tbody>
                        <tr>
                          <th>Thời gian</th>
                          <th>Giải</th>
                          <th style={{ textAlign: "center" }}>Trận đấu</th>
                          <th></th>
                        </tr>

                        {showListSchedule()}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* <div className="bxbo_tt bxsoikeo-lienquan">
                  <p className="bxttinner" style={{ padding: "10px 15px;" }}>
                    <strong className="subtitle">Lịch sử đối đầu</strong>
                  </p>
                  <div className="bxinner">
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
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FootballBettingDetails;
