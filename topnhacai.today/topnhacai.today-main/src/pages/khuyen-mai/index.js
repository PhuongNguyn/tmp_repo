import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import ToolBet from "../../components/Sidebars/toolBet";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import PostList from "../../components/Sidebars/postList";
import CompareBets from "../../components/Sidebars/compareBetsSidebar";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import TaxDescription from "../../components/TaxDescription";
import PromotionList from "../../components/Promotions/PromotionList";
import Head from "next/head";
import IndexPage from "../../components/IndexPage";
import { getBanner } from "../api/ApiBanner";
import { getDataPages } from "../api/ApiPages";
import { getDealer } from "../api/ApiDealer";
import Content from "../../components/Content";
const breadSlug = "so-sanh-nha-cai";
import FaqTnc from "../../components/FaqTnc";
import DealersList from "../../containers/News/DealersList";
import AdsImage from "../../components/Sidebars/adsImage";

const PromotionsPage = ({ pageData, dataImage, dealersData }) => {
  /* const breadTitle = "Khuyến mãi";
  const Tax = {
    taxTitle:
      "Top 10+ Nhà cái Khuyến Mãi Tặng Tiền Cược Miễn Phí Tháng 06/2022",
    taxDescription: `<span style="font-weight: 400;">Topnhacai.today – Trang chuyên tổng hợp các <strong>nhà cái khuyến mãi</strong> hot nhất hiện nay với nhiều chương trình khuyến mãi hấp dẫn. Luôn cập nhật liên tục các chương trình khuyến mãi cao nhất và mới nhất từ <a href="https://vaobo.com/nha-cai-uy-tin/" target="_blank" rel="noopener">các nhà cái uy tín</a>, nhà cái cá cược thể thao và game đổi thưởng. Chương trình <strong>khuyến mãi tặng thưởng</strong> được các nhà cái đưa ra nhằm thu hút thành viên mới, đồng thời giữ chân các thành viên cũ đang sử dụng dịch vụ mà nhà cái đó cung cấp. Tại Topnhacai.today, chúng tôi sẽ không chỉ cung cấp cho bạn các thông tin <strong>khuyến mãi mới nhất</strong>, hấp dẫn nhất mà còn là những khuyến mãi được đánh giá là có giá trị nhất cho người chơi. </span>`,
  }; */
  const breadTitle = "Khuyến mãi";
  const Tax = {
    taxTitle: "Khuyến mãi",
    taxDescription: pageData.page_description,
  };
  const postSidebar1 = {
    title: "Hướng dẫn cá cược",
    mark: "HD",
    bgColor: "#ff4b00",
  };
  const postSidebar2 = {
    title: "Kinh nghiệm cá cược",
    mark: "KN",
    bgColor: "#ff4b00",
  };

  return (
    <>
     <Head>
        <title>Top nhà cái - Khuyến mãi</title>
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
                    <TaxDescription Tax={Tax} />
                    {/* <PromotionList /> */}
                    <DealersList />
                    <Content data={pageData} />
                    <FaqTnc />
                  </>
                }
              </div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage data={dataImage} />
                    {/* <PostList postSidebar={postSidebar1} />
                    <PostList postSidebar={postSidebar2} /> */}
                    <ToolBet />
                    <CompareBets  data={dealersData}/>
                    {/* <CompareBets /> */}
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
  const Slug = "so-sanh-nha-cai";

  const dataBanner = await getBanner(Slug);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  const pageData = await getDataPages(Slug);
  const dealersData = await getDealer();
  
  return {
    props: {
      pageData,
      dataImage,
      dealersData
    },
  }
}

export default PromotionsPage;
