import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import AdsImage from "../../components/Sidebars/adsImage";
import ToolBet from "../../components/Sidebars/toolBet";
import CompareBets from "../../components/Sidebars/compareBets";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import TaxDescription from "../../components/TaxDescription";
import Content from "../../components/Content";
import DealersList from "../../containers/News/DealersList";
import useSWR from "swr";
import PostsListSB from "../../containers/Sidebars/PostsListSB";
import Loading from "../../components/Loading";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";
import { getPostByTax, getPostByTaxNew } from "../api/ApiPosts";
import CategoryPosts from "../../components/Category/CategoryPosts";


const EsportOnline = ({ dataPage, dataImage, postData, postData1 }) => {
  const postSidebar1 = {
    title: "Cá cược thể thao điện tử",
    mark: "HD",
    bgColor: "#ff4b00",
    taxId : "62d7fb79eb2519e67e207388",
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
        <title>Top nhà cái - Cá cược esports</title>
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
  const Slug = "ca-cuoc-esport";
  const limit  = 10;
  const dataBanner = await getBanner(Slug);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  const dataPage = await getDataPages(Slug);
  const postData = await getPostByTax(Slug);
  const postData1 = await getPostByTaxNew(Slug);
  return {
    props: {
      dataPage,
      dataImage,
      postData,
      postData1
    },
  }
}

export default EsportOnline;
