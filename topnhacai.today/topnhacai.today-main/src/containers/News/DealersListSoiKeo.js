import React from "react";
import useSWR from "swr";
import ListRate from "../../components/Home/listRateSoiKeo";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const DealersList = (props) => {
  
    const { data, error } = useSWR(`${process.env.api_topnhacai}/dealers`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return <ListRate data={data} />;
  }

export default DealersList;
