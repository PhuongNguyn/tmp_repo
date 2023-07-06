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

function ConfrontationDetails(props) {
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
          `${process.env.api_isports}/matchAnalysis?matchId=${matchId}`
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

        var _teamIds = [resMatch[0].homeId, resMatch[0].awayId];

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

        // console.log(respMatchHeadToHead);
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
        if (index < 2)
          return (
            <tr key={index}>
              <td>{formatDateToDDMMYYY(parseInt(dtItem[3]) * 1000)}</td>
              <td className="txt_right">
                <span
                  className={
                    resp.dataMatch?.homeId === dtItem[5] ? "active" : ""
                  }
                >
                  {dtItem[4]}
                </span>
              </td>
              <td className="txt_center">
                <span className="tiso">{`${dtItem[8]} : ${dtItem[9]}`}</span>
              </td>
              <td>
                <span
                  className={
                    resp.dataMatch?.homeId === dtItem[7] ? "active" : ""
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

  const showListHomeLastMatches = () => {
    var result = null;
    if (
      resp.dataMatchHeadToHead?.homeLastMatches &&
      resp.dataMatchHeadToHead?.homeLastMatches.length > 0
    ) {
      const newArray = [...resp.dataMatchHeadToHead?.homeLastMatches];
      result = newArray.map((dt, index) => {
        var dtItem = dt.split(",");
        const slug = `${dtItem[4]
          .replaceAll(" ", "-")
          .toLowerCase()}-vs-${dtItem[6].replaceAll(" ", "-").toLowerCase()}`;

        if (index < 8)
          return (
            <tr key={index}>
              <td>{formatDateToDDMMYYY(parseInt(dtItem[3]) * 1000)}</td>
              <td className="txt_right">
                <span
                  className={
                    resp.dataMatch?.homeId === dtItem[5] ? "active" : ""
                  }
                >
                  {dtItem[4]}
                </span>
              </td>
              <td className="txt_center">
                <span className="tiso">{`${dtItem[8]} : ${dtItem[9]}`}</span>
              </td>
              <td>
                <span
                  className={
                    resp.dataMatch?.homeId === dtItem[7] ? "active" : ""
                  }
                >
                  {dtItem[6]}
                </span>
              </td>
              <td className="txt_center">
                <Link
                  href={{
                    pathname: `/lich-su-doi-dau/[...slug]`,
                    query: { slug: slug, matchId: dtItem[0] },
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
        const slug = `${dtItem[4]
          .replaceAll(" ", "-")
          .toLowerCase()}-vs-${dtItem[6].replaceAll(" ", "-").toLowerCase()}`;
        if (index < 8)
          return (
            <tr key={index}>
              <td>{formatDateToDDMMYYY(parseInt(dtItem[3]) * 1000)}</td>
              <td className="txt_right">
                <span
                  className={
                    resp.dataMatch?.awayId === dtItem[5] ? "active" : ""
                  }
                >
                  {dtItem[4]}
                </span>
              </td>
              <td className="txt_center">
                <span className="tiso">{`${dtItem[8]} : ${dtItem[9]}`}</span>
              </td>
              <td>
                <span
                  className={
                    resp.dataMatch?.awayId === dtItem[7] ? "active" : ""
                  }
                >
                  {dtItem[6]}
                </span>
              </td>
              <td className="txt_center">
                <Link
                  href={{
                    pathname: `/lich-su-doi-dau/[...slug]`,
                    query: { slug: slug, matchId: dtItem[0] },
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
      });
    }
    return result;
  };

  const showListNearMatch = () => {
    var result = null;
    if (resp.listMatchToday && resp.listMatchToday.length > 0) {
      const newArray = [...resp.listMatchToday];
      result =
        newArray &&
        newArray.map((dt, index) => {
          const slug = `${dt.homeName
            .replaceAll(" ", "-")
            .toLowerCase()}-vs-${dt.awayName
            .replaceAll(" ", "-")
            .toLowerCase()}`;

          return (
            <li key={index}>
              <Link
                href={{
                  pathname: "/lich-su-doi-dau/[...slug]",
                  query: { slug: slug, matchId: dt.matchId },
                }}
              >
                <a target="_blank">{`Lịch sử đối đầu giữa ${dt.homeName} vs ${dt.awayName}`}</a>
              </Link>
            </li>
          );
        });
    }
    return result;
  };

  return (
    <>
      <div className="bxflex bxsingle_posttpl">
        <div className="bxcontainer_single bxw65">
          <div id="app_identify_detail" className="bxtop_info">
            {loading ? (
              <div
                className="bxiframe_nguon text-center"
                style={{ display: "block", marginTop: "10px" }}
              >
                <span className="loadicon active"></span>
              </div>
            ) : (
              <div className="bxinner">
                <div className="bxndt marg_0016">
                  <h1 className="font30">
                    {`Lịch sử đối đầu giữa ${resp.dataMatch?.homeName} vs ${resp.dataMatch?.awayName}`}
                  </h1>
                </div>
                <div
                  className="marg_0016 bxdoidau_info"
                  //   style='background: url("https://vaobo.com/wp-content/uploads/2021/10/bgnd5.png?v=1658395123") center center / cover no-repeat;'
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
                          width={60}
                          height={60}
                        />
                      </span>
                    </div>
                    <div className="bxvstime">
                      <div className="ti_so">VS</div>
                      <div className="date_vs">
                        {formatDateToDDMMYYY(Date.now())}
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
                          width={60}
                          height={60}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="trang_thai">
                    {getStatusMatch(resp.dataMatch?.status)}
                  </div>
                </div>
                <div className="bxnd-gt marg_0016">
                  {`Xem thống kê thành tích đối đầu giữa ${resp.dataMatch?.homeName} và
                ${resp.dataMatch?.awayName}, thống kê phong độ hiện tại của
                ${resp.dataMatch?.homeName}, phong độ hiện tại của ${resp.dataMatch?.awayName}, thành tích đối đầu ${resp.dataMatch?.homeName}, thành tích đối đầu ${resp.dataMatch?.awayName}.`}
                </div>
                <div className="bxresult_dd">
                  <h2 className="ttbd">
                    {`Kết quả đối đầu giữa ${resp.dataMatch?.homeName} vs ${resp.dataMatch?.awayName}`}
                  </h2>
                  <div id="app_shortcode_hth_achieve" data-field="h2h">
                    <div className="table_resultdd">
                      <table>
                        <thead>
                          <tr>
                            <th>Ngày</th>
                            <th className="txt_right">Đội nhà</th>
                            <th className="txt_center">Tỉ số</th>
                            <th>Đội khách</th>
                          </tr>
                        </thead>
                        <tbody>
                          {showListHeadToHead() || (
                            <tr>
                              <td colSpan={5}>Không tìm thấy dữ liệu</td>
                            </tr>
                          )}
                        </tbody>
                        {/* <tfoot>
                        <tr>
                          <th colSpan="5">
                            <div className="infobt">
                              <div
                                className="thongke"
                                style={{ width: "100%" }}
                              >
                                <p>
                                  Topnhacai.com thống kê 2 trận gần nhất;
                                  <strong> RasenBallsport Leipzig </strong>
                                  thắng 0,
                                  <strong> Liverpool </strong> thắng 2, Hòa 0.
                                </p>
                              </div>
                              <div
                                className="tkdoi tkdoi1"
                                style={{ display: "none" }}
                              >
                                <p>RasenBallsport Leipzig</p>
                                <div className="info">
                                  <span className="lose">L</span>
                                  <span className="lose">L</span>
                                </div>
                              </div>
                              <div
                                className="tkdoi tkdoi2"
                                style={{ display: "none" }}
                              >
                                <p>Liverpool</p>
                                <div className="info">
                                  <span className="win">W</span>
                                  <span className="win">W</span>
                                </div>
                              </div>
                            </div>
                          </th>
                        </tr>
                      </tfoot> */}
                      </table>
                    </div>
                  </div>
                  <div id="app_shortcode_hth_achieve_recent">
                    <div className="table_resultdd tab_resultpd tbresult_doi1">
                      <h3 className="ttbdh3">
                        {`Phong độ gần đây của ${resp.dataMatch?.homeName}`}
                      </h3>
                      <table>
                        <thead>
                          <tr>
                            <th>Ngày</th>
                            <th className="txt_right">Đội nhà</th>
                            <th className="txt_center">Tỉ số</th>
                            <th>Đội khách</th>
                            <th className="txt_center">Đối đầu</th>
                          </tr>
                        </thead>
                        <tbody>
                          {showListHomeLastMatches() || (
                            <tr>
                              <td colSpan={5}>Không tìm thấy dữ liệu</td>
                            </tr>
                          )}
                        </tbody>
                        {/* <tfoot>
                        <tr>
                          <th colSpan="6">
                            <div className="infobt">
                              <div
                                className="thongke"
                                style={{ width: "100%" }}
                              >
                                <p>
                                  Vaobo.com thống kê 7 trận gần nhất;
                                  <strong>RasenBallsport Leipzig</strong> thắng
                                  3; Hòa 2; Thua 2; Tỉ lệ thắng: 43%
                                </p>
                              </div>
                              <div
                                className="tkdoi tkdoi1"
                                style={{ display: "none" }}
                              >
                                <p>RasenBallsport Leipzig:</p>
                                <div className="info">
                                  <span className="win">W</span>
                                  <span className="hoa">D</span>
                                  <span className="hoa">D</span>
                                  <span className="win">W</span>
                                  <span className="lose">L</span>
                                  <span className="lose">L</span>
                                  <span className="win">W</span>
                                </div>
                              </div>
                              <div className="rate" style={{ display: "none" }}>
                                <p>
                                  Tỉ lệ thắng <span>25%</span>
                                </p>
                              </div>
                            </div>
                          </th>
                        </tr>
                      </tfoot> */}
                      </table>
                    </div>
                    <div className="table_resultdd tab_resultpd tbresult_doi2">
                      <h3 className="ttbdh3">{`Phong độ gần đây của ${resp.dataMatch?.awayName}`}</h3>
                      <table>
                        <thead>
                          <tr>
                            <th>Ngày</th>
                            <th className="txt_right">Đội nhà</th>
                            <th className="txt_center">Tỉ số</th>
                            <th>Đội khách</th>
                            <th className="txt_center">Đối đầu</th>
                          </tr>
                        </thead>
                        <tbody>
                          {showListAwayLastMatches() || (
                            <tr>
                              <td colSpan={5}>Không tìm thấy dữ liệu</td>
                            </tr>
                          )}
                        </tbody>
                        {/* <tfoot>
                        <tr>
                          <th colSpan="6">
                            <div className="infobt">
                              <div
                                className="thongke"
                                style={{ width: "100%" }}
                              >
                                <p>
                                  Vaobo.com thống kê 7 trận gần nhất;
                                  <strong>Liverpool</strong> thắng 4; Hòa 1;
                                  Thua 2; Tỉ lệ thắng: 57%
                                </p>
                              </div>
                              <div
                                className="tkdoi tkdoi1"
                                style={{ display: "none" }}
                              >
                                <p>Liverpool:</p>
                                <div className="info">
                                  <span className="win">W</span>
                                  <span className="lose">L</span>
                                  <span className="lose">L</span>
                                  <span className="win">W</span>
                                  <span className="win">W</span>
                                  <span className="hoa">D</span>
                                  <span className="win">W</span>
                                </div>
                              </div>
                              <div className="rate" style={{ display: "none" }}>
                                <p>
                                  Tỉ lệ thắng <span>25%</span>
                                </p>
                              </div>
                            </div>
                          </th>
                        </tr>
                      </tfoot> */}
                      </table>
                    </div>
                  </div>
                  <div className="bxslthongke">
                    <h2 className="ttbd">
                      {`Số liệu thống kê của ${resp.dataMatch?.homeName} vs ${resp.dataMatch?.awayName}`}
                    </h2>
                    <div id="app_shortcode_hth_statistics" data-field="h2h">
                      <div className="slthongkeitem slthongke1">
                        <div className="title">
                          <span>
                            <Image
                              data-lazyloaded="1"
                              src={
                                resp.teamProfiles
                                  ? getLogos(
                                      resp.dataMatch?.homeId,
                                      resp.teamProfiles
                                    ) ||
                                    "https://topnhacai.b-cdn.net/no-logo.gif"
                                  : "https://topnhacai.b-cdn.net/no-logo.gif"
                              }
                              data-ll-status="loading"
                              className="entered litespeed-loading"
                              alt=""
                              width={28}
                              height={28}
                            />
                          </span>
                          <h3 className="ttbdh3">
                            {`số liệu thống kê của  ${resp.dataMatch?.homeName}`}
                          </h3>
                        </div>
                        <div className="phongdolast">
                          <div className="bxinner">
                            <p>Phong độ gần đây:</p>
                            <div className="itemlistwl">
                              {resp.dataMatchHeadToHead?.homeOdds &&
                              resp.dataMatchHeadToHead?.homeOdds.length > 0 ? (
                                <>
                                  <span
                                    className={convertStatusMatch(
                                      resp.dataMatchHeadToHead?.homeOdds[3][0]
                                        .split(",")[1]
                                        .split("")[0]
                                    )}
                                  >
                                    {convertResultMatch(
                                      resp.dataMatchHeadToHead?.homeOdds[3][0]
                                        .split(",")[1]
                                        .split("")[0]
                                    )}
                                  </span>
                                  <span
                                    className={convertStatusMatch(
                                      resp.dataMatchHeadToHead?.homeOdds[3][0]
                                        .split(",")[1]
                                        .split("")[1]
                                    )}
                                  >
                                    {convertResultMatch(
                                      resp.dataMatchHeadToHead?.homeOdds[3][0]
                                        .split(",")[1]
                                        .split("")[1]
                                    )}
                                  </span>
                                  <span
                                    className={convertStatusMatch(
                                      resp.dataMatchHeadToHead?.homeOdds[3][0]
                                        .split(",")[1]
                                        .split("")[2]
                                    )}
                                  >
                                    {convertResultMatch(
                                      resp.dataMatchHeadToHead?.homeOdds[3][0]
                                        .split(",")[1]
                                        .split("")[2]
                                    )}
                                  </span>
                                  <span
                                    className={convertStatusMatch(
                                      resp.dataMatchHeadToHead?.homeOdds[3][0]
                                        .split(",")[1]
                                        .split("")[3]
                                    )}
                                  >
                                    {convertResultMatch(
                                      resp.dataMatchHeadToHead?.homeOdds[3][0]
                                        .split(",")[1]
                                        .split("")[3]
                                    )}
                                  </span>
                                  <span
                                    className={convertStatusMatch(
                                      resp.dataMatchHeadToHead?.homeOdds[3][0]
                                        .split(",")[1]
                                        .split("")[4]
                                    )}
                                  >
                                    {convertResultMatch(
                                      resp.dataMatchHeadToHead?.homeOdds[3][0]
                                        .split(",")[1]
                                        .split("")[4]
                                    )}
                                  </span>
                                  <span
                                    className={convertStatusMatch(
                                      resp.dataMatchHeadToHead?.homeOdds[3][0]
                                        .split(",")[1]
                                        .split("")[5]
                                    )}
                                  >
                                    {convertResultMatch(
                                      resp.dataMatchHeadToHead?.homeOdds[3][0]
                                        .split(",")[1]
                                        .split("")[5]
                                    )}
                                  </span>
                                </>
                              ) : (
                                <div
                                  style={{ width: "100%", textAlign: "center" }}
                                >
                                  Không tìm thấy dữ liệu
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {/* <div className="bxthongkestatus">
                        <ul>
                          <li className="tong">
                            <p className="number">
                              {resp.dataMatchHeadToHead?.homeOdds[3][0].split(",")[0]}
                            </p>
                            <p className="title">Trận đấu</p>
                          </li>
                          <li className="banthang">
                            <p className="number">3</p>
                            <p className="title">Bàn thắng</p>
                          </li>
                          <li className="verg">
                            <p className="number">3</p>
                            <p className="title">BT/Trận</p>
                          </li>
                          <li className="bxwin">
                            <p className="number">1</p>
                            <p className="title">Thắng</p>
                          </li>
                          <li className="bxhoa">
                            <p className="number">0</p>
                            <p className="title">Hoà</p>
                          </li>
                          <li className="bxlose">
                            <p className="number">0</p>
                            <p className="title">Thua</p>
                          </li>
                          <li className="bxovertai25">
                            <p className="number">100%</p>
                            <p className="title">Tài 2.5</p>
                          </li>
                          <li className="bxovertai15">
                            <p className="number">100%</p>
                            <p className="title">Tài 1.5</p>
                          </li>
                          <li className="bxcs">
                            <p className="number">0%</p>
                            <p className="title">Giữ sạch lưới</p>
                          </li>
                          <li className="bxbtts">
                            <p className="number">100%</p>
                            <p className="title">BTTS</p>
                          </li>
                        </ul>
                      </div> */}
                      </div>
                      <div className="slthongkeitem slthongke2">
                        <div className="title">
                          <span>
                            <Image
                              data-lazyloaded="1"
                              src={
                                resp.teamProfiles
                                  ? getLogos(
                                      resp.dataMatch?.awayId,
                                      resp.teamProfiles
                                    ) ||
                                    "https://topnhacai.b-cdn.net/no-logo.gif"
                                  : "https://topnhacai.b-cdn.net/no-logo.gif"
                              }
                              data-ll-status="loading"
                              className="entered litespeed-loading"
                              alt=""
                              width={28}
                              height={28}
                            />
                          </span>
                          <h3 className="ttbdh3">
                            {`số liệu thống kê của  ${resp.dataMatch?.awayName}`}
                          </h3>
                        </div>
                        <div className="phongdolast">
                          <div className="bxinner">
                            <p>Phong độ gần đây:</p>
                            <div className="itemlistwl">
                              {resp.dataMatchHeadToHead?.awayOdds &&
                              resp.dataMatchHeadToHead?.awayOdds.length > 0 ? (
                                <>
                                  <span
                                    className={convertStatusMatch(
                                      resp.dataMatchHeadToHead?.awayOdds[3][0]
                                        .split(",")[1]
                                        .split("")[0]
                                    )}
                                  >
                                    {convertResultMatch(
                                      resp.dataMatchHeadToHead?.awayOdds[3][0]
                                        .split(",")[1]
                                        .split("")[0]
                                    )}
                                  </span>
                                  <span
                                    className={convertStatusMatch(
                                      resp.dataMatchHeadToHead?.awayOdds[3][0]
                                        .split(",")[1]
                                        .split("")[1]
                                    )}
                                  >
                                    {convertResultMatch(
                                      resp.dataMatchHeadToHead?.awayOdds[3][0]
                                        .split(",")[1]
                                        .split("")[1]
                                    )}
                                  </span>
                                  <span
                                    className={convertStatusMatch(
                                      resp.dataMatchHeadToHead?.awayOdds[3][0]
                                        .split(",")[1]
                                        .split("")[2]
                                    )}
                                  >
                                    {convertResultMatch(
                                      resp.dataMatchHeadToHead?.awayOdds[3][0]
                                        .split(",")[1]
                                        .split("")[2]
                                    )}
                                  </span>
                                  <span
                                    className={convertStatusMatch(
                                      resp.dataMatchHeadToHead?.awayOdds[3][0]
                                        .split(",")[1]
                                        .split("")[3]
                                    )}
                                  >
                                    {convertResultMatch(
                                      resp.dataMatchHeadToHead?.awayOdds[3][0]
                                        .split(",")[1]
                                        .split("")[3]
                                    )}
                                  </span>
                                  <span
                                    className={convertStatusMatch(
                                      resp.dataMatchHeadToHead?.awayOdds[3][0]
                                        .split(",")[1]
                                        .split("")[4]
                                    )}
                                  >
                                    {convertResultMatch(
                                      resp.dataMatchHeadToHead?.awayOdds[3][0]
                                        .split(",")[1]
                                        .split("")[4]
                                    )}
                                  </span>
                                  <span
                                    className={convertStatusMatch(
                                      resp.dataMatchHeadToHead?.awayOdds[3][0]
                                        .split(",")[1]
                                        .split("")[5]
                                    )}
                                  >
                                    {convertResultMatch(
                                      resp.dataMatchHeadToHead?.awayOdds[3][0]
                                        .split(",")[1]
                                        .split("")[5]
                                    )}
                                  </span>
                                </>
                              ) : (
                                <div
                                  style={{ width: "100%", textAlign: "center" }}
                                >
                                  Không tìm thấy dữ liệu
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {/* <div className="bxthongkestatus">
                        <ul>
                          <li className="tong">
                            <p className="number">2</p>
                            <p className="title">Trận đấu</p>
                          </li>
                          <li className="banthang">
                            <p className="number">2</p>
                            <p className="title">Bàn thắng</p>
                          </li>
                          <li className="verg">
                            <p className="number">1</p>
                            <p className="title">BT/Trận</p>
                          </li>
                          <li className="bxwin">
                            <p className="number">1</p>
                            <p className="title">Thắng</p>
                          </li>
                          <li className="bxhoa">
                            <p className="number">0</p>
                            <p className="title">Hoà</p>
                          </li>
                          <li className="bxlose">
                            <p className="number">1</p>
                            <p className="title">Thua</p>
                          </li>
                          <li className="bxovertai25">
                            <p className="number">50%</p>
                            <p className="title">Tài 2.5</p>
                          </li>
                          <li className="bxovertai15">
                            <p className="number">100%</p>
                            <p className="title">Tài 1.5</p>
                          </li>
                          <li className="bxcs">
                            <p className="number">50%</p>
                            <p className="title">Giữ sạch lưới</p>
                          </li>
                          <li className="bxbtts">
                            <p className="number">0%</p>
                            <p className="title">BTTS</p>
                          </li>
                        </ul>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bxsidepost bxw35">
          <div className="theiaStickySidebar">
            <div className="show-on-ready">
              <div id="app_h2h_sidebar" className="bxlisttopview ">
                <h4>Trận đấu sắp diễn ra</h4>
                <div>
                  <ul>{showListNearMatch()}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfrontationDetails;
