/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
import ConfrontationList from "../../components/ConfrontationHistory/ConfrontationList";
import useSWR from "swr";
import Loading from "../../components/Loading";
import fetch from "isomorphic-fetch";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const breadSlug = "lich-su-doi-dau";

function formatDateToYYYMMDD(timestamp) {
  var x = new Date(timestamp);
  var dd = x.getDate();
  var mm = x.getMonth() + 1;
  var yyyy = x.getFullYear();
  return yyyy + "-" + (mm > 9 ? mm : "0" + mm) + "-" + (dd > 9 ? dd : "0" + dd);
}

const limitLiveScore = 40;
const today = formatDateToYYYMMDD(Date.now());

const ConfrontationHistoryPage =({pageData, dataImage}) => {
  const [listMatchToday, setListMatchToday] = useState();
  const [teamProfiles, setTeamProfiles] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const resMatchToday = await fetch(
        `${process.env.api_isports}/liveScoreTodays?limit=${limitLiveScore}`
      )
        .then((res) => (res ? res.json() : null))
        .then((data) => {
          return data;
        });

      var _teamIds = [];
      resMatchToday &&
        resMatchToday.map((item) => {
          _teamIds.push(item.homeId, item.awayId);
        });

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const options = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ teamIds: _teamIds }),
      };
      const _teamProfiles = await fetch(
        `${process.env.api_topnhacai}/teamProfiles/getByTeamIds`,
        options
      )
        .then((res) => res.json())
        .then((data) => {
          return data;
        });

      setListMatchToday(resMatchToday);
      setTeamProfiles(_teamProfiles);
    };
    fetchData();
  }, [today]);

  // const { data: pageData, error: pageError } = useSWR(
  //   `${process.env.api_topnhacai}/pages/getBySlug/${breadSlug}`,
  //   fetcher
  // );

  // const { data: dataImage, error: dataImageError } = useSWR(
  //   `${process.env.api_topnhacai}/banners/getByPage/lich-su-doi-dau`,
  //   fetcher
  // );

  // if (pageError && pageError) return <div>Failed to load</div>;
  if (!pageData) return <Loading />;

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
  const breadTitle = "Lịch sử đối đầu – Phong độ hiện tại của các đội bóng";
  const Tax = {
    taxTitle: "Lịch sử đối đầu – Phong độ hiện tại của các đội bóng",
    taxDescription: pageData.page_description,
  };

  return (
    <>
      <Head>
        <title>Top nhà cái - Lịch sử đối đầu</title>
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
                    <ConfrontationList
                      title={"Lịch sử đối đầu các trận đấu hot nhất hôm nay"}
                      data={listMatchToday}
                      teamProfiles={teamProfiles}
                      isHot={true}
                    />
                    <ConfrontationList
                      title={"Lịch sử đối đầu các trận sắp tới"}
                      data={listMatchToday}
                      teamProfiles={teamProfiles}
                    />
                    <Content data={pageData} />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage data={dataImage} />
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
  const Slug = "lich-su-doi-dau";
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
export default ConfrontationHistoryPage;
