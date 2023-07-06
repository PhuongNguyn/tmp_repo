import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import CategoryPost from "../../components/Category/CategoryPosts";
import useSWR from "swr";
import TrustBet from "../../components/Sidebars/trustBet";
import Loading from "../../components/Loading";
import TaxDescription from "../../components/TaxDescription";
import AdsImage from "../../components/Sidebars/adsImage";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getPostByTax, getListView, getPostByTaxNew } from "../api/ApiPosts";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";

const LibraryBetPage = ({ 
  pageData,
  dataImage,
  postData,
  postData1,
  postTopViews,
  datahdcc, 
  postDatahdcc, 
  postDatahdcc1,
  postTopViewshdcc,
  datattcc, 
  postDatattcc,
  postDatattcc1, 
  postTopViewsttcc,
  datakncc, 
  postDatakncc, 
  postDatakncc1,
  postTopViewskncc,
  datattt, 
  postDatattt, 
  postDatattt1, 
  postTopViewsttt
}) =>  {

  if (!pageData && !postData && !postData1 && !postTopViews) {
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
        <title>Top nhà cái - Thư viện cá cược</title>
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
                  <Breadcrumbs breadTitle={breadTitle(pageData)} />
                  <TaxDescription Tax={Tax(pageData)} />
                  <CategoryPost
                    title={breadTitle(pageData)}
                    tax={Tax(pageData)}
                    data={postData}
                    posts ={postData1}
                    topViews = {postTopViews}
                  />
                  <TaxDescription Tax={Tax(datahdcc)} />
                  <CategoryPost
                    title={breadTitle(datahdcc)}
                    tax={Tax(datahdcc)}
                    data={postDatahdcc}
                    posts ={postDatahdcc1}
                    topViews = {postTopViewshdcc}
                  />
                  <TaxDescription Tax={Tax(datakncc)} />
                  <CategoryPost
                    title={breadTitle(datakncc)}
                    tax={Tax(datakncc)}
                    data={postDatakncc}
                    posts ={postDatakncc1}
                    topViews = {postTopViewskncc}
                  />
                  <TaxDescription Tax={Tax(datattcc)} />
                  <CategoryPost
                    title={breadTitle(datattcc)}
                    tax={Tax(datattcc)}
                    data={postDatattcc}
                    posts ={postDatattcc1}
                    topViews = {postTopViewsttcc}
                  />
                  <TaxDescription Tax={Tax(datattt)} />
                  <CategoryPost
                    title={breadTitle(datattt)}
                    tax={Tax(datattt)}
                    data={postDatattt}
                    posts ={postDatattt1}
                    topViews = {postTopViewsttt}
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
  const Slug = "thu-vien-ca-cuoc";
  const taxId = "62d7f7faeb2519e67e20711d";
  const Slug1 = "huong-dan-ca-cuoc";
  const taxId1 = "62cbe0c586cf76fe1caf7d26";
  const Slug2 = "tin-tuc-ca-cuoc";
  const taxId2 = "62cbe13a86cf76fe1caf7d28";
  const Slug3 = "kinh-nghiem-ca-cuoc";
  const taxId3 = "62cbe11886cf76fe1caf7d27";
  const Slug4 = "tin-the-thao";
  const taxId4 = "62e4ed28ca09a6242bbedecd";
  const [dataBanner, pageData, postData, postData1, postTopViews, datahdcc, postDatahdcc, postDatahdcc1, postTopViewshdcc,
    datattcc, postDatattcc, postDatattcc1, postTopViewsttcc,datakncc, postDatakncc, postDatakncc1, postTopViewskncc, 
    datattt, postDatattt, postDatattt1, postTopViewsttt] = await Promise.all([
    getBanner(Slug),
    getDataPages(Slug),
    getPostByTax(Slug),
    getPostByTaxNew(Slug),
    getListView(taxId),
    getDataPages(Slug1),
    getPostByTax(Slug1),
    getPostByTaxNew(Slug1),
    getListView(taxId1),
    getDataPages(Slug2),
    getPostByTax(Slug2),
    getPostByTaxNew(Slug2),
    getListView(taxId2),
    getDataPages(Slug3),
    getPostByTax(Slug3),
    getPostByTaxNew(Slug3),
    getListView(taxId3),
    getDataPages(Slug4),
    getPostByTax(Slug4),
    getPostByTaxNew(Slug4),
    getListView(taxId4),
  ])

  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  
  return {
    props: {
      pageData,
      dataImage,
      postData,
      postData1,
      postTopViews,
      datahdcc, 
      postDatahdcc, 
      postDatahdcc1,
      postTopViewshdcc,
      datattcc, 
      postDatattcc,
      postDatattcc1, 
      postTopViewsttcc,
      datakncc, 
      postDatakncc, 
      postDatakncc1,
      postTopViewskncc,
      datattt, 
      postDatattt, 
      postDatattt1, 
      postTopViewsttt
    },
  }
}

export default LibraryBetPage;
