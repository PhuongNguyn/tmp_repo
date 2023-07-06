import React, { useEffect } from "react";
import Menu from "../../components/Menu";
import Link from "next/link";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
// import PostList from "../../components/Sidebars/postList";
import useSWR from "swr";
import CompareBets from "../../components/Sidebars/compareBetsSidebar";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import Content from "../../components/Content";
import TrustBet from "../../components/Sidebars/trustBet";
import Tips from "../../components/Tips";
import SumWebsite from "../../components/FootballTips/sumWebsite";
import Loading from "../../components/Loading";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";
import { getDealer } from "../api/ApiDealer";
import { useRouter } from "next/router";

const FootballTipsPage = ({ data, dataImage, dealersData }) =>  {
  /* const router = useRouter();
  const compareId1 = router.query.nc1;
  const compareId2 = router.query.nc2;
  if (!data || !dealersData) {
    return <Loading />;
  } */

  const postSidebar1 = {
    title: "Nhận định bóng đá",
    mark: "ND",
    bgColor: "#ff4b00",
  };
  const postSidebar2 = {
    title: "Cá độ bóng đá",
    mark: "HOT",
    bgColor: "#f82045",
  };

  if (!data) {
    return <Loading />;
  }

  const breadTitle = data.page_category_name;
  const Tax = {
    taxTitle: data.page_title,
    taxDescription: data.page_description,
  };
 
  return (
    <>
      <Head>
        <title>Top nhà cái - Tips bóng đá</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexPage data = {data} />
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
                    <Tips />
                    {/* <CallApiFootballList /> */}
                    <SumWebsite />
                    <Content data={data} />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage data={dataImage}/>
                    {/* <PostList postSidebar={postSidebar1} />
                    <PostList postSidebar={postSidebar2} /> */}
                    <TrustBet />
                    {/* <CompareDealers dealers={dealersData} compareId1={compareId1} compareId2={compareId2}/> */}
                    <CompareBets data={dealersData}/>
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
  const Slug = "tips-bong-da";
  const limit  = 10;
  const dataBanner = await getBanner(Slug);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  const data = await getDataPages(Slug);
  const dealersData = await getDealer();
  return {
    props: {
      data,
      dataImage,
      dealersData
    },
  }
}

export default FootballTipsPage;
