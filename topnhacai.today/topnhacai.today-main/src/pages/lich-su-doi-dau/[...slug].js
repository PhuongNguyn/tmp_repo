import React, { useState, useEffect } from "react";

import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import TrustBet from "../../components/Sidebars/trustBet";
import AdsImage from "../../components/Sidebars/adsImage";
import Breadcrumbs from "../../components/Breadcrumbs";
import ConfrontationDetails from "../../components/ConfrontationHistory/ConfrontationDetails";
import useSWR from "swr";
import Head from "next/head";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function DetailsHistoryHeadToHead(props) {
  const { data: dataImage, error: dataImageError } = useSWR(`${process.env.api_topnhacai}/banners/getByPage/lich-su-doi-dau`,fetcher);
  const breadTitle = "Lịch sử đối đầu – Phong độ hiện tại";
  return (
    <>
     <Head>
        <title>Top nhà cái - Lịch sử đối đầu – Phong độ hiện tại</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                    <ConfrontationDetails />
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

export default DetailsHistoryHeadToHead;
