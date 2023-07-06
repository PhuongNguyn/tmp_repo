import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CategoryPost from "../../components/Category/CategoryPosts";
import FootballBetting from "../../components/FootballBetting";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu";
import AdsImage from "../../components/Sidebars/adsImage";
import PostList from "../../components/Sidebars/postList";
import ToolBet from "../../components/Sidebars/toolBet";
import TrustBet from "../../components/Sidebars/trustBet";
import TaxDescription from "../../components/TaxDescription";
import TopHeader from "../../components/TopHeader";
import useSWR from "swr";
import Loading from "../../components/Loading";
import Content from "../../components/Content";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";
import { getLiveScores } from "../api/callApiFootballList";


const breadSlug = "soi-keo-bong-da";
const limitLiveScore = 10;

const  FootballBettingPage = ({pageData,dataImage, dataSoiKeo}) => {
  
  if (!pageData || !dataSoiKeo) {
    return <Loading />;
  }

  const breadTitle = "Soi kèo bóng đá";
  const postSidebar1 = {
    title: "Nhận định bóng đá",
    mark: "NEW",
    bgColor: "#ff4b00",
  };
  const postSidebar2 = {
    title: "Hướng dẫn cá cược",
    mark: "HD",
    bgColor: "#f82045",
  };
  const Tax = {
    taxTitle: "Soi kèo bóng đá",
    taxDescription: pageData.page_description,
  };
  return (
    <>
      <Head>
        <title>Top nhà cái - Soi kèo bóng đá</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexPage dataTax = {pageData} />
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
                    <FootballBetting data={dataSoiKeo} />
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
  );
}

export const getServerSideProps = async () => {
  const Slug = "soi-keo-bong-da";
  const limit  = 10;
  const dataBanner = await getBanner(Slug);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  const pageData = await getDataPages(Slug);
  const dataSoiKeo = await getLiveScores();
  return {
    props: {
      pageData,
      dataImage,
      dataSoiKeo
    },
  }
}

export default FootballBettingPage;
