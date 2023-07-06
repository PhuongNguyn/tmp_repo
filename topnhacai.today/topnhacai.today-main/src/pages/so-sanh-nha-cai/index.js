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
import CompareDealers from "../../components/CompareDealers/CompatrDealers";
import FaqTnc from "../../components/FaqTnc";
import useSWR from "swr";
import Loading from "../../components/Loading";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";
import { getDealer } from "../api/ApiDealer";
import { useRouter } from "next/router";
import { useState } from "react";
const breadSlug = "so-sanh-nha-cai";

const CompareDealersPage = ({ pageData, dataImage, dealersData }) => {
  const query = useRouter();
  const compareId1 = query.query.nc1;
  const compareId2 = query.query.nc2;

 
  if (!pageData || !dealersData) {
    // return <Loading />;
    compareId1 = query.query?.nc1 || dealersData[0]._id;
    compareId2 = query.query?.nc2 || dealersData[1]._id;
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
  const breadTitle = "So sánh nhà cái";
  const Tax = {
    taxTitle: "So Sánh Nhà Cái",
    taxDescription: pageData.page_description,
  };
  // console.log(Tax)
  return (
    <>
       <Head>
        <title>Top nhà cái - So sánh nhà cái</title>
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
                    <CompareDealers dealers={dealersData} compareId1={compareId1} compareId2={compareId2}/>
                    <Content data={pageData} />
                    <FaqTnc />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage data={dataImage} />
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
  const Slug = "so-sanh-nha-cai";

  const dataBanner = await getBanner(Slug);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  const pageData = await getDataPages(Slug);
  const dealersData = await getDealer();
  
  return {
    props: {
      pageData,
      dataImage,
      dealersData
    },
  }
}
export default CompareDealersPage;
