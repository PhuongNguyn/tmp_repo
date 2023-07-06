import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
// import PostList from "../../components/Sidebars/postList";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import Content from "../../components/Content";
import TrustBet from "../../components/Sidebars/trustBet";
import SoccerResults from "../../components/SoccerResults";
import useSWR from "swr";
import Loading from "../../components/Loading";
import AdsImage from "../../components/Sidebars/adsImage";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";
const breadSlug = "ket-qua-bong-da";

const  SoccerResultsPage= ({ pageData, dataImage }) => {

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
  const breadTitle = "Kết quả bóng đá hôm nay";
  const Tax = {
    taxTitle: "Kết quả bóng đá - Tỷ số bóng đá trực tiếp hôm nay",
    taxDescription: pageData.page_description,
  };
  return (
    <>
     <Head>
        <title>Top nhà cái - Kết quả bóng đá</title>
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
                    {/* <SoccerResults /> */}
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
  const Slug = "ket-qua-bong-da";

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


export default SoccerResultsPage;
