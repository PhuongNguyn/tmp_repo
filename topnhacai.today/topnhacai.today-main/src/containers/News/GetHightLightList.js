import React from "react";
import useSWR from "swr";
import HightLightList from "../../components/Home/hightlightList";

// const fetcher = (...args) => fetch(...args).then((res) => res.json())
const GetHightLightList = ({data}) => {
    // const { data, error } = useSWR(`${process.env.api_topnhacai}/posts/getPostByTax?slug=highlight-bong-da&status=public`,fetcher)
    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>
    return <HightLightList data={data} />;
  }

export default GetHightLightList;