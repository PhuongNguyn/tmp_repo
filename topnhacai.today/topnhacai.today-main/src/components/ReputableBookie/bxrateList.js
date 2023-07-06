import React from "react";
import Link from "next/link";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGift,
  faCheck,
  faStar,
  faChevronRight,
  faChevronDown,
  faRefresh,
  faTicket,
  faTrophy,
  faThumbsUp,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(
  fab,
  faGift,
  faCheck,
  faStar,
  faChevronRight,
  faChevronDown,
  faRefresh,
  faTicket,
  faTrophy,
  faThumbsUp,
  faCalendar
);

BxrateList.propTypes = {};

function BxrateList(props) {
  return (
    <div className="bxrate_list">
      <div className="bxinner">
        <div className="lists_rate">
          <div className="vblist_nhacaicontain ">
            <div className="vbinner">
              <div className="bxrate">
                <div className="bxinner">
                  <div className="bx_xephang">
                    <ul className="ulxephang">
                      <li data-sort="default" className="sort_phobien active">
                        <span>
                          <FontAwesomeIcon
                            icon={["fas", "fa-star"]}
                            style={{ marginRight: "5px" }}
                          />
                          Phổ biến nhất
                        </span>
                      </li>
                      <li data-sort="km" className="sort_km">
                        <span>
                          <FontAwesomeIcon
                            icon={["fas", "fa-ticket"]}
                            style={{ marginRight: "5px" }}
                          />
                          Khuyến mãi lớn nhất
                        </span>
                      </li>
                      <li data-sort="rate" className="sort_rate">
                        <span>
                          <FontAwesomeIcon
                            icon={["fas", "fa-trophy"]}
                            style={{ marginRight: "5px" }}
                          />
                          Đánh giá nhiều nhất
                        </span>
                      </li>
                      <li data-sort="count" className="sort_count">
                        <span>
                          <FontAwesomeIcon
                            icon={["fas", "fa-thumbs-up"]}
                            style={{ marginRight: "5px" }}
                          />
                          Lựa chọn của người chơi
                        </span>
                      </li>
                    </ul>
                    <div className="date">
                      <span>
                        <FontAwesomeIcon
                          icon={["fas", "fa-calendar"]}
                          style={{ marginRight: "5px" }}
                        />
                        Cập nhật 06/2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bxlisttile">
                <div className="bxinner">
                  <div className="bxtop">
                    <span>Top</span>
                  </div>
                  <div className="bxnhacai">
                    <span>Nhà cái</span>
                  </div>
                  <div className="bxkm">
                    <span>Khuyến mãi</span>
                  </div>
                  <div className="bxratenc">
                    <span>Đánh giá</span>
                  </div>
                  <div className="bxcomment">
                    <span>Bình chọn</span>
                  </div>
                  <div className="bxlienket">
                    <span>Liên kết</span>
                  </div>
                </div>
              </div>
              <div className="bxlist_nhacai" data-vbshow="10">
                <div className="bxinner">
                  <div
                    className="vbitem active"
                    data-index="0"
                    data-km="1500000"
                    data-rate="9.8"
                    data-count="985523"
                  >
                    <div className="bxtop">
                      <span className="stt">1</span>
                    </div>
                    <div className="bxnhacai">
                      <div className="logo">
                        <p>Nhà cái 789Bet</p>
                        <div className="bxnhacai-image">
                          <Link
                            href="https://www.7897891.vip/"
                            target="_blank"
                            rel="nofollow"
                            className="seoquake-nofollow"
                          >
                            <Image
                              data-lazyloaded="1"
                              src="https://topnhacai.b-cdn.net/logo-789.png"
                              data-src="https://topnhacai.b-cdn.net/logo-789.png"
                              width="89"
                              height="28"
                              title="Nhà cái 789Bet"
                              alt="w88"
                              data-ll-status="loaded"
                              className="entered litespeed-loaded"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bxkm">
                      <div className="ttkm">
                        <span className="ttkm">
                          Thưởng <strong>100%</strong> lên đến
                        </span>
                        <span className="giakm">
                          <FontAwesomeIcon icon={["fas", "fa-gift"]} style={{marginRight: '5px'}} />1.500.000&nbsp;VNĐ
                        </span>
                      </div>
                    </div>
                    <div className="bxratenc">
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Rút tiền nhanh
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Hỗ trợ nhiệt tình
                      </span>
                      <span className="ttn">
                        <FontAwesomeIcon icon={["fas", "fa-check"]} />
                        Odds cao
                      </span>
                    </div>
                    <div className="bxcomment">
                      <div className="ratenc">
                        <span className="ttrate">
                          <strong>9.8</strong>/10
                        </span>
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
                        <div className="slbl">
                          <span>
                            <strong>985.523</strong> lượt bình chọn
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bxlienket">
                      <div className="bxlink">
                        <Link
                          href="#"
                          target="_blank"
                          rel="nofollow"
                          className="seoquake-nofollow"
                        >
                          Đăng ký ngay
                        </Link>
                      </div>
                      <div className="bxdanhgia">
                        <Link href="#">
                          <>
                            Đánh giá<FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{marginLeft: "5px"}}/>
                          </>
                        </Link>
                      </div>
                    </div>
                  </div>
          
                </div>
              </div>
              <div className="bxlinkall showmore">
                <Link href="">XEM TẤT CẢ CÁC NHÀ CÁI UY TÍN KHÁC</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BxrateList;
