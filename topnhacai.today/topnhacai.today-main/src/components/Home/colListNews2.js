import React from "react";
import Link from "next/link";
import Image from "next/image";
import { customLoader } from "./colListNews";

function PostList2(props) {
  const showPostList = () => {
    var result = null;
    var { data } = props;
    if (data && data.length > 0) {
      const newArray = [...data].reverse().slice(0,7)
      result = newArray.map((dt, index) => {
          return (
            <div className="item" key={index}>
              <a
                href={dt.post_slug} title={dt.post_title}
                className="thumb link_abs"
                // style={{
                //   background: "#1a73e8",
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
                  layout='fill'
                  objectFit="cover"
                  width="256"
                  height="128"
                  alt="banner-1"
                  style={{cursor : 'pointer'}}
                  data-ll-status="loaded"
                  className="entered litespeed-loaded"
                  loader={({src}) => customLoader({src, w:640})}
                />
              </a>
              <div className="bxnd">
                <a href={dt.post_slug} title={dt.post_title}>
                  {dt.post_title}
                </a>
              </div>
            </div>
          );
      });
    }
    return result;
  };
  return (
    <div className="bxw33 pad20 bxbo_tt bxitem_cat">
      <div className="bxinner">
        <div className="bxlistbytax style2">
          <h2>
            <Link href={props.slug}><span>{props.title}</span></Link>
          </h2>
          <div className="bxinner ">{showPostList()}</div>
        </div>
      </div>
    </div>
  );
}

function ColListNews2(props) {
  return (
    <div className="bxchuyenmuc bx_col3">
      <div className="bxflex bxflex_mg">
        <PostList2 data={props.data1} title="Cá Cược Thể Thao" slug="ca-cuoc-the-thao" />
        <PostList2 data={props.data2} title="Trò Chơi" slug="tro-choi" />
        <PostList2 data={props.data3} title="Thư viện cá cược" slug="lo-de-online" />
      </div>
    </div>
  );
}

export default ColListNews2;
