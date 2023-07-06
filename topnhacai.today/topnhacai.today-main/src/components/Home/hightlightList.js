import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { customLoader } from "./colListNews";

function HightLightList(props) {
  const showHighLightList = () => {
    var result = null;
    var { data } = props;
    if (data && data.length > 0) {
      result = data.map((dt, index) => {
        if (index < 8)
          return (
            <div className="bxitem " key={index}>
              <div className="bxinner">
                <Link
                    href={`/${dt.post_slug}`}
                    title="Video highlight Vancouver Whitecaps FC vs York 9 FC, ngày 23/06"
                  className="thumb link_abs"
                  data-item="newzzzzz"
                  // style={{
                  //   background: "#1a73e8",
                  //   backgroundImage:
                  //     `url(${dt.post_image})`,
                  //   backgroundPosition: "center center",
                  //   backgroundSize: "cover",
                  //   backgroundRepeat: "no-repeat",
                  // }}
                >
                  <Image
                  data-lazyloaded="1"
                  src={dt.post_image}
                  data-src={dt.post_image}
                  width="256"
                  height="128"
                  objectFit="cover"
                  alt="banner-1"
                  style={{cursor : 'pointer'}}
                  loader={({src}) => customLoader({src, w: 640})}
                />

                </Link>
                <div className="bxnd">
                  <Link
                    href={`/${dt.post_slug}`}
                    title="Video highlight Vancouver Whitecaps FC vs York 9 FC, ngày 23/06"
                  >
                    {dt.post_title}
                  </Link>
                </div>
              </div>
            </div>
          );
      });
    }
    return result;
  };

  return (
    <div className="bxss bxlistnd marg0" style={{marginTop: "20px"}}>
      <div className="bxinner">
        <div className="bxlist_video_cat">
          <div className="bxvideo_contain">
            <div className="bxinner grid">
              <div className="bxhead">
                <h2>
                  {/* <Image
                    data-lazyloaded="1"
                    src="https://topnhacai.b-cdn.net/star.png"
                    data-src="https://topnhacai.b-cdn.net/star.png"
                    width="15"
                    height="14"
                    alt="star"
                  /> */}
                  <Link href="/">Highlight bóng đá</Link>
                </h2>
                <div className="bxlink">
                  <Link href="/video/highlight-bong-da">
                    <a>
                      <span>Xem tất cả </span>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="bxbox_grid">{showHighLightList()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HightLightList;
