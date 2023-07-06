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

const  ReputableBookiePage = ({ 
  data, 
  dataImage, 
  dealersData,
  datalode,
  postDatalode,
  postDatalode1,
  datacctt, 
  postDatacctt, 
  postDatacctt1,
  datacce, 
  postDatacce, 
  postDatacce1
}) => {
  const postSidebar1 = {
    title: "Hướng dẫn cá cược",
    mark: "HD",
    bgColor: "#ff4b00",
    taxId : "62d7f944eb2519e67e207216",
    limit : 5,
    skip : 0
  };
  const postSidebar2 = {
    title: "Kinh nghiệm cá cược",
    mark: "KN",
    bgColor: "#ff4b00",
    taxId : "62d7f95deb2519e67e207259",
    limit : 5,
    skip : 0
  };

  if (!data) {
    return <Loading />;
  }
  const breadTitle = (d) => d.page_category_name;
  const Tax = (d) => {
    return {
      taxTitle: d.page_title,
      taxDescription: d.page_description,
    }
  }

  return (
    <>
     <Head>
        <title>Top nhà cái - Nhà cái uy tín</title>
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
                    <Breadcrumbs breadTitle={breadTitle(data)} />
                    <TaxDescription Tax={Tax(data)} />
                    <TaxDescription Tax={Tax(datalode)} />
                    <CategoryPosts
                      title={breadTitle(datalode)}
                      tax={""}
                      data={postDatalode}
                      posts ={postDatalode1}
                      topViews = {[]}
                    />
                    <TaxDescription Tax={Tax(datacctt)} />
                    <CategoryPosts
                      title={breadTitle(datacctt)}
                      tax={""}
                      data={postDatacctt}
                      posts ={postDatacctt1}
                      topViews = {[]}
                    />
                    <TaxDescription Tax={Tax(datacce)} />
                    <CategoryPosts
                      title={breadTitle(datacce)}
                      tax={""}
                      data={postDatacce}
                      posts ={postDatacce1}
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
  const Slug = "nha-cai-uy-tin";
  const Slug1 = "nha-cai-lo-de";
  const Slug2 = "casino-truc-tuyen";
  const Slug3 = "ca-cuoc-esport";
  const [dataBanner, data, dealersData, datalode, postDatalode, postDatalode1, datacctt, postDatacctt, postDatacctt1, datacce, postDatacce, postDatacce1] = await Promise.all([
    getBanner(Slug),
    getDataPages(Slug),
    getDealer(),
    getDataPages(Slug1),
    getPostByTax(Slug1),
    getPostByTaxNew(Slug1),
    getDataPages(Slug2),
    getPostByTax(Slug2),
    getPostByTaxNew(Slug2),
    getDataPages(Slug3),
    getPostByTax(Slug3),
    getPostByTaxNew(Slug3),
  ]);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];

  return {
    props: {
      data,
      dataImage,
      dealersData,
      datalode,
      postDatalode,
      postDatalode1,
      datacctt, 
      postDatacctt, 
      postDatacctt1,
      datacce, 
      postDatacce, 
      postDatacce1
    },
  }
}

export default ReputableBookiePage;
