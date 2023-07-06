import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TrustBet from "../../components/Sidebars/trustBet";
import CategoryPosts from "../../components/Category/CategoryPosts";
import useSWR from "swr";
import Loading from "../../components/Loading";
import TaxDescription from "../../components/TaxDescription";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getPostByTax, getListView, getPostByTaxNew } from "../api/ApiPosts";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";

const GamesPage = ({ pageData, dataImage, postData , postData1, postTopViews }) => {

  if (!pageData && !postData && !postData1 && !postTopViews) {
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
        <title>Top nhà cái - Trò chơi</title>
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
                      title={breadTitle}
                      tax={Tax}
                      data={postData}
                      posts ={postData1}
                      topViews = {postTopViews}
                    />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage data={dataImage}/>
                    <TrustBet />
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
  const Slug = "tro-choi";
  const taxId = "62cc1328de8c89e818af9d3c";
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

export default GamesPage;
