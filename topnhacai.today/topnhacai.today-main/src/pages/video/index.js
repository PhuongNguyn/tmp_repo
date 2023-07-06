import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import AdsImage from "../../components/Sidebars/adsImage";
import TrustBet from "../../components/Sidebars/trustBet";
import Content from "../../components/Content";
import useSWR from "swr";
import  { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import PostsSportVideo from "../../components/FootballCommentary/postVideo";
import Loading from "../../components/Loading";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getPostByTax } from "../api/ApiPosts";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";
import PostsSport from "../../components/FootballCommentary/postsSportVideo";
library.add( faPlay );

const PromotionsPage  = ({ 
  pageData,
  dataImage,
  postData,
  datahlbd, 
  postDatahlbd,
  datavdbd, 
  postDatavdbd,
  datascxs, 
  postDatascxs
 }) => {
 
  if (!pageData && !postData) {
    return <Loading />;
  }
  var breadTitle = "";
  if(pageData){
    breadTitle = pageData.page_category_name;
  }
  const Tax = (d) => {
    return {
      taxTitle: d.page_title,
      taxDescription: d.page_description,
    }
  }
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

  return (
    <>
      <Head>
        <title>Top nhà cái - Video</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <IndexPage data = {pageData} />
      <TopHeader />
      <div id="ajax-content-wrap">
        <div className="container-wrap container_nc_home">
          <div className="container main-content">
            <div className="row">
              <div className="col span_9 bxcontainer">
                {
                  <>
                    <Breadcrumbs breadTitle={breadTitle} /> 
                    <TaxDescription Tax={Tax(pageData)} />
                    {/* <PostsSport data={postData} /> */}
                    <PostsSportVideo data={postData}/>
                    {/* <VideoList /> */}
                    <Content data={pageData} />
                    {/* <Content /> */}
                    <TaxDescription Tax={Tax(datahlbd)} />
                    <PostsSport data={postDatahlbd} />
                    <Content data={datahlbd} />
                    <TaxDescription Tax={Tax(datavdbd)} />
                    <PostsSport data={postDatavdbd} />
                    <Content data={datavdbd} />
                    <TaxDescription Tax={Tax(datascxs)} />
                    <PostsSport data={postDatascxs} />
                    <Content data={datascxs} />
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
  );
}

export const getServerSideProps = async () => {
  const Slug = "video";
  const Slug1 = "highlight-bong-da";
  const Slug2 = "video-bong-da";
  const Slug3 = "soi-cau-xo-so";
  const [dataBanner, pageData, postData, datahlbd, postDatahlbd, datavdbd, postDatavdbd, datascxs, postDatascxs] = await Promise.all([
    getBanner(Slug),
    getDataPages(Slug),
    getPostByTax(Slug),
    getDataPages(Slug1),
    getPostByTax(Slug1),
    getDataPages(Slug2),
    getPostByTax(Slug2),
    getDataPages(Slug3),
    getPostByTax(Slug3)
  ]);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];

  return {
    props: {
      pageData,
      dataImage,
      postData,
      datahlbd, 
      postDatahlbd,
      datavdbd, 
      postDatavdbd,
      datascxs, 
      postDatascxs
    },
  }
}

export default PromotionsPage;
