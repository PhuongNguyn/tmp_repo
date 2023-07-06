import React from "react";
import Menu from "../../components/Menu";
import TopHeader from "../../components/TopHeader";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import Content from "../../components/Content";
import useSWR from "swr";
import Loading from "../../components/Loading";
import TaxDescription from "../../components/TaxDescription";
import ContactForm from '../../components/Contact';
import IndexPage from "../../components/IndexPage";

/* const [name, setName] = useState(""); */
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function BeautifulGirlPage(props) {
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
  const { data: pageData, error: pageError } = useSWR(
    `${process.env.api_topnhacai}/pages/getBySlug/lien-he`,
    fetcher
  );

  if (pageError) return <div>Failed to load</div>;
  if (!pageData ) {
    return <Loading />;
  }
  var breadTitle = "";
  var Tax = "";
  if(pageData){
    breadTitle = pageData.page_category_name;
    Tax = {
      taxTitle: pageData.page_title,
      taxDescription: pageData.page_description,
    };
  }
  return (
    <>
    <IndexPage data = {pageData} />
      <Menu />
      <TopHeader />
      <div id="ajax-content-wrap">
        <div className="container-wrap container_nc_home">
          <div className="container main-content">
            <div className="row">
              {
                <>
                <Breadcrumbs breadTitle={breadTitle} /></>
              }
            <div className="col span_6 bxcontainer">
              {
                <>
                <TaxDescription Tax={Tax} />
                
                </>
              }
              </div>
              <div className="col span_6 bxcontainer">
                <form className="bxss">
                  <h2>
                    Liên hệ với chúng tôi
                  </h2>
                  {
                    <>
                    {/* <Content data={pageData} /> */}
                    <ContactForm />
                    </> 
                  }
                  
                </form>
              </div>
              
              
            </div>
             
          </div>
        </div>
        
        <Footer />
      </div>
      
    </>

    
  )
}

export default BeautifulGirlPage;
