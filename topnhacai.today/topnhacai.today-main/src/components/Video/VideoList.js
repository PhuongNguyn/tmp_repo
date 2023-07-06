import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        if (index > 2)
          return (
            <div className="bxlist_item postcol3" key={index}>
              {/* <div className="bxinner">
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
              </div> */}
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
          <div className="bxlist_video_new"></div>
          <div className="bxlist_video_cat">
            <div className="bxvideo_contain">
              <div className="bxinner grid">
                <div className="bxhead">
                  <h2>
                    <Image
                      data-lazyloaded="1"
                      src="https://topnhacai.b-cdn.net/star.png"
                      data-src="https://topnhacai.b-cdn.net/star.png"
                      width="15"
                      height="14"
                      alt="star"
                    />
                    <Link href="https://topnhacai.today/highlight-bong-da/">
                      Highlight bóng đá
                    </Link>
                  </h2>
                  <div className="bxlink">
                    <Link href="https://topnhacai.today/highlight-bong-da/">
                      <>
                        Xem tất cả
                        <FontAwesomeIcon
                          icon={["fas", "fa-chevron-right"]}
                          style={{ margin: "0 5px" }}
                        />
                      </>
                    </Link>
                  </div>
                </div>
                <div className="bxbox_grid">
                  <div className="bxitem ">
                    <div className="bxinner">
                      <div
                        className="thumb link_abs"
                        data-item="newzzzzz"
                        style={{
                          backgroundColor: "#1a73e8",
                          backgroundImage:
                            "url(https://topnhacai.b-cdn.net/video-highlight-washington-d-c-united-vs-bayern-munich-ngay-21-07-400x269.webp)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <Link
                          href="https://topnhacai.today/"
                          title="Video highlight Atletico Mineiro vs Fortaleza CE, ngày 26/06"
                        >
                          <a></a>
                        </Link>
                      </div>
                      <div className="bxnd">
                        <Link
                          href="https://topnhacai.today/"
                          title="Video highlight Atletico Mineiro vs Fortaleza CE, ngày 26/06"
                        >
                          Video highlight Atletico Mineiro vs Fortaleza CE, ngày
                          26/06
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner_video">
              <Image
                data-lazyloaded="1"
                src="https://topnhacai.b-cdn.net/video-highlight-washington-d-c-united-vs-bayern-munich-ngay-21-07-400x269.webp"
                data-src="https://topnhacai.b-cdn.net/video-highlight-washington-d-c-united-vs-bayern-munich-ngay-21-07-400x269.webp"
                width="511"
                height="90"
                alt="banner-1"
                data-ll-status="loaded"
                className="entered litespeed-loaded"
              />
              <Image
                data-lazyloaded="1"
                src="https://topnhacai.b-cdn.net/video-highlight-washington-d-c-united-vs-bayern-munich-ngay-21-07-400x269.webp"
                data-src="https://topnhacai.b-cdn.net/video-highlight-washington-d-c-united-vs-bayern-munich-ngay-21-07-400x269.webp"
                width="511"
                height="90"
                alt="banner-2"
                data-ll-status="loaded"
                className="entered litespeed-loaded"
              />
            </div>
            <div className="bxvideo_contain">
              <div className="bxinner grid">
                <div className="bxhead">
                  <h2>
                    <Image
                      data-lazyloaded="1"
                      src="https://topnhacai.b-cdn.net/video-highlight-washington-d-c-united-vs-bayern-munich-ngay-21-07-400x269.webp"
                      data-src="https://topnhacai.b-cdn.net/video-highlight-washington-d-c-united-vs-bayern-munich-ngay-21-07-400x269.webp"
                      width="15"
                      height="15"
                      alt="bongda"
                    />
                    <Link href="https://topnhacai.today/video-bong-da/">
                      Video bóng đá
                    </Link>
                  </h2>
                  <div className="bxlink">
                    <Link href="https://topnhacai.today/video-bong-da/">
                      <>
                        Xem tất cả
                        <FontAwesomeIcon
                          icon={["fas", "fa-chevron-right"]}
                          style={{ margin: "0 5px" }}
                        />
                      </>
                    </Link>
                  </div>
                </div>
                <div className="bxbox_grid">
                  <div className="bxitem ">
                    <div className="bxinner">
                      <div
                        className="thumb link_abs"
                        data-item="newzzzzz"
                        style={{
                          backgroundColor: "#1a73e8",
                          backgroundImage:
                            "url(https://topnhacai.b-cdn.net/video-highlight-washington-d-c-united-vs-bayern-munich-ngay-21-07-400x269.webp)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <span className="iconvd">
                          <span>
                            <FontAwesomeIcon icon={["fas", "fa-play"]} />
                          </span>
                        </span>
                        <Link
                          href="https://topnhacai.today/video-bong-da/"
                          title="Top 10 pha lập công đẹp mắt nhất cúp C1 châu Âu 2021/22"
                        >
                          <a></a>
                        </Link>
                      </div>
                      <div className="bxnd">
                        <Link
                          href="https://topnhacai.today/video-bong-da/"
                          title="Top 10 pha lập công đẹp mắt nhất cúp C1 châu Âu 2021/22"
                        >
                          Top 10 pha lập công đẹp mắt nhất cúp C1 châu Âu
                          2021/22
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bxvideo_contain">
              <div className="bxinner grid">
                <div className="bxhead">
                  <h2>
                    <Image
                      data-lazyloaded="1"
                      src="https://topnhacai.b-cdn.net/cacuoc.png"
                      data-src="https://topnhacai.b-cdn.net/cacuoc.png"
                      width="15"
                      height="15"
                      alt="cacuoc"
                    />
                    <Link href="https://topnhacai.today/video-ca-cuoc/">
                      Video cá cược
                    </Link>
                  </h2>
                  <div className="bxlink">
                    <Link href="https://topnhacai.today/video-ca-cuoc/">
                      <>
                        Xem tất cả
                        <FontAwesomeIcon
                          icon={["fas", "fa-chevron-right"]}
                          style={{ margin: "0 5px" }}
                        />
                      </>
                    </Link>
                  </div>
                </div>
                <div className="bxbox_grid">
                  <div className="bxitem ">
                    <div className="bxinner">
                      <div
                        className="thumb link_abs"
                        data-item="newzzzzz"
                        style={{
                          backgroundColor: "#1a73e8",
                          backgroundImage:
                            "url(https://topnhacai.b-cdn.net/video-bk8-400x269.jpg)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <span className="iconvd">
                          <span>
                            <FontAwesomeIcon icon={["fas", "fa-play"]} />
                          </span>
                        </span>
                        <Link
                          href="https://topnhacai.today/video-danh-gia-nha-cai-bk8/"
                          title="Video đánh giá nhà cái BK8"
                        >
                          <a></a>
                        </Link>
                      </div>
                      <div className="bxnd">
                        <Link
                          href="https://topnhacai.today/video-danh-gia-nha-cai-bk8/"
                          title="Video đánh giá nhà cái BK8"
                        >
                          Video đánh giá nhà cái BK8
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsSport;
