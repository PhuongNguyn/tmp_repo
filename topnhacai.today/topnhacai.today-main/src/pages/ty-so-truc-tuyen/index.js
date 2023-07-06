import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import Image from "next/image";
import LiveScoreFootBall from "../../components/LiveScoreFootball";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../components/Loading";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import axios from "axios";
import moment from "moment/moment";

function LiveScore({ livescores }) {
  if (!livescores) {
    return <Loading />;
  }
  return (
    <>
      <Head>
        <title>Top nhà cái - Tỷ số trực tuyến</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <TopHeader />
      <div id="ajax-content-wrap">
        <div id="livescore">
          <div className="container banner-top">
            <div className="row">
              <div className="col-image-6">
                <Image
                  src="/assets/images/hi88.jpg"
                  width={800}
                  height={100}
                  alt="Nhà cái hi88"
                />
              </div>
              <div className="col-image-6">
                <Image
                  src="/assets/images/789BET.gif"
                  width={800}
                  height={100}
                  alt="Nhà cái Jun88"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-image-6">
                <Image
                  src="/assets/images/hi88.jpg"
                  width={800}
                  height={100}
                  alt="Nhà cái hi88"
                />
              </div>
              <div className="col-image-6">
                <Image
                  src="/assets/images/789BET.gif"
                  width={800}
                  height={100}
                  alt="Nhà cái Jun88"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-image-6">
                <Image
                  src="/assets/images/hi88.jpg"
                  width={800}
                  height={100}
                  alt="Nhà cái hi88"
                />
              </div>
              <div className="col-image-6">
                <Image
                  src="/assets/images/789BET.gif"
                  width={800}
                  height={100}
                  alt="Nhà cái Jun88"
                />
              </div>
            </div>
          </div>
          <LiveScoreFootBall livescore={livescores} />
        </div>
        <Footer />
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  // await new Promise((resolve) => setInterval(resolve, 3000))
  // // Call an external API endpoint to get posts
  // context.res.setHeader(
  //     'Cache-Control',
  //     'public, s-maxage=10, stale-while-revalidate=10'
  // )
  const res = await axios.get(
    `https://isports.thethao789.com/api/getScheduleAndResultByDate?date=${moment(
      new Date()
    ).format("YYYY-MM-DD")}`
  );
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      livescores: res.data,
    },
  };
}
export default LiveScore;
