import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function TopHeader(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState({});

  function handleClick() {
    setToggleMenu(!toggleMenu);
  }

  function handleClickSubmenu(e) {
    const map = e.currentTarget.dataset;
    const obj = { ...map };
    if (obj) {
      if (obj.id !== toggleSubMenu.id) {
        let toggleSubMenuId = { id: obj.id };
        setToggleSubMenu(toggleSubMenuId);
      } else {
        setToggleSubMenu({});
      }
    }
  }

  const topMenu = [
    {
      id: "cong-cu-cacuoc",
      label: "Công cụ cá cược",
      link: "",
      subItems: [
        {
          id: "soi-keo-bong-da",
          label: "Soi kèo bóng đá",
          link: "/soi-keo-bong-da",
          parentId: "",
        },
        {
          id: "lich-su-doi-dau",
          label: "Lịch sử đối đầu",
          link: "/lich-su-doi-dau",
          parentId: "",
        },
        {
          id: "ket-qua-bong-da",
          label: "Kết quả bóng đá",
          link: "/ket-qua-bong-da",
          parentId: "",
        },
        {
          id: "ty-le-bong-da",
          label: "Tỷ Lệ Bóng Đá",
          link: "/ty-le-bong-da",
          parentId: "",
        },
        {
          id: "link-vao-nha-cai",
          label: "Link vào nhà cái",
          link: "/link-vao-nha-cai",
          parentId: "",
        },
        {
          id: "so-sanh-nha-cai",
          label: "So Sánh Nhà Cái",
          link: "/so-sanh-nha-cai",
          parentId: "",
        },
        {
          id: "ty-so-truc-tuyen",
          label: "Tỷ Số Trực Tuyến",
          link: "/ty-so-truc-tuyen",
          parentId: "",
        },
      ],
    },
  ];

  const mainMenu = [
    {
      id: "nha-cai-uy-tin",
      label: "Nhà cái uy tín",
      link: "/nha-cai-uy-tin",
      subItems: [],
      // subItems: [
      //   {
      //     id: "casino-truc-tuyen",
      //     label: "Casino trực tuyến",
      //     link: "/casino-truc-tuyen",
      //     parentId: "nha-cai-uy-tin",
      //   },
      //   {
      //     id: "nha-cai-lo-de",
      //     label: "Nhà cái lô đề",
      //     link: "/nha-cai-lo-de",
      //     parentId: "nha-cai-uy-tin",
      //   },
      //   {
      //     id: "ca-cuoc-esport",
      //     label: "Cá cược esport",
      //     link: "/ca-cuoc-esport",
      //     parentId: "nha-cai-uy-tin",
      //   },
      // ],
    },
    {
      id: "tips-bong-da",
      label: "TIPS BÓNG ĐÁ",
      link: "/tips-bong-da",
      subItems: [],
    },
    {
      id: "nhan-dinh-bong-da",
      label: "Nhận định bóng đá",
      link: "/nhan-dinh-bong-da",
      subItems: [],
    },
    {
      id: "thu-vien-ca-cuoc",
      label: "Thư Viện Cá Cược",
      link: "/thu-vien-ca-cuoc",
      subItems: [],
      // subItems: [
      //   {
      //     id: "huong-dan-ca-cuoc",
      //     label: "Hướng dẫn cá cược",
      //     link: "/huong-dan-ca-cuoc",
      //     parentId: "thu-vien-ca-cuoc",
      //   },
      //   {
      //     id: "kinh-nghiem-ca-cuoc",
      //     label: "Kinh nghiệm cá cược",
      //     link: "/kinh-nghiem-ca-cuoc",
      //     parentId: "thu-vien-ca-cuoc",
      //   },
      //   {
      //     id: "tin-tuc-ca-cuoc",
      //     label: "Tin tức cá cược",
      //     link: "/tin-tuc-ca-cuoc",
      //     parentId: "thu-vien-ca-cuoc",
      //   },
      //   {
      //     id: "tin-the-thao",
      //     label: "Tin thể thao",
      //     link: "/tin-the-thao",
      //     parentId: "thu-vien-ca-cuoc",
      //   },
      // ],
    },
    {
      id: "gai-xinh",
      label: "Gái xinh",
      link: "/gai-xinh",
      subItems: [],
    },
    
  ];

  // Add active class to the current button (highlight it)
  // $(document).ready(function(){
  //     $('ul.sub-menu li a').click(function(){
  //       $('li a').removeClass("active");
  //       $(this).addClass("active");
  //   });
  // });


  function showMenuMobile(topMenu, mainMenu) {
    var result = null;
    if (mainMenu && mainMenu.length > 0) {
      const newArray = [...mainMenu, ...topMenu];
      result = newArray.map((item, index) => {
        return (
          <li key={item.id} className="">
            <div className="menu-label">
              <Link href={item.link} className="">
                <a className="label">
                  <span className="">{item.label}</span>
                </a>
              </Link>
              {item.subItems.length > 0 ? (
                <span
                  className="icon-arrow"
                  onClick={handleClickSubmenu}
                  data-id={item.id}
                >
                  {toggleSubMenu && toggleSubMenu.id === item.id ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </span>
              ) : (
                ""
              )}
            </div>
            {item.subItems.length > 0 && toggleSubMenu.id === item.id
              ? toggleSubMenu && (
                  <ul className="box-sub-menu">
                    {item.subItems.map((item, index) => {
                      return (
                        <li key={item.id} className=" ">
                          <Link href={item.link}>
                            <a className="">{item.label}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )
              : ""}
          </li>
        );
      });
    }
    return result;
  }

  return (
    <>
      <header id="top" style={{boxShadow: "0 3px 45px rgb(0 0 0 / 15%"}}>
        <div className="container">
          <div className="row">
            <div className="col span_3">
              <Link
                id="logo"
                href="/"
                data-supplied-ml-starting-dark="false"
                data-supplied-ml-starting="false"
                data-supplied-ml="true"
              >
                <a>
                  <Image
                    className="stnd skip-lazy default-logo dark-version"
                    width={171}
                    height={65}
                    alt="Tóp nhà cái"
                    src={
                      "https://topnhacai.b-cdn.net/topnhacai.today.png?v=1655975658"
                    }
                    data-src="https://topnhacai.b-cdn.net/topnhacai.today.png?v=1655975658"
                  />
                </a>
              </Link>
            </div>
            <div className="col span_9 col_last">
              <div
                className="slide-out-widget-area-toggle mobile-icon slide-out-from-right"
                data-custom-color="false"
                data-icon-animation="simple-transform"
              >
                <div>
                  <a href="#" onClick={handleClick}>
                    <span aria-hidden="true">
                      <i className="lines-button x2">
                        <i className="lines"></i>
                      </i>
                    </span>
                  </a>
                </div>
              </div>
              <nav>
                <ul className="sf-menu sf-js-enabled sf-arrows" id="menu">
                  {mainMenu && mainMenu.length > 0 && <MainMenu mainMenu={mainMenu}/>}
                </ul>
                <ul className="buttons sf-menu" data-user-set-ocm="off"></ul>
              </nav>
            </div>
          </div>
        </div>
        {toggleMenu && (
          <>
            <div className="box-menu" id="box-menu">
              <ul>{showMenuMobile(mainMenu, topMenu)}</ul>
            </div>
            <div className="blur" onClick={handleClick}></div>
          </>
        )}
      </header>
    </>
  );
}

export default TopHeader;

// eslint-disable-next-line react/display-name
const MainMenu = React.memo(({mainMenu}) => {
  return (
    <>
    {mainMenu.map((item) => {
      return (
        <li
          key={item.id}
          className={`menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item sf-with-ul ${
            item.subItems.length > 0 ? "menu-item-has-children" : ""
          }`}
        >
          <Link href={item.link} className="sf-with-ul">
            <a>
              <span className="menu-title-text">{item.label}</span>
              {item.subItems.length > 0 ? (
                <span className="sf-sub-indicator">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              ) : (
                ""
              )}
            </a>
          </Link>
          {item.subItems.length > 0 ? (
            <ul className="sub-menu tracked-pos">
              {item.subItems.map((item, index) => {
                return (
                  <li
                    key={item.id}
                    className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item "
                  >
                    <Link href={item.link}>
                      <a className="menu-title-text" >{item.label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </li>
      );
    })}
    </>
  )
})
