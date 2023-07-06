import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { customLoader } from "./colListNews";

function NewsList(props) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  },[])
  const createMarkup = (db) => {
    if (db && render) {
      return { __html: db };
    } else {
      return { __html: "loading..." };
    }
  };
  const commentaryList = () => {
    var result = null;
    var { data } = props;
    
    if (data&& data.length > 0) {
      result = data.map((dt, index) => {
        if(index < 5)
        return (
          <div className="item bxlist_small" key={index}>
            <a
              href={`/` + dt.post_slug} title={dt.post_title}
              className="thumb link_abs"
              // style={{
              //   backgroundColor: "#1a73e8",
              //   backgroundImage: `url(${dt.post_image})`,
              //   backgroundPosition: "center center",
              //   backgroundSize: "cover",
              //   backgroundRepeat: "no-repeat",
              // }}
            >
                <Image
                  data-lazyloaded="1"
                  src={dt.post_image}
                  data-src={dt.post_image}
                  layout="fill"
                  width="256"
                  height="128"
                  objectFit="cover"
                  alt="banner-1"
                  style={{cursor : 'pointer'}}
                  loader={({src}) => customLoader({src})}
                />

            </a>
            <div className="bxnd">
            <a href={`/` + dt.post_slug} title={dt.post_title}>
                {dt.post_title}
                </a>
              <div className="des"><p dangerouslySetInnerHTML={createMarkup(dt.post_description)}></p></div>
            </div>
          </div>
        );
      });
    }
    return result;
  };

  const CasinoOnline = () => {
    var result = null;
    var { data2 } = props;
    // if(data2){
    //   newArray = [...data2].reverse()
    // }
    if (data2 && data2.length > 0) {
      result = data2.map((dt, index) => {
        if(index < 5)
        return (
          <div className="item" key={index}>
            <div
              className="thumb link_abs"
              style={{
                backgroundColor: "#1a73e8",
                backgroundImage: `url(${dt.post_image})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <a href={`/` + dt.post_slug} title={dt.post_title}></a>
            </div>
            <div className="bxnd">
              <a href={`/` + dt.post_slug} title={dt.post_title}>
                {dt.post_title}
              </a>
              <div className="des"><p dangerouslySetInnerHTML={createMarkup(dt.post_description)}></p></div>
            </div>
          </div>
        );
      });
    }
    return result;
  };

  
  return (
    <div className="bxchuyenmuc  bx_col2">
      <div className="bxflex bxflex_mg">
        <div className="bxw50 bxbo_tt pad20 bxitem_cat">
          <div className="bxinner">
            <div className="bxlistbytax">
              <h2>
                <Link href="/nhan-dinh-bong-da/">Nhận định bóng đá</Link>
              </h2>
              <div className="bxinner">{commentaryList()}</div>
            </div>
          </div>
        </div>
        <div className="bxw50 bxbo_tt pad20 bxitem_cat">
          <div className="bxinner">
            <div className="bxlistbytax ">
              <h2>
                <Link href="/tro-choi/">Casino Trực Tuyến</Link>
              </h2>
              <div className="bxinner ">{CasinoOnline()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsList;
