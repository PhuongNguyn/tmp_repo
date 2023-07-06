import React, { useEffect, useState } from "react";
import Link from "next/link";
// import Pagination from "../Pagination/Index";

CategoryPost.propTypes = {};

function CategoryPost(props) {
  const createMarkup = () => {
    if (props.tax && props.tax.taxDescription) {
      return { __html: props.tax.taxDescription };
    } else {
      return { __html: "" };
    }
  };

  const innerHTMLs = (data) => {
    if (data) {
      return { __html: data };
    } else {
      return { __html: "" };
    }
  };

  
  const postGirl = () => {
    var result = null;
    var { data } = props;
    if (data && data.length > 0) {
      result = data.map((dt, index) => {
        // if (index < 2)
          return (
            <div className="gditem" key={index}>
            <div className="bxinner">
              <div
                className="thumb"
                style={{
                  background: "#1877f2",
                  backgroundImage: `url(${dt.post_image})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <Link href={dt.post_slug}><a></a></Link>
              </div>
              <p>
                <Link href={dt.post_slug}>
                {dt.post_title}
                </Link>
              </p>
            </div>
          </div>
          );
      });
    }
    return result;
  };


  const postHead = () => {
    var result = null;
    var { data } = props;
    if (data && data.length > 0) {
      result = data.map((dt, index) => {
        if (index < 2)
          return (
            <div className="bxitem_post" key={index}>
              <div
                className="thumb"
                style={{
                  background: "#1877f2",
                  backgroundImage: `url(${dt.post_image})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link href={dt.post_slug}>
                  <a></a>
                </Link>
              </div>
              <div className="bxtt">
                <h5>
                  <Link href={dt.post_slug}>{dt.post_title}</Link>
                </h5>
                <p
                  dangerouslySetInnerHTML={innerHTMLs(dt.post_description)}
                ></p>
              </div>
            </div>
          );
      });
    }
    return result;
  };

  const postBody = () => {
    var result = null;
    var { data } = props;
    if (data && data.length > 0) {
      result = data.map((dt, index) => {
        if (index > 1 && index < 5)
          return (
            <div className="bxitem_post" key={index}>
              <div
                className="thumb"
                style={{
                  background: "#1877f2",
                  backgroundImage: `url(${dt.post_image})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link href={dt.post_slug}>
                  <a></a>
                </Link>
                <div className="bxcat_abs ">
                  {/* <a href="https://vaobo.com/tro-choi/tro-choi-dan-gian/phom/">
                  Phỏm
                </a> */}
                </div>
              </div>
              <div className="bxtt">
                <h5>
                  <Link href={dt.post_slug}>{dt.post_title}</Link>
                </h5>
                <p
                  dangerouslySetInnerHTML={innerHTMLs(dt.post_description)}
                ></p>
              </div>
            </div>
          );
      });
    }
    return result;
  };

  const postBottom = () => {
    
    var result = null;
    if (props.posts) {
      result = props.posts?.datas?.map((dt, index) => {
          return (
            <div
              className={`bxflex_mg10 bxitem_post bxcol_${index}`}
              key={index}
            >
              <div
                className="thumb bxw30"
                style={{
                  background: "#1877f2",
                  backgroundImage: `url(${dt.post_image})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link href={dt.post_slug}>
                  <a></a>
                </Link>
                <div className="bxcat_abs">
                
                </div>
              </div>
              <div className="bxtt bxw70">
                <h5>
                  <Link href={dt.post_slug}>{dt.post_title}</Link>
                </h5>
                <p
                  dangerouslySetInnerHTML={innerHTMLs(dt.post_description)}
                ></p>
              </div>
            </div>
          );
      });
    }
    return result;
  };

  const postTopView = () => {
    var result = null;
    if (props.topViews) {
      result = props.topViews.map((dt, index) => {
          return (
            <li  key={index}>
            <a href={dt.post_slug}>
            <p dangerouslySetInnerHTML = {innerHTMLs(dt.post_title)}></p>
            </a>
          </li>
          );
      });
    }
    return result;
  };

  // const postTopView = () =>{
  //   var result = null;
  //   if (props.topViews.datas) {
  //     alert(props.topViews.datas);
  //     result = props.topViews.datas.map((dt, index) => {
  //       return ( 
  //           <li>
  //             <a href={dt.post_slug} key={index}>
  //               {dt.post_title}
  //             </a>
  //           </li>
  //       );
  //     });
  //   }
  //   return result;
  // };

  // var pagingData = {
  //     totalPage : props.posts.total,
  //     currentPage :  props.posts.skip
  // }
  
  return (
    <div className="bxinner_archivepost" style={{ transform: "none" }}>
      <div className="bxtoptitle">
        <div className="bxinner">
          <h1 className="font30">{props.title}</h1>
          <div className="des mb-4">
            {/* <p dangerouslySetInnerHTML={createMarkup()}></p> */}
          </div>
          {postGirl()}
        </div>
      </div>
      <div className="bxbanner bxflex_mg"></div>
      <div
        className="bxflex bxflex_mg bxbtcontain"
        style={{ transform: "none" }}
      >
        <div className="bxcontainer_single bxw65">
          <>
            {/* <Pagination data={pagingData}></Pagination> */}
          </>
 
        </div>
        {props.topViews?.length > 0 && <div
          id="sticked"
          className="bxsidepost bxw35"
          style={{
            position: "relative",
            overflow: "visible",
            boxSizing: "border-box",
            minHeight: "1px",
          }}
        >
            <div
            className="theiaStickySidebar"
            style={{
              paddingTop: "0px",
              paddingBottom: "1px",
              position: "static",
              top: "0px",
              left: "1053.94px",
            }}
          >
           <div className="bxlisttopview">
              <h4>Xem nhiều nhất</h4>
              <ul>
                  {postTopView()}
              </ul>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default CategoryPost;
