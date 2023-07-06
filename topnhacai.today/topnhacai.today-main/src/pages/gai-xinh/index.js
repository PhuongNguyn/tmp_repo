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
import BeautifulGirl from "../../components/BeautifulGirl";
import Loading from "../../components/Loading";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getPostByTax } from "../api/ApiPosts";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";

const BeautifulGirlPage = ({ pageData, dataImage, postData }) =>  {
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

  if (!pageData && !postData) {
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
        <title>Top nhà cái - Gái xinh</title>
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
                    <BeautifulGirl data={postData} pageData={pageData} />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage data={dataImage} />
                    <PostList postSidebar={postSidebar1} />
                    <TrustBet />
                    <PostList postSidebar={postSidebar2} />
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
  const Slug = "gai-xinh";

  const dataBanner = await getBanner(Slug);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  const pageData = await getDataPages(Slug);
  const postData = await getPostByTax(Slug);
  console.log('abc', postData)
  return {
    props: {
      pageData,
      dataImage,
      postData
    },
  }
}

export default BeautifulGirlPage;
