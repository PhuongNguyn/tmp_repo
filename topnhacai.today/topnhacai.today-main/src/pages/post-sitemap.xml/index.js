import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  let posts = await fetch(`${process.env.api_topnhacai}/posts/getPosts/sitemap`);
  posts = await posts.json();
  if(posts && posts.length > 0){
    const newsSitemaps = posts.map((item) => ({
        loc: `https://topnhacai.today/${item.post_slug?.toString()}`,
        lastmod: new Date(item.createdAt).toISOString(),
      }));
    
      const fields = [...newsSitemaps];
    
      return getServerSideSitemap(ctx, fields);
  }
  
};

export default function Site(ctx, fields) {
  
}
