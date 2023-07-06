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
import FootballRate from "../../components/FootballRate";
import FaqTnc from "../../components/FaqTnc";
import useSWR from "swr";
import Loading from "../../components/Loading";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";
const breadSlug = "ty-le-bong-da";

const FootballRatePage = ({ pageData, dataImage }) => {

 
  if (!pageData) {
    return <Loading />;
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
  const breadTitle = pageData.page_title;
  const Tax = {
    taxTitle: pageData.page_title,
    taxDescription: pageData.page_description,
  };
  return (
    <>
      <Head>
        <title>Top nhà cái - Tỷ lệ bóng đá</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexPage data={pageData} />
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
                    <FootballRate />
                    <Content data={pageData} />
                    <FaqTnc />
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
  const Slug = "ty-le-bong-da";
  const limit  = 10;
  const dataBanner = await getBanner(Slug);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  const pageData = await getDataPages(Slug);
  return {
    props: {
      pageData,
      dataImage
    },
  }
}


export default FootballRatePage;
