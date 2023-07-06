// import { stringifyQuery } from 'next/dist/server/server-route-utils'
import Head from 'next/head'
import { getBanner } from './api/ApiBanner';
import React from "react";
import Loading from "../components/Loading";
import {getDealer} from "../pages/api/ApiDealer"
import { getPostByTax, getPostByTax2 } from './api/ApiPosts';
import { checkIsMobile } from '../../utils/checkIsMobile';
import HomePagePC from '../containers/PC/home';
import HomePageM from '../containers/Mobile/home';

const LocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "topnhacai",
  image:
    "https://topnhacai.today/_next/image?url=https%3A%2F%2Ftopnhacai.b-cdn.net%2Ftopnhacai.today.png%3Fv%3D1655975658&w=384&q=75",
  "@id": "https://topnhacai.today",
  url: "https://topnhacai.today",
  telephone: "+84 896957153",
  priceRange: "VNĐ",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "",
    postalCode: "",
    addressCountry: "VN",
  },
};

const Organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "topnhacai.today",
  alternateName: "topnhacai",
  url: "https://topnhacai.today",
  logo: "https://topnhacai.today/_next/image?url=https%3A%2F%2Ftopnhacai.b-cdn.net%2Ftopnhacai.today.png%3Fv%3D1655975658&w=384&q=75",
};

const Website = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "topnhacai",
  url: "https://topnhacai.today",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://topnhacai.today?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const SiteNavigationElement = {
  "@context": "http://schema.org/",
  "@graph": [
    {
      "@context": "http://schema.org/",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Soi kèo bóng đá",
      url: "https://topnhacai.today/soi-keo-bong-da",
    },
    {
      "@context": "http://schema.org/",
      id: "site-navigation",
      name: "Lịch sử đối đầu – Phong độ hiện tại của các đội bóng",
      url: "https://topnhacai.today/lich-su-doi-dau",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Kết quả bóng đá hôm nay",
      url: "https://topnhacai.today/ket-qua-bong-da",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Tỷ Lệ Bóng Đá",
      url: "https://topnhacai.today/ty-le-bong-da",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Link vào nhà cái",
      url: "https://topnhacai.today/link-vao-nha-cai",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "So sánh nhà cái",
      url: "https://topnhacai.today/so-sanh-nha-cai",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Tỷ số trực tuyến",
      url: "https://topnhacai.today/ty-so-truc-tuyen",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Nhà cái uy tín",
      url: "https://topnhacai.today/nha-cai-uy-tin",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Casino trực tuyến",
      url: "https://topnhacai.today/casino-truc-tuyen",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Nhà cái uy tín",
      url: "https://topnhacai.today/nha-cai-lo-de",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Cá cược Esport",
      url: "https://topnhacai.today/ca-cuoc-esport",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Tips bóng đá, tip bóng đá free uy tín",
      url: "https://topnhacai.today/tips-bong-da",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Một Vài Lưu Ý Quan Trọng Để Đưa Ra Nhận Định Bóng Đá Chuẩn Xác Nhất",
      url: "https://topnhacai.today/nhan-dinh-bong-da",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Trò chơi",
      url: "https://topnhacai.today/tro-choi",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Thư Viện Cá Cược",
      url: "https://topnhacai.today/thu-vien-ca-cuoc",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Hướng dẫn cá cược",
      url: "https://topnhacai.today/huong-dan-ca-cuoc",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Kinh nghiệm cá cược",
      url: "https://topnhacai.today/kinh-nghiem-ca-cuoc",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Tin tức cá cược",
      url: "https://topnhacai.today/tin-tuc-ca-cuoc",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Tin thể thao",
      url: "https://topnhacai.today/tin-the-thao",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Gái xinh",
      url: "https://topnhacai.today/gai-xinh",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Video",
      url: "https://topnhacai.today/video",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Highlight bóng đá",
      url: "https://topnhacai.today/highlight-bong-da",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Video bóng đá",
      url: "https://topnhacai.today/video-bong-da",
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "Soi cầu xổ số",
      url: "https://topnhacai.today/soi-cau-xo-so",
    },
    {
      "@context": "http://schema.org/",
      "@type": "SiteNavigationElement",
      id: "site-navigation",
      name: "TopNhaCai",
      url: "https://topnhacai.today",
    },
  ],
};

const person = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "TopNhaCai",
  url: "https://topnhacai.today/",
  image: "",
};

const FAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Thế nào là nhà cái uy tín?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà cái uy tín là một nhà cái đạt chất lượng ở nhiều khía cạnh, được phần lớn người chơi tin tưởng tham gia cá cược hài lòng với dịch vụ mà nhà cái đó cung cấp. Sau một thời gian hoạt động thị trường, nhà cái sẽ được chính khách hàng sử dụng dịch vụ đánh giá và dần dần tạo nên thương hiệu của mình trong cộng đồng người chơi.",
      },
    },
    {
      "@type": "Question",
      name: "Điều khoản và điều kiện",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chỉ phù hợp cho người xem trên 18 tuổi.",
      },
    },
    {
      "@type": "Question",
      name: "Highlight bóng đá là gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Highlight trong tiếng Anh là “điểm nổi bật” và đối với bóng đá, highlight có nghĩa là “điểm nhấn. Có thể hiểu highlight bóng đá là video ngắn từ 3 đến 7 phút, ghi lại những tình huống đáng chú ý, các bàn thắng trong trận đấu nhằm truyền tải đến người xem những điểm nhấn nổi bật trong một trận bóng đá nhất định.  Ví dụ: Video highlight Barcelona vs Real Madrid tức là video ngắn gọn thể hiện diễn biến cũng như các bàn thắng (nếu có) trong trận đấu này.",
      },
    },
    {
      "@type": "Question",
      name: "Tham gia các cược với nhà cái trực tuyến có thực sự an toàn không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Câu trả lời là rất an toàn, bởi hầu hết các nhà cái đều đặt trụ sở tại Philipines, mà đây là 1 quốc gia hoàn toàn hợp pháp về lĩnh vực cờ bạc. Do đó chúng ta sẽ rất khó bị phát hiện và những thông tin cá nhân cũng được đảm bảo một cách an toàn. Bạn hoàn toàn có thể yên tâm khi tham gia cá cược trên các nhà cái.",
      },
    },
    {
      "@type": "Question",
      name: "Tại sao phải gửi tiền trước cho nhà cái, có rủi ro không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hầu hết các nhà cái sẽ đặt trụ sở của họ tại Philipines, chúng ta không thể tham gia chơi trực tiếp với họ mà phải thông qua hình thức trực tuyến do đó phải nạp tiền trước. Nếu nạp tiền vào nhà cái không uy tín thì đó sẽ là rủi ro rất lớn dành cho bạn. Vì vậy, trước khi quyết định nạp tiền hãy chắc chắn rằng nhà cái bạn lựa chọn để tham gia cá cược là một nhà cái tốt với độ uy tín cao.",
      },
    },
    {
      "@type": "Question",
      name: "Tham gia các cược với nhà cái trực tuyến có thực sự an toàn không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Câu trả lời là rất an toàn, bởi hầu hết các nhà cái đều đặt trụ sở tại Philipines, mà đây là 1 quốc gia hoàn toàn hợp pháp về lĩnh vực cờ bạc. Do đó chúng ta sẽ rất khó bị phát hiện và những thông tin cá nhân cũng được đảm bảo một cách an toàn. Bạn hoàn toàn có thể yên tâm khi tham gia cá cược trên các nhà cái.",
      },
    },
    {
      "@type": "Question",
      name: "Liên hệ",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Điện thoại: +84 896957153",
        Zalo: "+84 896957153",
        Email: "Admin@topnhacai.com",
        Telegram: "+84 896957153",
      },
    },
  ],
};

const schemaData = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Top Nhà Cái",
      item: "https://topnhacai.today",
    },
  ],
};

function HomePage ({dataImage,dealerList, dataPost, isMobile}) {
  if (!dataImage) {
    return <Loading></Loading>;
  }
  return (
    <div className="">
      <Head>
        <title>
          Top nhà cái - Trang chủ - Top nhà cái uy tín nhất hiện nay
        </title>
        <meta
          name="description"
          content="Trang chuyên đánh giá các nhà cái uy tín - Tin tức cá cược - Thể thao - Video bóng đá - Nhận định bóng đá - Soi kèo nhà cái"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://topnhacai.today/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        ></meta>
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Top nhà cái uy tín nhất hiện nay"
        ></meta>
        <meta
          property="og:description"
          content="Trang chuyên đánh giá các nhà cái uy tín - Tin tức cá cược - Thể thao - Video bóng đá - Nhận định bóng đá - Soi kèo nhà cái"
        ></meta>
        <meta property="og:url" content="https://topnhacai.today/"></meta>
        <meta
          property="og:site_name"
          content="TOPNHACAI - Top Nhà Cái Uy Tín Nhất Hiện Nay"
        ></meta>
        <meta name="google-site-verification" content="8Q5dCQbIo82wM6erItzZr-ZLlEDPstZNziE47iG9vbU" />
        <script
          id="Organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Organization) }}
        ></script>
        <script
          id="LocalBusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusiness) }}
        ></script>
        <script
          id="WebSite"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Website) }}
        ></script>
        <script
          id="SiteNavigationElement"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SiteNavigationElement),
          }}
        ></script>
        <script
          id="Person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        ></script>
        <script
          id="FAQPage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQPage) }}
        ></script>
        <script
          type="application/ld+json"
          id="home"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        ></script>
      </Head>
        {isMobile?
        <HomePageM dataImage={dataImage} dataPost={dataPost} dealerList={dealerList} />
        : 
        <HomePagePC dataImage={dataImage} dataPost={dataPost} dealerList={dealerList}/>}
    </div>
  );
}


export async function getServerSideProps({req}){
  const Slug = "home";
  const isMobile = checkIsMobile(req);
  const [dealerList, dataBanner, data3, data4, data5, data6, data7, data8, data9, data10] = await Promise.all([
    getDealer(),
    getBanner(Slug),
    getPostByTax2('nhan-dinh-bong-da'),
    getPostByTax('tro-choi'),
    getPostByTax('highlight-bong-da'),
    getPostByTax2('huong-dan-ca-cuoc'),
    getPostByTax2('kinh-nghiem-ca-cuoc'),
    getPostByTax2('tin-tuc-ca-cuoc'),
    getPostByTax2('ca-cuoc-the-thao', 7),
    getPostByTax2('thu-vien-ca-cuoc', 7)
  ]);
  const dataImage = dataBanner?.length > 0 ? dataBanner : [];
  const dataPost = {
    football: data3?.length > 0 ? data3 : [],
    game: data4?.length > 0 ? data4 : [],
    highlightFootball: data5?.length > 0 ? data5 : [],
    guildBet: data6?.length > 0 ? data6 : [],
    expBet: data7?.length > 0 ? data7 : [],
    postBet: data8?.length > 0 ? data8 : [],
    sportBet: data9?.length > 0 ? data9 : [],
    libBet: data10?.length > 0 ? data10 : [],
  }
  return {
    props: {
      dataImage,
      dealerList,
      dataPost,
      isMobile
    },
  }
}

export default HomePage;
