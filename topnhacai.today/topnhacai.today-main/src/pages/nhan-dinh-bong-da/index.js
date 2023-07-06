import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
import ToolBet from "../../components/Sidebars/toolBet";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import Content from "../../components/Content";
import useSWR from "swr";
import TrustBet from "../../components/Sidebars/trustBet";
import PostsSport from "../../components/FootballCommentary/postsSport";
import TipsPremium from "../../components/Sidebars/tipsPremium";
import Loading from "../../components/Loading";
import PostsListSB from "../../containers/Sidebars/PostsListSB";
import Head from "next/head";
import CategoryPosts from "../../components/Category/CategoryPosts";
import IndexPage from "../../components/IndexPage";
import { getPostByTax, getListView, getPostByTaxNew } from "../api/ApiPosts";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";

const FootballCommentary = ({ pageData, dataImage, postData , postData1, postTopViews }) => {
  const postSidebar1 = {
    title: "Highlight bóng đá",
    mark: "Hot",
    bgColor: "#ff4b00",
    taxId : "62cc1340de8c89e818af9d3d",
    limit : 5,
    skip : 0
  };

  const postSidebar2 = {
    title: "Cá độ bóng đá",
    mark: "Hot",
    bgColor: "#ff4b00",
    taxId : "62d94c781719a43ea6e20483",
    limit : 5,
    skip : 0
  };

  if (!pageData && !postData && !postData1 && !postTopViews) {
    return <Loading />;
  }
  
  var breadTitle = "";
  var Tax = {};
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
        <title>Top nhà cái - Nhận định bóng đá</title>
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
                    <CategoryPosts
                      tax={Tax}
                      data={postData}
                      posts ={postData1}
                      topViews = {postTopViews}
                    />
                    {/* <PostsSport data={postData} /> */}
                    
                    <Content data={pageData} />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage data={dataImage}/>
                    <TipsPremium />
                    <TrustBet />
                    <PostsListSB postSidebar={postSidebar1} />
                    <PostsListSB postSidebar={postSidebar2} />
                    <ToolBet />
                    <SexyImageList />
                  </>
                }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const Slug = "nhan-dinh-bong-da";
  const taxId = "62cc12f7de8c89e818af9d3a";
  const [dataBanner, pageData, postData, postData1, postTopViews] = await Promise.all([
    getBanner(Slug),
    getDataPages(Slug),
    getPostByTax(Slug),
    getPostByTaxNew(Slug),
    getListView(taxId)
  ])

  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  
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
export default FootballCommentary;
