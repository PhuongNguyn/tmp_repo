import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
function ListRateComponent(props) {
  var { dealer, stt } = props;
  const showTag = (tags) => {
    var tag = null;
    if (tags.length > 0) {
      tag = tags.map((tag, index) => {
        return (
          <span className="ttn" key={index}>
            <FontAwesomeIcon icon={["fas", "fa-check"]} /> {tag}
          </span>
        );
      });
    }
    return tag;
  };
  return (
      <div className="bxlist_contain">
        <div className="bxitemnc">
          <div className="bxinner"><span className="count">{stt + 1}</span>
          <div className="bxnhacai-image">
            <Link href={dealer.dealer_link[0]} className="seoquake-nofollow">
              <a>
                <Image
                  src={dealer.dealer_image}
                  data-src={dealer.dealer_image}
                  width="89"
                  height="28"
                  title={dealer.dealer_name}
                  alt=""
                  data-ll-status="loaded"
                  className="entered litespeed-loaded"
                />
              </a>
            </Link>
          </div>
            <div className="bxkm">
              <div className="ttkm">
                <span className="ttkm">{dealer.dealer_promotion[0]?.dp_detail[0]} </span>
                <span className="giakm"> {dealer.dealer_promotion[0]?.dp_detail[1]}</span>
              </div>
            </div>
            <div className="bxlink">
              <Link
                href={dealer.dealer_link[0]}
                rel="nofollow"
                className="seoquake-nofollow"
              >
                <a>Chơi ngay</a>
              </Link>
            </div>
          </div>
        </div>
      {/* <div className="bxtop">
        <span className="stt">{stt + 1}</span>
      </div>
      <div className="bxnhacai">
        <div className="logo">
          <p>{dealer.dealer_name}</p>
          <div className="bxnhacai-image">
            <Link href={dealer.dealer_link[0]} className="seoquake-nofollow">
              <a>
                <Image
                  src={dealer.dealer_image}
                  data-src={dealer.dealer_image}
                  width="89"
                  height="28"
                  title={dealer.dealer_name}
                  alt=""
                  data-ll-status="loaded"
                  className="entered litespeed-loaded"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bxkm">
        <div className="ttkm">
          <span className="ttkm">
          <FontAwesomeIcon icon={["fas", "fa-gift"]} /> <b>{dealer.dealer_promotion.length > 0 && dealer.dealer_promotion[0].dp_detail[0] ? dealer.dealer_promotion[0].dp_detail[0]: "" }</b>
          </span>
          <span className="giakm">
            <FontAwesomeIcon icon={["fas", "fa-gift"]} />
            {dealer.dealer_promotion.length > 0 && dealer.dealer_promotion[0].dp_detail[1] ?  dealer.dealer_promotion[0].dp_detail[1] : "" }
          </span>
        </div>
      </div>
      <div className="bxratenc">{showTag(dealer.dealer_tag_rate)}</div>
      <div className="bxcomment">
        <div className="ratenc">
          <span className="ttrate">
            <strong>{dealer.dealer_star_rate}</strong>/10
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
              <strong>{dealer.dealer_rating[0]}</strong> lượt bình chọn
            </span>
          </div>
        </div>
      </div>
      <div className="bxlienket">
        <div className="bxlink">
          <Link
            href={dealer.dealer_link[0]}
            rel="nofollow"
            className="seoquake-nofollow"
          >
            <a>Đăng ký ngay</a>
          </Link>
        </div>
        <div className="bxdanhgia">
          <a href="">
            <span>Đánh giá </span> 
            <FontAwesomeIcon icon={["fas", "fa-chevron-right"]} />
          </a>
        </div>
      </div> */}
    </div>
  );
}

function ListRate(props) {
  const [active, setActive] = useState(false);
  const showDealerList = () => {
    var result = null;
    var { data } = props;
    if (data?.length > 0) {
      result = data?.map((dt, index) => {
        if (!active) {
          if (index < 5) {
            return (result = (
              <ListRateComponent dealer={dt} key={index} stt={index} />
            ));
          }
        } else {
          return (result = (
            <ListRateComponent dealer={dt} key={index} stt={index} />
          ));
        }
      });
    }
    return result;
  };
  return (
    <div className="bxrate_list">
      <div className="bxinner">
        <div className="lists_rate">
          <div className="vblist_nhacaicontain ">
            <div className="vbinner">
              {/* <div className="bxlisttile">
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
              </div> */}
              <div className="bxlist_nhacai" data-vbshow="5">
                <div className="bxinner">{showDealerList()}</div>
              </div>
              <div className="bxlinkall ">
                <Link href="" scroll={false}>
                  <a onClick={() => setActive(!active)}>
                    {!active ? `XEM TẤT CẢ CÁC NHÀ CÁI UY TÍN KHÁC` : `THU GỌN`}{" "}
                    {!active ? (
                      <FontAwesomeIcon
                        icon={["fas", "fa-chevron-down"]}
                        style={{ marginLeft: "5px" }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={["fas", "fa-chevron-up"]}
                        style={{ marginLeft: "5px" }}
                      />
                    )}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListRate;
