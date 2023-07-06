import React from "react";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home";
import TopHeader from "../../components/TopHeader";
import Image from "next/image";
function formatDate(timestamp) {
  var x = new Date(timestamp);
  var dd = x.getDate();
  var mm = x.getMonth() + 1;
  var yyyy = x.getFullYear();
  return (mm > 9 ? mm : "0" + mm) + "/" + yyyy;
}

function HomePageM ({dataImage,dealerList, dataPost}) {
  return (
    <>
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
                {<Home data={dataImage} dealerList={dealerList} dataPost={dataPost} isMobile={true}/>}
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
export default HomePageM;
