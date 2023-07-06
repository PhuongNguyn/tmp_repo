import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
import ToolBet from "../../components/Sidebars/toolBet";
import CompareBets from "../../components/Sidebars/compareBetsSidebar";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import Content from "../../components/Content";
import DealersList from "../../containers/News/DealersList";
import PostsListSB from "../../containers/Sidebars/PostsListSB";
import Loading from "../../components/Loading";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";
import { getDealer } from "../api/ApiDealer";
import CategoryPosts from "../../components/Category/CategoryPosts";
import { getPostByTax, getPostByTaxNew } from "../api/ApiPosts";


const CasinoOnlinePage = ({ dataPage, dataImage, dealersData, postData, postData1 }) => {
  const postSidebar1 = {
    title: "Hướng dẫn casino online",
    mark: "HD",
    bgColor: "#ff4b00",
    taxId : "62d7f641eb2519e67e2070ca",
    limit : 5,
    skip : 0
  };
  const postSidebar2 = {
    title: "Kinh nghiệm Casino online",
    mark: "KN",
    bgColor: "#ff4b00",
    taxId : "62d7f6bfeb2519e67e2070de",
    limit : 5,
    skip : 0
  };

  if (!dataPage && !dataImage) {
    return <Loading />;
  }
  const breadTitle = dataPage.page_category_name;
  const Tax = {
    taxTitle: dataPage.page_title,
    taxDescription: dataPage.page_description,
  };

  return (
    <>
     <Head>
        <title>Top nhà cái - Casino trực tuyến</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexPage data = {dataPage} />
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
                      title={breadTitle}
                      tax={""}
                      data={postData}
                      posts ={postData1}
                      topViews = {[]}
                    />
                    <DealersList />
                    <Content data={dataPage} />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage data={dataImage}/>
                    <PostsListSB postSidebar={postSidebar1} />
                    <PostsListSB postSidebar={postSidebar2} />
                    <ToolBet />
                    <CompareBets  data={dealersData}/>
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
  const Slug = "casino-truc-tuyen";

  const dataBanner = await getBanner(Slug);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  const dataPage = await getDataPages(Slug);
  const dealersData = await getDealer();
  const postData = await getPostByTax(Slug);
  const postData1 = await getPostByTaxNew(Slug);
  return {
    props: {
      dataPage,
      dataImage,
      dealersData,
      postData,
      postData1
    },
  }
}

export default CasinoOnlinePage;
