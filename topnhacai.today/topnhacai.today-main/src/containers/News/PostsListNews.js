import React from "react";
import useSWR from "swr";
import ColListNews from "../../components/Home/colListNews";
import Loading from "../../components/Loading";

// const fetcher = (...args) => fetch(...args).then((res) => res.json())
const PostsNewsList = ({dataPost}) => {
    // var { data: dataPost1, error: dataError1 } = useSWR(`${process.env.api_topnhacai}/posts/getPostByTax?slug=huong-dan-ca-cuoc&status=public`,fetcher)
    // var { data: dataPost2, error: dataError2 } = useSWR(`${process.env.api_topnhacai}/posts/getPostByTax?slug=kinh-nghiem-ca-cuoc&status=public`,fetcher)
    // var { data: dataPost3, error: dataError3 } = useSWR(`${process.env.api_topnhacai}/posts/getPostByTax?slug=tin-tuc-ca-cuoc&status=public`,fetcher)
    // if (dataError1 && dataPost2 && dataPost3)return <div>Failed to load</div>
    // if (!dataPost1 && dataError2 && dataError3) return <div><Loading /></div>
    return <ColListNews data1={dataPost.guildBet} data2={dataPost.expBet} data3={dataPost.postBet} />;
  }

export default PostsNewsList;