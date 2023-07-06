import React from "react";
import Image from "next/image";
import Link from "next/link";

function ToolBet(props) {
  return (
    <article id="ctwidget_tool-5" className="widget widget_ctwidget_tool">
      <div className="bxwidget_tool ">
        <div className="bxinner">
          <h5 className="bxwidget_title">
            <span className="">tool</span>
            Công cụ cá cược
          </h5>
          <div className="bxlist_tool">
            <div className="item"></div>
            <div className="item">
              <Link href="/ty-le-bong-da/">
                <a>
                  <span className="icon">
                    <span>
                      <Image
                        data-lazyloaded="1"
                        src="https://topnhacai.b-cdn.net/1-1.png"
                        data-src="https://topnhacai.b-cdn.net/1-1.png"
                        width="16"
                        height="9"
                        alt="1-1"
                      />
                    </span>
                  </span>
                  <span className="title">Tỷ lệ bóng đá</span>
                </a>
              </Link>
            </div>
            <div className="item">
              <Link href="/nhan-dinh-bong-da/">
              <a>
                <span className="icon">
                  <span>
                    <Image
                      data-lazyloaded="1"
                      src="https://topnhacai.b-cdn.net/Vector-Smart-Object1.png"
                      data-src="https://topnhacai.b-cdn.net/Vector-Smart-Object1.png"
                      width="18"
                      height="20"
                      alt="vector-smart-object1"
                    />
                  </span>
                </span>
                <span className="title">Nhận định bóng đá</span>
                </a>
              </Link>
            </div>
            <div className="item">
              <Link href="/soi-keo-bong-da/">
              <a>
                <span className="icon">
                  <span>
                    <Image
                      data-lazyloaded="1"
                      src="https://topnhacai.b-cdn.net/Vector-Smart-Object2.png"
                      data-src="https://topnhacai.b-cdn.net/Vector-Smart-Object2.png"
                      width="22"
                      height="16"
                      alt="vector-smart-object2"
                    />
                  </span>
                </span>
                <span className="title">Soi kèo bóng đá</span>
                </a>
              </Link>
            </div>
            <div className="item">
              <Link href="/lich-su-doi-dau/">
              <a>
                <span className="icon">
                  <span>
                    <Image
                      data-lazyloaded="1"
                      src="https://topnhacai.b-cdn.net/H2H.png"
                      data-src="https://topnhacai.b-cdn.net/H2H.png"
                      width="24"
                      height="9"
                      alt="h2h"
                    />
                  </span>
                </span>
                <span className="title">Lịch sử đối đầu</span>
                </a>
              </Link>
            </div>
            {/* <div className="item">
              <a href="/may-tinh-du-doan/">
              <a></a>
                <span className="icon">
                  <span>
                    <Image
                      data-lazyloaded="1"
                      src="https://vaobo.com/wp-content/uploads/2021/08/Vector-Smart-Object4.png?v=1655975658"
                      data-src="https://vaobo.com/wp-content/uploads/2021/08/Vector-Smart-Object4.png?v=1655975658"
                      width="22"
                      height="14"
                      alt="vector-smart-object4"
                    />
                  </span>
                </span>
                <span className="title">Máy tính dự đoán</span>
              </a>
            </div>
            <div className="item"></div> */}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ToolBet;
