import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Navdata = () => {
  const history = useHistory();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isUsers, setIsUsers] = useState(false);
  const [isFAQs, setIsFAQs] = useState(false);
  const [isDealers, setIsDealers] = useState(false);
  const [isSchemas, setIsSchemas] = useState(false);
  const [isTaxonomy, setIsTaxonomy] = useState(false);
  const [isRoles, setIsRoles] = useState(false);
  const [isPages, setIsPages] = useState(false);
  const [isPosts, setIsPosts] = useState(false);
  const [isLinks, setIsLinks] = useState(false);
  const [isMedia, setIsMedia] = useState(false);
  const [isBanners, setIsBanners] = useState(false);
  const [isStatistics, setIsStatistics] = useState(false);
  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Users") {
      setIsUsers(false);
    }
    if (iscurrentState !== "FAQs") {
      setIsFAQs(false);
    }
    if (iscurrentState !== "Dealers") {
      setIsDealers(false);
    }
    if (iscurrentState !== "Schemas") {
      setIsSchemas(false);
    }
    if (iscurrentState !== "Taxonomy") {
      setIsTaxonomy(false);
    }
    if (iscurrentState !== "Pages") {
      setIsPages(false);
    }
    if (iscurrentState !== "Posts") {
      setIsPosts(false);
    }
    if (iscurrentState !== "Links") {
      setIsLinks(false);
    }
    if (iscurrentState !== "Media") {
      setIsMedia(false);
    }
    if (iscurrentState !== "Banners") {
      setIsBanners(false);
    }
    if (iscurrentState !== "Statistics") {
      setIsStatistics(false);
    }
  }, [
    history,
    iscurrentState,
    isDashboard,
    isUsers,
    isFAQs,
    isDealers,
    isSchemas,
    isTaxonomy,
    isPages,
    isLinks,
    isMedia,
    isBanners,
    isStatistics,
  ]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "BẢNG ĐIỀU KHIỂN",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isDashboard,
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
      permission: "panel",
      subItems: [
        {
          id: "analytics",
          label: "Analytics",
          link: "/dashboard-analytics",
          parentId: "dashboard",
        },
      ],
    },
    {
      id: "users",
      label: "QUẢN LÝ THÀNH VIÊN",
      icon: " ri-user-2-line",
      link: "/#",
      stateVariables: isUsers,
      click: function (e) {
        e.preventDefault();
        setIsUsers(!isUsers);
        setIscurrentState("Users");
        updateIconSidebar(e);
      },
      permission: "user",

      subItems: [
        {
          id: "user-management",
          label: "Thành Viên",
          link: "/users",
          parentId: "users",
          permission: "user",
        },
        {
          id: "user-permission",
          label: "Phân Quyền",
          link: "/permission",
          parentId: "users",
          permission: "permission",
        },
        {
          id: "roles-management",
          label: "Quyền hạn",
          link: "/roles",
          parentId: "roles",
          permission: "role",
        },
      ],
    },
    {
      id: "dealers-management",
      label: "QUẢN LÝ NHÀ CÁI",
      icon: " ri-money-dollar-circle-line",
      link: "/#",
      stateVariables: isDealers,
      click: function (e) {
        e.preventDefault();
        setIsDealers(!isDealers);
        setIscurrentState("Dealers");
        updateIconSidebar(e);
      },
      permission: "dealer",

      subItems: [
        {
          id: "dealers",
          label: "Nhà Cái",
          link: "/dealers",
          parentId: "dealers-management",
          permission: "dealer",
        },
        {
          id: "dealers-info",
          label: "Thông Tin",
          link: "/dealers-info",
          parentId: "dealers-management",
          permission: "dealerInfor",
        },
        {
          id: "dealers-payment",
          label: "Thanh Toán",
          link: "/dealers-payment",
          parentId: "dealers-management",
          permission: "dealerPayment",
        },
        {
          id: "dealers-promotion",
          label: "Khuyến Mãi",
          link: "/dealers-promotion",
          parentId: "dealers-management",
          permission: "dealerPromotion",
        },
        {
          id: "dealers-service",
          label: "Dịch Vụ",
          link: "/dealers-service",
          parentId: "dealers-management",
          permission: "dealerService",
        },
      ],
    },
    // {
    //   id: "schema-management",
    //   label: "QUẢN LÝ SCHEMA",
    //   icon: "ri-bookmark-line",
    //   link: "/#",
    //   stateVariables: isSchemas,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsSchemas(!isSchemas);
    //     setIscurrentState("Schemas");
    //     updateIconSidebar(e);
    //   },
    //   subItems: [
    //     {
    //       id: "schemas",
    //       label: "Schemas",
    //       link: "/schemas",
    //       parentId: "schema-management",
    //     },
    //   ],
    // },
    // {
    //   id: "roles",
    //   label: "QUẢN LÝ PHÂN QUYỀN",
    //   icon: "ri-user-2-line",
    //   link: "/#",
    //   stateVariables: isRoles,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsRoles(!isRoles);
    //     setIscurrentState("Roles");
    //   },
    //   subItems: [
    //     {
    //       id: "roles-management",
    //       label: "QUYỀN HẠN",
    //       link: "/roles",
    //       parentId: "roles",
    //     },
    //   ],
    // },
    {
      id: "taxonomy-management",
      label: "CHUYÊN MỤC",
      icon: "ri-price-tag-3-line",
      link: "/#",
      stateVariables: isTaxonomy,
      click: function (e) {
        e.preventDefault();
        setIsTaxonomy(!isTaxonomy);
        setIscurrentState("Taxonomy");
      },
      permission: "taxonomy",
      subItems: [
        {
          id: "taxonomy",
          label: "Danh mục & Thẻ",
          link: "/taxonomy",
          parentId: "taxonomy-management",
        },
      ],
    },
    {
      id: "page-management",
      label: "QUẢN LÝ TRANG",
      icon: " ri-pages-line",
      link: "/#",
      stateVariables: isPages,
      click: function (e) {
        e.preventDefault();
        setIsPages(!isPages);
        setIscurrentState("Pages");
        updateIconSidebar(e);
      },
      permission: "page",

      subItems: [
        {
          id: "pages",
          label: "Trang",
          link: "/pages-management",
          parentId: "page-management",
        },
      ],
    },
    {
      id: "post-management",
      label: "QUẢN LÝ BÀI VIẾT",
      icon: "ri-archive-line",
      link: "/#",
      stateVariables: isPosts,
      click: function (e) {
        e.preventDefault();
        setIsPosts(!isPosts);
        setIscurrentState("Posts");
        updateIconSidebar(e);
      },
      permission: "post",
      subItems: [
        {
          id: "posts",
          label: "Bài Viết",
          link: "/posts",
          parentId: "post-management",
        },
      ],
    },
    {
      id: "faqs-management",
      label: "QUẢN LÝ FAQs",
      icon: "ri-questionnaire-line",
      link: "/#",
      stateVariables: isFAQs,
      click: function (e) {
        e.preventDefault();
        setIsFAQs(!isFAQs);
        setIscurrentState("FAQs");
        updateIconSidebar(e);
      },
      permission: "faq",
      subItems: [
        {
          id: "faqs",
          label: "FAQs",
          link: "/faqs",
          parentId: "faqs-management",
        },
      ],
    },
    {
      id: "links-management",
      label: "QUẢN LÝ LINK",
      icon: "ri-links-line",
      link: "/#",
      stateVariables: isLinks,
      click: function (e) {
        e.preventDefault();
        setIsLinks(!isLinks);
        setIscurrentState("Links");
        updateIconSidebar(e);
      },
      permission: "linkFooter",
      subItems: [
        {
          id: "links",
          label: "Links",
          link: "/links",
          parentId: "links-management",
        },
      ],
    },
    {
      id: "media-management",
      label: "QUẢN LÝ MEDIA",
      icon: "ri-image-line",
      link: "/#",
      stateVariables: isMedia,
      click: function (e) {
        e.preventDefault();
        setIsMedia(!isMedia);
        setIscurrentState("Media");
        updateIconSidebar(e);
      },
      permission: "media",
      subItems: [
        {
          id: "media",
          label: "Media",
          link: "/media-management",
          parentId: "media-management",
        },
      ],
    },
    {
      id: "banners-management",
      label: "QUẢN LÝ BANNER",
      icon: "ri-image-line",
      link: "/#",
      stateVariables: isBanners,
      click: function (e) {
        e.preventDefault();
        setIsBanners(!isBanners);
        setIscurrentState("Banners");
        updateIconSidebar(e);
      },
      permission: "banner",
      subItems: [
        {
          id: "banners",
          label: "Banners",
          link: "/banners-management",
          parentId: "banners-management",
        },
      ],
    },
    {
      id: "statistics",
      label: "THỐNG KÊ",
      icon: "ri-filter-3-line",
      link: "/#",
      stateVariables: isStatistics,
      click: function (e) {
        e.preventDefault();
        setIsStatistics(!isStatistics);
        setIscurrentState("Statistics");
        updateIconSidebar(e);
      },
      permission: "statistic",
      subItems: [
        {
          id: "post-statistics",
          label: "Bài viết",
          link: "/post-statistics",
          parentId: "statistics",
        },
        {
          id: "user-statistics",
          label: "Nhân viên",
          link: "/user-statistics",
          parentId: "statistics",
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
