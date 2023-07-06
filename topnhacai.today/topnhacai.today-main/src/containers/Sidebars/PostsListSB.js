  import React from "react";
  import useSWR from "swr";
  import PostList from "../../components/Sidebars/postList";

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const PostsListSB = (props) => {
      const { data, error } = useSWR(`${process.env.api_topnhacai}/posts/getAllByTax?tax=` + props.postSidebar.taxId + '&limit=' + props.postSidebar.limit + '&skip=' + props.postSidebar.skip +'&status=public', fetcher)
      if (error) return <div>Failed to load</div>
      if (!data) return <div>Loading...</div>
      return <PostList postSidebar={props.postSidebar}  data={data}/>;
    }

  export default PostsListSB;