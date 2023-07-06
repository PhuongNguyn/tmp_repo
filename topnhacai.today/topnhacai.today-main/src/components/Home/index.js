/* eslint-disable react/jsx-no-target-blank */
import React, { useMemo } from "react";
// import Link from "next/link";
import Image from "next/image";
// import HightLightList from "./hightlightList";
// import ColListNews from "./colListNews";
// import ColListNews2 from "./colListNews2";
// import * as img from "../../const/Image";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGift,
  faCheck,
  faStar,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faRefresh,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import Tips from "../Tips";
import CommentaryList from "../../containers/News/CommentaryList";
import DealersList from "../../components/common/DealersList";
// import CallApiFootballList from "../../pages/api/callApiFootballList";
import GetHightLightList from "../../containers/News/GetHightLightList";
import PostsNewsList from "../../containers/News/PostsListNews";
import PostsNewsList2 from "../../containers/News/PostsListNews2";
import { customLoader } from "./colListNews";

library.add(
  fab,
  faGift,
  faCheck,
  faStar,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faRefresh,
  faPlay
);

function Home(props) {
  const dataMidd = useMemo(() => {
    let midd, middRight, middLeft = {};
    props?.data && props.data.forEach(element => {
      if (element.position === "Middle") {
        midd = element;
      }
      if (element.position === "BottomRight") {
        middRight = element;
      }
      if (element.position === "BottomLeft") {
        middLeft = element;
      }
    });
    return {midd, middRight, middLeft}
  },[props.data])
 

  return (
    <>
      <DealersList dealerList={props.dealerList} />
      <div className="bxbannerqq">
        <div className="bxinner">
          <div className="bximg">
            <a
              rel="nofollow"
              target={'_blank'}
              href={dataMidd.midd?.link}
              className="seoquake-nofollow "
            >
              <Image
                data-lazyloaded="1"
                src={dataMidd.midd?.image}
                data-src={dataMidd.midd?.image}
                width="1045"
                height="83"
                alt="bb2"
                data-ll-status="loaded"
                className="entered litespeed-loaded"
                style={{cursor : 'pointer'}}
                loader={({src}) => customLoader({src, w: props.isMobile ? '640' :'1920' })}
              />
            </a>
          </div>
        </div>
      </div>

      <CommentaryList dataPost={props.dataPost} />
      <GetHightLightList  data={props.dataPost.highlightFootball} />
      <PostsNewsList dataPost={props.dataPost} />
      <div className="bxbannerqq">
        <div className="bxinner">
          <div className="bxflex bxflex_mg">
            <div className="bxw50 bximg">
              <a
              rel="noreferrer nofollow"
                target={"_blank"}
                href={dataMidd.middLeft?.link}
                className="seoquake-nofollow"
              >
                <Image
                  data-lazyloaded="1"
                  src={dataMidd.middLeft?.image}
                  data-src={dataMidd.middLeft?.image}
                  width="511"
                  height="90"
                  alt="banner-1"
                  style={{cursor : 'pointer'}}
                  loader={({src}) => customLoader({src, w:'640'})}
                  
                />
              </a>
            </div>
            <div className="bxw50 bximg">
              <a
              rel="noreferrer nofollow"
                target={'_blank'}
                href={dataMidd.middRight?.link}
                className="seoquake-nofollow"
              >
                <Image
                  data-lazyloaded="1"
                  src={dataMidd.middRight?.image}
                  data-src={dataMidd.middRight?.image}
                  width="511"
                  height="90"
                  alt="banner-2"
                  style={{cursor : 'pointer'}}
                  loader={({src}) => customLoader({src, w:'640'})}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <PostsNewsList2 dataPost={props.dataPost} />
    </>
  );
}

export default Home;
