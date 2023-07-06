import React, { useState, useEffect } from "react";

import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import TrustBet from "../../components/Sidebars/trustBet";
import AdsImage from "../../components/Sidebars/adsImage";
import Breadcrumbs from "../../components/Breadcrumbs";
import FootballBettingDetails from "../../components/FootballBetting/FootballBettingDetails";
import useSWR from "swr";
import Head from "next/head";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FootballBetting(props) {
  const breadTitle = "Soi kèo bóng đá";
  const { data: dataImage, error: dataImageError } = useSWR(`${process.env.api_topnhacai}/banners/getByPage/soi-keo-bong-da`,fetcher);

  return (
    <>
      <Head>
        <title>Top nhà cái - Soi kèo bóng đá</title>
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
                    <FootballBettingDetails />
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

export default FootballBetting;
