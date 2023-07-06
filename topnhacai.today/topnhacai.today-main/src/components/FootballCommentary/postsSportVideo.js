import React from "react";

function PostsSportVideo(props) {
  const createMarkup = (db) => {
    if (db) {
      return { __html: db };
    } else {
      return { __html: "loading..." };
    }
  };

  {/*Bài viết liên quan chia 2 cột */}
  const postcolTwo = () =>{
    var result = null;
    var { data } = props;
    if(data && data.length > 0){
      result = data.map((dt, index) => {
        if(index < 2)
        return (
          <div className="bxlist_item postcoltwo_video" key={index}>
            <div className="bxinner">
              <div
              className="thumb link_abs"
              style={{
                backgroundColor: "#1a73e8",
                backgroundImage: `url(${dt.post_image})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}>
                <a
                href={dt.post_slug}
                title={dt.post_title}
                rel="dofollow"></a>
              </div>
              <div className="bxnd">
                <a
                  href={dt.post_slug}
                  title={dt.post_title}
                  rel="dofollow">
                  {dt.post_title}
                </a>
              </div>
            </div>
          </div>
        );
      });
    }
    return result;
  }
  {/*Bài viết liên quan chia 3 cột */}
  const postColThree = () => {
    var result = null;
    var { data } = props;
    if (data && data.length > 0) {
      result = data.map((dt, index) => {
        if (index < 8)
          return (
            <div className="bxlist_item postcol_video" key={index}>
              <div className="bxinner">
                <div
                  className="thumb link_abs"
                  style={{
                    backgroundColor: "#1a73e8",
                    backgroundImage: `url(${dt.post_image})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <a
                    href={dt.post_slug}
                    title={dt.post_title}
                    rel="dofollow"
                  ></a>
                </div>
                <div className="bxnd">
                  <a
                    href={dt.post_slug}
                    title={dt.post_title}
                    rel="dofollow"
                  >
                    {dt.post_title}
                  </a>
                  {/* <div className="des">
                    <p
                      dangerouslySetInnerHTML={createMarkup(
                        dt.post_description
                      )}
                    ></p>
                  </div> */}
                </div>
              </div>
            </div>
          );
      });
    }
    return result;
  };
  return (
    <div className="bxss bxlistnd">
      <div className="bxinner">
        <div className="bxnd_dudoan">
          <div className="listtax_nd">
            {/* <div className="bxbig_list">{postHead()}</div> */}
            <div className="bxbig_list">{postcolTwo()}</div>
            <div className="bxbig_list list_video">{postColThree()}</div>
            {/* <div className="bxlist_small bxle">{postBody()}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsSportVideo;
