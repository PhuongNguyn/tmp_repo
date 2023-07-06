
import React from "react";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home";
import Menu from "../../components/Menu";
import AdsImage from "../../components/Sidebars/adsImage";
import CompareBets from "../../components/Sidebars/compareBets";
import SexyImageList from "../../components/Sidebars/sexyImageList";
import ToolBet from "../../components/Sidebars/toolBet";
import TopHeader from "../../components/TopHeader";
import PostsListSB from "../../containers/Sidebars/PostsListSB";
import Image from "next/image";
function formatDate(timestamp) {
  var x = new Date(timestamp);
  var dd = x.getDate();
  var mm = x.getMonth() + 1;
  var yyyy = x.getFullYear();
  return (mm > 9 ? mm : "0" + mm) + "/" + yyyy;
}

function HomePagePC ({dataImage,dealerList, dataPost}) {
  const postSidebar1 = {
    title: "Thư viện cá cược",
    mark: "Hot",
    bgColor: "#ff4b00",
    taxId: "62d7f7faeb2519e67e20711d",
    limit: 5,
    skip: 0,
  };

  const postSidebar2 = {
    title: "Video bóng đá",
    mark: "New",
    bgColor: "#19a0e9",
    taxId: "62d7f81ceb2519e67e207131",
    limit: 5,
    skip: 0,
  };
  return (
    <>
      <Menu />
      <TopHeader />
      <div id="ajax-content-wrap">
        <div className="container-wrap container_nc_home">
          <div className="container main-content">
            <div className="tieude_ds">
              <h1>{`Bảng xếp hạng nhà cái cập nhật ${formatDate(
                Date.now()
              )}`}</h1>
            </div>
            <div className="row">
              <div className="col span_9 bxcontainer">
                {<Home data={dataImage} dealerList={dealerList} dataPost={dataPost}/>}
              </div>
            
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage data={dataImage} />
                    <PostsListSB postSidebar={postSidebar1} category="1" />
                    <PostsListSB postSidebar={postSidebar2} category="2" />
                    <ToolBet />
                    <CompareBets dealerList={dealerList} />
                    <SexyImageList />
                  </>
                }
              </div>
            </div>
          </div>
          <button id="btnArraw" title="Go to top" style={{ display: "none" }}>
            <Image
              src="https://topnhacai.b-cdn.net/icon-arrow.png"
              width={25}
              height={16}
              alt=""
            />
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default HomePagePC;
