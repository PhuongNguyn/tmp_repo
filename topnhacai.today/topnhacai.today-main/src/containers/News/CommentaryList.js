import React from "react";
import useSWR from "swr";
import NewsList from "../../components/Home/newsList";

// const fetcher = (...args) => fetch(...args).then((res) => res.json())
const CommentaryList = ({dataPost}) => {
    // const { data: data1, error: error1 } = useSWR(`${process.env.api_topnhacai}/posts/getPostByTax?slug=nhan-dinh-bong-da&status=public&skip=0&limit=5`, fetcher)
    // const { data: data2, error: error2 } = useSWR(`${process.env.api_topnhacai}/posts/getPostByTax?slug=tro-choi&status=public&skip=0&limit=5`, fetcher)
    // if (error1 && error2) return <div>Failed to load</div>
    // if (!data1 && !data2) return <div>Loading...</div>
    // return <NewsList data={data1} data2={data2}/>;
    return <NewsList data={dataPost.football} data2={dataPost.game}/>;

  }

export default CommentaryList;
