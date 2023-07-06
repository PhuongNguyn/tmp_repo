import React from "react";
import Image from "next/image";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);

function Menu(props) {
  return (
    <div className="topbanner" style={{padding: '5px 0px'}}>
      <div className="container">
        <div className="row_flex">
          <div className="menutopbar ctspan_8">
            {/* <div className="menu-header-menu-container">
              <ul id="top-menu" className="nav navbar-nav">
                <li
                  id="menu-item-23208"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23208"
                >
                  <Link href="/soi-keo-bong-da">Soi kèo bóng đá</Link>
                </li>
                <li
                  id="menu-item-5422"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5422"
                >
                  <Link href="/lich-su-doi-dau">Lịch sử đối đầu</Link>
                </li>
                <li
                  id="menu-item-51160"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51160"
                >
                  <Link href="/ket-qua-bong-da">Kết quả bóng đá</Link>
                </li>
                <li
                  id="menu-item-14123"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14123"
                >
                  <Link href="/ty-le-bong-da">Tỷ lệ bóng đá</Link>
                </li>
                <li
                  id="menu-item-4314"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4314"
                >
                  <Link href="/link-vao-nha-cai">Link vào nhà cái</Link>
                </li>
                <li
                  id="menu-item-1229"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1229"
                >
                  <Link href="/so-sanh-nha-cai">So Sánh Nhà Cái</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1229">
                  <Link href="/ty-so-truc-tuyen">Tỷ Số Trực Tuyến</Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="ctspan_4 topbar_right">
            <div
              className="btnsearch"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Image
                data-lazyloaded="1"
                src={`https://topnhacai.b-cdn.net/icon-vn.png`}
                width={18}
                height={18}
                objectFit="contain"
                alt="viet nam"
                className="entered litespeed-loaded"
              />
              <span style={{ fontSize: 12, color: "#bcc1f8", marginLeft: 6 }}>
                Tiếng Việt
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
