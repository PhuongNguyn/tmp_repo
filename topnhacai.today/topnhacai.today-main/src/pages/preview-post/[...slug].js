import { useRouter } from 'next/router';
import React from 'react';
import TopHeader from '../../components/TopHeader';
import Footer from '../../components/Footer/Footer';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import AdsImage from '../../components/Sidebars/adsImage';
import PostsListSB from '../../containers/Sidebars/PostsListSB';
import PostContent from '../../components/PostContent';
import useSWR from "swr";
import Breadcrumbs from '../../components/Breadcrumbs/urlBreadcrumbs';
import Loading from '../../components/Loading';
import Custom404 from '../404';
import TrustBet from '../../components/Sidebars/trustBet';
import ToolBet from '../../components/Sidebars/toolBet';
import SexyImageList from '../../components/Sidebars/sexyImageList';
import TipsPremium from '../../components/Sidebars/tipsPremium';
import IndexPost from '../../components/IndexPost';
import Menu from '../../components/Menu';
library.add(fab, faCheck, faMinus, faPlus);

const fetcher = (...args) => fetch(...args).then((res) => res.json())
function PreviewContent(props) {

    const router = useRouter();
    var {slug} = router.query;

    const { data, error } = useSWR(`${process.env.api_topnhacai}/posts/getBy/StatusAndSlug?slug=${slug}`, fetcher)
    const { data: dataImage, error: dataImageError } = useSWR(`${process.env.api_topnhacai}/banners/getByPage/home`,fetcher);

    if (error) return <div><Custom404 /></div>
    if (!data) return <div><Loading /></div>
    if(data.length === 0){
      return <Custom404 />
    }

    const postSidebar1 = {
        title: "Highlight bóng đá",
        mark: "Hot",
        bgColor: "#ff4b00",
        taxId : "62cc1340de8c89e818af9d3d",
        limit : 5,
        skip : 0
      };

      const postSidebar2 = {
        title: "Cá độ bóng đá",
        mark: "Hot",
        bgColor: "#ff4b00",
        taxId : "62d94c781719a43ea6e20483",
        limit : 5,
        skip : 0
      };

    const breadTitle = data && data.post_title ? data.post_title : "";
    return (
        <>
      <IndexPost data = {data} />
      <Menu />
      <TopHeader />
      <div id="ajax-content-wrap">
        <div className="container-wrap container_nc_home">
          <div className="container main-content">
            <div className="tieude_ds">
              <Breadcrumbs breadTitle={data}/>
            </div>
            <div className="row">
              <div className="col span_9 bxcontainer"><PostContent data={data} /></div>
              <div className="col span_3 bx_sidebar">
                {
                  <>
                    <AdsImage data={dataImage}/>
                    <TipsPremium />
                    <TrustBet/>
                    <PostsListSB postSidebar={postSidebar1} category="1" />
                    <PostsListSB postSidebar={postSidebar2} category="2" />
                    <ToolBet/>
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

export default PreviewContent; 