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
import useSWR from "swr";
import PostsListSB from "../../containers/Sidebars/PostsListSB";
import Loading from "../../components/Loading";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";
import { getDealer } from "../api/ApiDealer";
import { getPostByTax, getPostByTaxNew } from "../api/ApiPosts";
import CategoryPosts from "../../components/Category/CategoryPosts";



const DealerLode = ({ data, dataImage, dealersData, postData, postData1 }) => {
  const postSidebar1 = {
    title: "Lô đề online",
    mark: "HD",
    bgColor: "#ff4b00",
    taxId : "62d7fad4eb2519e67e20734d",
    limit : 5,
    skip : 0
  };
  const postSidebar2 = {
    title: "Giải mộng lô đề",
    mark: "KN",
    bgColor: "#ff4b00",
    taxId : "62d7faf2eb2519e67e207371",
    limit : 5,
    skip : 0
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
        <title>Top nhà cái - Nhà cái lô đề</title>
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
                    <CategoryPosts
                      title={breadTitle}
                      tax={""}
                      data={postData}
                      posts ={postData1}
                      topViews = {[]}
                    />
                    <DealersList />
                    <Content data={data} />
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
                    <CompareBets data={dealersData} />
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
  const Slug = "nha-cai-lo-de";

  const dataBanner = await getBanner(Slug);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  const data = await getDataPages(Slug);
  const dealersData = await getDealer();
  const postData = await getPostByTax(Slug);
  const postData1 = await getPostByTaxNew(Slug);
  return {
    props: {
      data,
      dataImage,
      dealersData,
      postData,
      postData1
    },
  }
}

export default DealerLode;
