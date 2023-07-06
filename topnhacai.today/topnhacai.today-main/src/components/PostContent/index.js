import Link from "next/link";
import React from "react";
import useSWR from "swr";
import Loading from "../Loading";
import PostsSportVideo from "../FootballCommentary/postVideo";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function PostContent(props) {

  var { data } = props;
  const { data: postTopViews, error: postTopViewsError } = useSWR(`${process.env.api_topnhacai}/posts/getListView?taxId=${data.post_taxid[0]._id}&limit=5`,fetcher);
  const { data: post, error1: postError } = useSWR(`${process.env.api_topnhacai}/posts/getPostByTax?slug=${data.post_taxid[0].tax_slug}&status=public&skip=0&limit=8`,fetcher);
  if(postTopViewsError){
    return <div>Failed Loading</div>;
  }

  if(!postTopViews)
  {
    return <Loading/>;
  }

  const createMarkup = () => {
    if (data && data.post_content) {
      return { __html: data.post_content };
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
  const date = new Date(data.createdAt);
  const textDate = "Ngày " + date.getDate() + " tháng " + (date.getMonth()+1) + " năm " + date.getFullYear();
  const postTop = () => {
    var result = null;
    if (postTopViews) {
      result = postTopViews.map((dt, index) => {
          return (
            <li key={index}>
            <a href={dt.post_slug}>
            <p dangerouslySetInnerHTML = {innerHTMLs(dt.post_title)}></p>
            </a>
          </li>
          );
      });
    }
    return result;
  };

  return (
    <>
      <div className="bxflex bxsingle_posttpl" style={{ transform: "none" }}>
        <div className="bxcontainer_single bxw65">
          <div className="bxtoptitle">
            <div className="bxinner">
              <h1 className="font30">{data && data ? data.post_title : ""}</h1>
              <div className="bxdate_cat">
                <div className="bxtime_cat">
                  {/* <span className="date">{data.createdAt}</span> */}
                  <span className="date">{textDate}</span>
                  <span className="chuyenmuc">
                    <a href={data.post_taxid[0]?.tax_slug}>
                    {data.post_taxid[0]?.tax_name}
                    </a>
                    {/* <a href="https://topnhacai.today/xo-so-online/lo-de-online/">
                      Lô đề online
                    </a> */}
                  </span>
                </div>
              </div>
              <div className="bxsapo">
                <p dangerouslySetInnerHTML={createMarkup()}></p>
              </div>
              <div className="bxxemnhanh">
                <div className="bxcontent"></div>
              </div>
            </div>
          </div>
        </div>
        <div
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
            }}
          >
            <div className="bxlisttopview">
              <h4>Xem nhiều nhất</h4>
              <ul>
                  {postTop()}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tieude_ds">
        <h2>Tin liên quan</h2>
        <PostsSportVideo data={post}/>
      </div>
    </>
  );
}

export default PostContent;
