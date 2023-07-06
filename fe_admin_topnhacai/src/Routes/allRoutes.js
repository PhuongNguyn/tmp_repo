import React from "react";
import { Redirect } from "react-router-dom";

//pages
import DashboardAnalytics from "../pages/DashboardAnalytics";
import Starter from "../pages/Pages/Starter/Starter";

//login
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";

//users management
import UsersManagement from "../pages/Users/UsersManagement";
import UsersPermission from "../pages/Users/UsersPermission";
import FaqsList from "../pages/Faqs/FaqsList";
import FaqsDetail from "../pages/Faqs/FaqsDetail";
import UserDetail from "../pages/Users/UserDetail";
import DealerList from "../pages/Dealers/DealerList";
import CreateEditDealer from "../pages/Dealers/CreateEditDealer";
import DealerDetail from "../pages/Dealers/DealerDetail";
import DealerInfoList from "../pages/Dealers/DealerInfoList";
import DealerPaymentList from "../pages/Dealers/DealerPaymentList";
import DealerPromotionList from "../pages/Dealers/DealerPromotionList";
import DealerServiceList from "../pages/Dealers/DealerServiceList";
import DealerInfoDetail from "../pages/Dealers/DealerInfoDetail";
import CreateEditDealerInfo from "../pages/Dealers/CreateEditDealerInfo";
import DealerPaymentDetail from "../pages/Dealers/DealerPaymentDetail";
import DealerServiceDetail from "../pages/Dealers/DealerServiceDetail";
import DealerPromotionDetail from "../pages/Dealers/DealerPromotionDetail";
import SchemaList from "../pages/Schema/SchemaList";
import PageList from "../pages/pagesManagement/PageList";
import PageDetail from "../pages/pagesManagement/PageDetail";
import CreateEditPage from "../pages/pagesManagement/CreateEditPage";
import SchemaDetail from "../pages/Schema/SchemaDetail";
import AddUser from "../pages/Users/AddUser";
import TaxonomyList from "../pages/Taxanomy/TaxonomyList";
import TaxonomyDetail from "../pages/Taxanomy/TaxonomyDetail";
import AddTaxonomy from "../pages/Taxanomy/AddTaxonomy";
import PostList from "../pages/Posts/PostList";
import CreateEditPost from "../pages/Posts/CreateEditPost";
import PostDetail from "../pages/Posts/PostDetail";
import CreateEditDealerPromotion from "../pages/Dealers/CreateEditDealerPromotion";
import CreateEditDealerService from "../pages/Dealers/CreateEditDealerService";
import LinksList from "../pages/Links/LinksList";
import LinksDetail from "../pages/Links/LinksDetail";
import MediaList from "../pages/Media/MediaList";
import BannersList from "../pages/Banners/BannersList";
import PostStatisitcs from "../pages/Statistics/PostStatistics";
import UserStatistics from "../pages/Statistics/UserStatistics";
import UserProfile from "../pages/Authentication/user-profile";
import Roles from "../pages/Roles/Roles";
const authProtectedRoutes = [
  { path: "/pages-starter", component: Starter },
  {
    path: "/dashboard-analytics",
    component: DashboardAnalytics,
    permission: "panel",
  },
  { path: "/users", component: UsersManagement, permission: "user" },
  { path: "/permission", component: UsersPermission, permission: "permission" },
  { path: "/user/add/:id", component: AddUser, permission: "user" },
  { path: "/users/:id", component: UserDetail, permission: "user" },
  { path: "/profile", component: UserProfile },
  { path: "/faqs", component: FaqsList, permission: "faq" },
  { path: "/faqs/:id", component: FaqsDetail, permission: "faq" },
  { path: "/taxonomy", component: TaxonomyList, permission: "taxonomy" },
  { path: "/taxonomy/add/:id", component: AddTaxonomy, permission: "taxonomy" },
  { path: "/taxonomy/:id", component: TaxonomyDetail, permission: "taxonomy" },
  { path: "/dealers", component: DealerList, permission: "dealer" },
  {
    path: "/dealers/create",
    component: CreateEditDealer,
    permission: "dealer",
  },
  {
    path: "/dealers/edit/:id",
    component: CreateEditDealer,
    permission: "dealer",
  },
  { path: "/dealers/:id", component: DealerDetail, permission: "dealer" },
  {
    path: "/dealers-info",
    component: DealerInfoList,
    permission: "dealerInfor",
  },
  {
    path: "/dealers-info/:id",
    component: DealerInfoDetail,
    permission: "dealerInfor",
  },
  {
    path: "/dealers-info/new/create",
    component: CreateEditDealerInfo,
    permission: "dealerInfor",
  },
  {
    path: "/dealers-info/edit/:id",
    component: CreateEditDealerInfo,
    permission: "dealerInfor",
  },
  {
    path: "/dealers-payment",
    component: DealerPaymentList,
    permission: "dealerPayment",
  },
  {
    path: "/dealers-payment/:id",
    component: DealerPaymentDetail,
    permission: "dealerPayment",
  },
  {
    path: "/dealers-promotion",
    component: DealerPromotionList,
    permission: "dealerPromotion",
  },
  {
    path: "/dealers-promotion/:id",
    component: DealerPromotionDetail,
    permission: "dealerPromotion",
  },
  {
    path: "/dealers-service",
    component: DealerServiceList,
    permission: "dealerService",
  },
  {
    path: "/dealers-service/:id",
    component: DealerServiceDetail,
    permission: "dealerService",
  },
  { path: "/schemas", component: SchemaList, permission: "schema" },
  { path: "/schemas/:id", component: SchemaDetail, permission: "schema" },
  {
    path: "/pages-management",
    component: PageList,
    permission: "page",
  },
  {
    path: "/roles",
    component: Roles,
    permission: "role",
  },
  {
    path: "/pages-management/create",
    component: CreateEditPage,
    permission: "page",
  },
  {
    path: "/pages-management/:id",
    component: PageDetail,
    permission: "page",
  },
  {
    path: "/pages-management/edit/:id",
    component: CreateEditPage,
    permission: "page",
  },
  {
    path: "/posts",
    component: PostList,
    permission: "post",
  },
  {
    path: "/posts/create",
    component: CreateEditPost,
    permission: "post",
  },
  {
    path: "/posts/:id",
    component: PostDetail,
    permission: "post",
  },
  {
    path: "/posts/edit/:slug",
    component: CreateEditPost,
    permission: "post",
  },
  {
    path: "/dealer-promotion/create",
    component: CreateEditDealerPromotion,
    permission: "dealerPromotion",
  },
  {
    path: "/dealer-promotion/edit/:id",
    component: CreateEditDealerPromotion,
    permission: "dealerPromotion",
  },
  {
    path: "/dealer-service/create",
    component: CreateEditDealerService,
    permission: "dealerService",
  },
  {
    path: "/dealer-service/edit/:id",
    component: CreateEditDealerService,
    permission: "dealerService",
  },
  {
    path: "/links",
    component: LinksList,
    permission: "linkFooter",
  },
  {
    path: "/links/:id",
    component: LinksDetail,
    permission: "linkFooter",
  },
  {
    path: "/media-management",
    component: MediaList,
    permission: "media",
  },
  {
    path: "/banners-management",
    component: BannersList,
    permission: "banner",
  },
  {
    path: "/post-statistics",
    component: PostStatisitcs,
    permission: "statistic",
  },
  {
    path: "/user-statistics",
    component: UserStatistics,
    permission: "statistic",
  },
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
];

const publicRoutes = [
  // Authentication Page
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  // {
  //   path: "/pages-management",
  //   component: PageList
  // },
  // {
  //   path: "/pages-management/create",
  //   component: CreateEditPage
  // },
  // {
  //   path: "/pages-management/edit/:id",
  //   component: CreateEditPage
  // },
  // {
  //   path: "/pages-management/:id",
  //   component: PageDetail
  // },
  // Users management
];

export { authProtectedRoutes, publicRoutes };
