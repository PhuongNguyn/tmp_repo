import React from "react";
import useSWR from "swr";
import PostList from "../../components/Sidebars/postList";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const GetReputabkeBookie = (props) => {
    const { data, error } = useSWR(`${process.env.api}/pages?page_category_slug=nha-cai-uy-tin`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return <PostList postSidebar={props.postSidebar}  data={data}/>;
  }

export default GetReputabkeBookie;