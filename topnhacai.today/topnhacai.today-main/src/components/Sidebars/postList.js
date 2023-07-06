import React from "react";
import Link from "next/link";

function PostList(props) {
  const showPostList = () => {
    var result = null;
    var { data } = props;
    if (data?.datas?.length > 0) {
      result = data?.datas?.map((dt, index) => {
        return (
          <li key={index}>
            <div className="bxitem">
              <div
                className="bxthumb"
                style={{
                  backgroundImage: `url(${dt.post_image})` ,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href={dt.post_slug}></a>
              </div>
              <div className="bxtitle">
                <p className="title">
                  <a href={dt.post_slug}>{dt.post_title}</a>
                </p>
              </div>
            </div>
          </li>
        );
      });
    }
    return result;
  };
  return (
    <article id="ctlist_posttax-34" className="widget widget_ctlist_posttax">
      <div className="bxwidget_lists list ">
        <div className="bxinner">
          <h5 className="bxwidget_title">
            <span
              className=""
              style={{ background: props.postSidebar.bgColor, color: "#fff" }}
            >
              {props.postSidebar.mark}
            </span>
            <Link href="/" target="_blank" rel="dofollow">
              {props.postSidebar.title}
            </Link>
          </h5>
          <div className="widgetcontent">
            <ul>{showPostList()}</ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostList;
