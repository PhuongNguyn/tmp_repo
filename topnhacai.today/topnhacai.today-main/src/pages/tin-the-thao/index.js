import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import PostList from "../../components/Sidebars/postList";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import Content from "../../components/Content";
import TrustBet from "../../components/Sidebars/trustBet";
import AdsImage from "../../components/Sidebars/adsImage";
import useSWR from "swr";
import VideoList from "../../components/Video/VideoList";
import Loading from "../../components/Loading";
import PostsSport from "../../components/FootballCommentary/postsSport";
import CategoryPosts from "../../components/Category/CategoryPosts";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getPostByTax, getListView, getPostByTaxNew } from "../api/ApiPosts";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";

const BeautifulGirlPage = ({ pageData, dataImage, postData , postData1, postTopViews }) =>  {
  const postSidebar1 = {
    title: "Nhận định bóng đá",
    mark: "NEW",
    bgColor: "#ff4b00",
  };
  const postSidebar2 = {
    title: "Hướng dẫn cá cược",
    mark: "HOT",
    bgColor: "#ff4b00",
  };
  
  if (!pageData && !postData && !taxData) {
    return <Loading />;
  }
  var breadTitle = "";
  var Tax = "";
  if(pageData){

    breadTitle = pageData.page_category_name;
    Tax = {
      taxTitle: pageData.page_title, 
      taxDescription: pageData.page_description,
    };
  }
  return (
    <>
      <Head>
        <title>Top nhà cái - Tin thể thao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexPage data = {pageData} />
      <Menu />
      <TopHeader />
      <div id="ajax-content-wrap">
        <div className="container-wrap container_nc_home">
          <div className="container main-content">
            <div className="row">
              <div className="col span_9 bxcontainer">
                {
                  <>
                    <Breadcrumbs breadTitle={breadTitle} />
                    <TaxDescription Tax={Tax} />
                    {/* <PostsSport data={postData} /> */}
                    <CategoryPosts
                      title={breadTitle}
                      data={postData}
                      posts ={postData1}
                      topViews = {postTopViews}
                    />
                    <Content data={pageData} />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage data={dataImage}/>
                    {/* <PostList postSidebar={postSidebar1} /> */}
                    <TrustBet />
                    {/* <PostList postSidebar={postSidebar2} /> */}
                    <ToolBet />
                  </>
                }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const Slug = "tin-the-thao";
  const taxId = "62e4ed28ca09a6242bbedecd";
  const dataBanner = await getBanner(Slug);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  const pageData = await getDataPages(Slug);
  const postData = await getPostByTax(Slug);
  const postData1 = await getPostByTaxNew(Slug);
  const postTopViews = await getListView(taxId);
  
  return {
    props: {
      pageData,
      dataImage,
      postData,
      postData1,
      postTopViews
    },
  }
}
export default BeautifulGirlPage;
