import React from "react";

function PostsSport(props) {
  const createMarkup = (db) => {
    if (db) {
      return { __html: db };
    } else {
      return { __html: "loading..." };
    }
  };
  const postHead = () => {
    var result = null;
    var { data } = props;
    if (data && data.length > 0) {
      result = data.map((dt, index) => {
        if (index < 2)
          return (
            <div className="bxlist_item " key={index}>
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
                    href={`/'nhan-dinh-bong-da/` + dt.post_slug}
                    title={dt.post_title}
                    rel="dofollow"
                  ></a>
                </div>
                <div className="bxnd">
                  <a
                    href={`/nhan-dinh-bong-da/` + dt.post_slug}
                    title={dt.post_title}
                    rel="dofollow"
                  >
                    {dt.post_title}
                  </a>
                  <div className="des">
                    <p
                      dangerouslySetInnerHTML={createMarkup(
                        dt.post_description
                      )}
                    ></p>
                  </div>
                </div>
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
        if (index > 3)
          return (
            <div className="bxlist_item " key={index}>
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
                    href={`/nhan-dinh-bong-da/` + dt.post_slug}
                    title={dt.post_title}
                    rel="dofollow"
                  ></a>
                </div>
                <div className="bxnd">
                  <a
                    href={`/nhan-dinh-bong-da/` + dt.post_slug}
                    title={dt.post_title}
                    rel="dofollow"
                  >
                    {dt.post_title}
                  </a>
                  <div className="des">
                    <p
                      dangerouslySetInnerHTML={createMarkup(
                        dt.post_description
                      )}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          );
      });
    }
    return result;
  };

  {
    /*Bài viết liên quan chia 3 cột */
  }
  const postColThree = () => {
    var result = null;
    var { data } = props;
    if (data && data.length > 0) {
      result = data.map((dt, index) => {
        if (index < 3)
          return (
            <div className="bxlist_item postcol3" key={index}>
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
                    href={`/nhan-dinh-bong-da/` + dt.post_slug}
                    title={dt.post_title}
                    rel="dofollow"
                  ></a>
                </div>
                <div className="bxnd">
                  <a
                    href={`/nhan-dinh-bong-da/` + dt.post_slug}
                    title={dt.post_title}
                    rel="dofollow"
                  >
                    {dt.post_title}
                  </a>
                  <div className="des">
                    <p
                      dangerouslySetInnerHTML={createMarkup(
                        dt.post_description
                      )}
                    ></p>
                  </div>
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
            <div className="bxbig_list">{postHead()}</div>
            <div className="bxbig_list">{postColThree()}</div>
            <div className="bxlist_small bxle">{postBody()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsSport;
