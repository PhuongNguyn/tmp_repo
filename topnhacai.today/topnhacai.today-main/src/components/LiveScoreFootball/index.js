import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import BannerLeftLiveScore from "../BannerLeftLiveScore";
import BannerRightLiveScore from "../BannerRightLiveScore";
import Link from "next/link";

import ModalOdds from "../../components/ModalOdds";

function formatScore(timestamp) {
  var x = new Date(timestamp * 1000);
  var minute = x.getMinutes();
  var hour = x.getHours();
  return hour + ":" + minute;
}

function formatTime(timestamp) {
  var x = new Date(timestamp * 1000);
  var hour = x.getHours();
  var minute = x.getMinutes();
  return (
    (hour > 9 ? hour : "0" + hour) + ":" + (minute > 9 ? minute : "0" + minute)
  );
}

function formatTimeNow(timestamp) {
  var x = new Date(timestamp);
  var hour = x.getHours();
  var minute = x.getMinutes();
  return parseInt(
    `${hour > 9 ? hour : "0" + hour}${minute > 9 ? minute : "0" + minute}`
  );
}

function formatTimePLay(timestamp) {
  var x = new Date(timestamp * 1000);
  var hour = x.getHours();
  var minute = x.getMinutes();
  return parseInt(
    `${hour > 9 ? hour : "0" + hour}${minute > 9 ? minute : "0" + minute}`
  );
}

function handleTime(startTime, endTime, status) {
  if (status === 1) return endTime - startTime + "'";
  return endTime - startTime + 45 > 90 ? 90 + "+'" : endTime - startTime + 45;
}
// function FilterClose() {
//   document.getElementById("bfFilterPop").style.display = "none";
// }
// function Filter() {
//   document.getElementById("bfFilterPop").style.display = "block";
// }
const textLink = {
  text1:
    "789BET - KHUYẾN MÃI NẠP 100% - CƯỢC THẢ GA - NHẬN SIÊU HOÀN TRẢ 1.58%",
  text2:
    "MOTO88 - HOÀN TRẢ KHỞI ĐIỂM 1.5%~3.5%. THƯỚNG 30% THẮNG THUA MỖI THÁNG",
  text3: "NEW88 - KHUYẾN MÃI NẠP 100% - CƯỢC THẢ GA - NHẬN SIÊU HOÀN TRẢ 1.58%",
  text4:
    "JUN88 - KHUYẾN MÃI NẠP ĐẦU 100% CHỈ MỘT VÒNG CƯỢC. TUYỂN ĐẠI LÝ HỢP TÁC HOA HỒNG 60%",
  text5: "F8BET - KHUYẾN MÃI NẠP 100% - CƯỢC THẢ GA - NHẬN SIÊU HOÀN TRẢ 1.58%",
  text6:
    "SHBET - KHUYẾN MÃI NẠP ĐẦU 100% CHỈ MỘT VÒNG CƯỢC. TUYỂN ĐẠI LÝ HỢP TÁC HOA HỒNG 60%",
  text7: "HI88 - KHUYẾN MÃI NẠP 100% - CƯỢC THẢ GA - NHẬN SIÊU HOÀN TRẢ 1.58%",
  text8:
    "789BET- KHUYẾN MÃI NẠP ĐẦU 100% CHỈ MỘT VÒNG CƯỢC. TUYỂN ĐẠI LÝ HỢP TÁC HOA HỒNG 60%",
};
export default function LiveScoreFootBall(livescore) {
  const [isOpen, setIsOpen] = useState(false);
  const [matchId, setMatchId] = useState({});

  const timeToday = new Date().getTime();
  const renderSwitch = (data) => {
    switch (data.status) {
      case 1:
        return "Hiệp 1";
        break;
      case 2:
        return "Nghỉ giữa hiệp";
        break;
      case 3:
        return "Hiệp 2";
        break;
      case -1:
        return "FT";
        break;
      case -12:
        return "FT";
        break;
      case -10:
        return "Hủy";
        break;
      case -11:
        return "Hủy";
        break;
      case -14:
        return "Hoãn";
        break;
      default:
        break;
    }
  };

  const handleClickRowLiveScore = (matchId, homeName, awayName) => {
    setMatchId({ matchId: matchId, homeName: homeName, awayName: awayName });
    setIsOpen(true);
  };
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      <div className="container mcontent">
        <BannerLeftLiveScore />
        <div id="main" className="col span_8">
          <div id="min">
            <ModalOdds data={matchId} isOpen={isOpen} />

            <table className="table-livescore">
              <thead className="thead-dark">
                <tr>
                  <th>Giải</th>
                  <th>Giờ</th>
                  <th>Chủ</th>
                  <th>Tỷ số</th>
                  <th>Khách</th>
                  <th>C/H-T</th>
                  <th>Số Liệu</th>
                </tr>
              </thead>
              <tbody>
                {livescore.livescore?.map((item, index) => {
                  return (
                    <>
                      {item.status !== -1 &&
                      item.status !== -10 &&
                      item.status !== -14 &&
                      item.status !== -11 ? (
                        <tr
                          key={index}
                          onClick={(e) =>
                            handleClickRowLiveScore(
                              item.matchId,
                              item.homeName,
                              item.awayName
                            )
                          }
                        >
                          <td
                            style={{
                              backgroundColor: item.leagueColor,
                              color: "white",
                            }}
                          >
                            <span>{item.leagueShortName}</span>
                          </td>
                          <td>
                            <span style={{ color: "#0d41ff" }}>
                              {item.status === 1 || item.status === 3 ? (
                                handleTime(
                                  formatTimePLay(parseInt(item.halfStartTime)),
                                  formatTimeNow(Date.now()),
                                  item.status
                                )
                              ) : item.status === 0 ? (
                                formatTime(item.matchTime)
                              ) : (
                                <span
                                  style={{
                                    color: "#1018ff",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {renderSwitch(item)}
                                </span>
                              )}
                            </span>
                          </td>
                          <td>
                            {item.homeYellow != 0 ? (
                              <span className="card-yellow">
                                {item.homeYellow}
                              </span>
                            ) : item.homeRed != 0 ? (
                              <span className="card-red">{item.homeRed}</span>
                            ) : (
                              ""
                            )}

                            <span>{item.homeName}</span>
                          </td>
                          <td>
                            <span style={{ color: "blue", fontWeight: "bold" }}>
                              {item.homeScore}
                            </span>
                            -
                            <span style={{ color: "blue", fontWeight: "bold" }}>
                              {item.awayScore}
                            </span>
                          </td>
                          <td>
                            <span>{item.awayName}</span>
                            {item.awayYellow != 0 ? (
                              <span className="card-yellow">
                                {item.awayYellow}
                              </span>
                            ) : item.awayRed != 0 ? (
                              <span className="card-red">{item.awayRed}</span>
                            ) : (
                              ""
                            )}
                          </td>
                          <td>
                            <span
                              style={{ color: "#c51928", fontWeight: "bold" }}
                            >
                              {item.homeCorner}
                            </span>
                            -
                            <span
                              style={{ color: "#c51928", fontWeight: "bold" }}
                            >
                              {item.awayCorner}
                            </span>
                          </td>
                          <td className="toolimg">
                            <span className="analyze-icon l0"></span>
                            <span className="odds-icon l0"></span>
                            <span className="Detail-icon l0"></span>
                            <span className="matchdata-icon l0"></span>
                            <span className="threeinone-icon l0"></span>
                          </td>
                        </tr>
                      ) : (
                        ""
                      )}
                      {index > 40 && index == 48 ? (
                        <tr className="text-ad1" key={`ad${index}`}>
                          <td colSpan={12}>
                            <Link href="https://789b.dev/SEO">
                              <b>
                                AD :<span>{textLink.text1}</span>
                              </b>
                            </Link>
                          </td>
                        </tr>
                      ) : index > 40 && index === 50 ? (
                        <tr className="text-ad2" key={`ad${index}`}>
                          <td colSpan={12}>
                            <Link href="https://topnhacai.gofiber.dev/moto88">
                              <b>
                                AD :<span>{textLink.text2}</span>
                              </b>
                            </Link>
                          </td>
                        </tr>
                      ) : index > 40 && index === 53 ? (
                        <tr className="text-ad1" key={`ad${index}`}>
                          <td colSpan={12}>
                            <Link href="https://topnhacai.gofiber.dev/New88">
                              <b>
                                AD :<span>{textLink.text3}</span>
                              </b>
                            </Link>
                          </td>
                        </tr>
                      ) : index > 40 && index === 55 ? (
                        <tr className="text-ad2" key={`ad${index}`}>
                          <td colSpan={12}>
                            <Link href="https://jun88.gofiber.dev/seo">
                              <b>
                                AD :<span>{textLink.text4}</span>
                              </b>
                            </Link>
                          </td>
                        </tr>
                      ) : index > 40 && index === 57 ? (
                        <tr className="text-ad1" key={`ad${index}`}>
                          <td colSpan={12}>
                            <Link href="">
                              <b>
                                AD :<span>{textLink.text5}</span>
                              </b>
                            </Link>
                          </td>
                        </tr>
                      ) : index > 40 && index === 59 ? (
                        <tr className="text-ad2" key={`ad${index}`}>
                          <td colSpan={12}>
                            <Link href="https://topnhacai.gofiber.dev/shbet">
                              <b>
                                AD :<span>{textLink.text6}</span>
                              </b>
                            </Link>
                          </td>
                        </tr>
                      ) : index > 40 && index === 61 ? (
                        <tr className="text-ad1" key={`ad${index}`}>
                          <td colSpan={12}>
                            <Link href="https://topnhacai.gofiber.dev/Hi88">
                              <b>
                                AD :<span>{textLink.text7}</span>
                              </b>
                            </Link>
                          </td>
                        </tr>
                      ) : index > 40 && index === 63 ? (
                        <tr className="text-ad2" key={`ad${index}`}>
                          <td colSpan={12}>
                            <Link href="https://789b.dev/SEO">
                              <b>
                                AD :<span>{textLink.text8}</span>
                              </b>
                            </Link>
                          </td>
                        </tr>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}

                <tr id="resultSplit" className="result-split">
                  <td colSpan="12">Kết quả</td>
                </tr>
                {livescore.livescore?.map((item, index) => {
                  return (
                    <>
                      {item.status === -1 ? (
                        <tr key={index}>
                          <td
                            style={{
                              backgroundColor: item.leagueColor,
                              color: "white",
                            }}
                          >
                            <span>{item.leagueShortName}</span>
                          </td>
                          <td>
                            <span style={{ color: "#0d41ff" }}>
                              {item.status === 1 || item.status === 3 ? (
                                handleTime(
                                  formatTimePLay(parseInt(item.halfStartTime)),
                                  formatTimeNow(Date.now()),
                                  item.status
                                )
                              ) : item.status === 0 ? (
                                formatTime(item.matchTime)
                              ) : (
                                <span
                                  style={{
                                    color: "#1018ff",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {renderSwitch(item)}
                                </span>
                              )}
                            </span>
                          </td>
                          <td>
                            {item.homeYellow != 0 ? (
                              <span className="card-yellow">
                                {item.homeYellow}
                              </span>
                            ) : item.homeRed != 0 ? (
                              <span className="card-red">{item.homeRed}</span>
                            ) : (
                              ""
                            )}

                            <span>{item.homeName}</span>
                          </td>
                          <td>
                            <span style={{ color: "blue", fontWeight: "bold" }}>
                              {item.homeScore}
                            </span>
                            -
                            <span style={{ color: "blue", fontWeight: "bold" }}>
                              {item.awayScore}
                            </span>
                          </td>
                          <td>
                            <span>{item.awayName}</span>
                            {item.awayYellow != 0 ? (
                              <span className="card-yellow">
                                {item.awayYellow}
                              </span>
                            ) : item.awayRed != 0 ? (
                              <span className="card-red">{item.awayRed}</span>
                            ) : (
                              ""
                            )}
                          </td>
                          <td>
                            <span
                              style={{ color: "#c51928", fontWeight: "bold" }}
                            >
                              {item.homeCorner}
                            </span>
                            -
                            <span
                              style={{ color: "#c51928", fontWeight: "bold" }}
                            >
                              {item.awayCorner}
                            </span>
                          </td>
                          <td className="toolimg">
                            <span className="analyze-icon l0"></span>
                            <span className="odds-icon l0"></span>
                            <span className="Detail-icon l0"></span>
                            <span className="matchdata-icon l0"></span>
                            <span className="threeinone-icon l0"></span>
                          </td>
                        </tr>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div
            id="bottomFly"
            style={{
              position: "fixed",
              zIndex: 1,
              width: 710,
              bottom: 0,
              right: "30%",
              display: showBanner ? "" : "none",
            }}
          >
            <div className="flyClose">
              <a href="" title="" rel="nofollow">
                <Image
                  src="/assets/images/jun88.jpg"
                  width="1920"
                  height="150"
                  style={{ marginBottom: 5 }}
                  alt="Nhà cái jun"
                />
              </a>
              <span className="close_btn" onClick={() => setShowBanner(false)}>
                X
              </span>
            </div>
          </div>
        </div>
        <BannerRightLiveScore />
      </div>

      <div id="mainMobile" style={{ display: "none" }}>
        <div className="game-list">
          {livescore.livescore?.map((item, index) => {
            return (
              <>
                {item.status !== -1 ? (
                  <div className="match" key={index}>
                    <div className="match-item">
                      <div className="team col">
                        <div className="status">
                          <span className="match-time">
                            {formatTime(item.matchTime)}
                          </span>
                          <span className="leage-name">
                            {item.leagueShortName}
                          </span>
                        </div>
                        <div>{item.homeName}</div>
                        <div>{item.awayName}</div>
                      </div>
                      <div className="card">
                        <div>
                          <span>Thẻ</span>
                        </div>
                        <div>
                          {item.homeYellow != 0 ? (
                            <span className="card-yellow">
                              {item.homeYellow}
                            </span>
                          ) : item.homeRed != 0 ? (
                            <span className="card-red">{item.homeRed}</span>
                          ) : (
                            "0"
                          )}
                        </div>
                        <div>
                          {item.awayYellow != 0 ? (
                            <span className="card-yellow">
                              {item.awayYellow}
                            </span>
                          ) : item.awayRed != 0 ? (
                            <span className="card-red">{item.awayRed}</span>
                          ) : (
                            "0"
                          )}
                        </div>
                      </div>
                      <div className="score">
                        <div className="time">Score</div>
                        <div className="home-score">{item.homeScore}</div>
                        <div className="away-score">{item.awayScore}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
        <div id="returnTop" style={{ bottom: "108" }}>
          <span
            id="btnFilter"
            className="flbtn icon iconfont icon-font-screen"
          ></span>
          <div id="autoHidd" style={{ display: "none" }}>
            <a>
              <span className="tl dl icon iconfont icon-font-small-document"></span>
            </a>
            <span
              className="tl dl icon iconfont icon-font-open-on"
              style={{ display: "none" }}
            ></span>
          </div>
        </div>
        <div id="bfFilterPop" style={{ display: "none" }}>
          <div id="popMask"></div>
          <div id="settingPop" className="max">
            <div className="title">
              <span>Lọc</span>
              <div id="closeFilter" className="close_b"></div>
            </div>
            <div className="info">
              <ul>
                <li>
                  <div className="name">Giải đấu</div>
                  <i className="more"></i>
                </li>
                <li>
                  <div className="name">Tỷ lệ</div>
                  <i className="more"></i>
                </li>
                <li>
                  <div className="name">Trận đấu hot (98)</div>
                  <i className="more"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
