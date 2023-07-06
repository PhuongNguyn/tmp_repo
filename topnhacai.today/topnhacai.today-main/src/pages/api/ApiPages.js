  export async function getDataPages(props) {
    const res = await fetch(`${process.env.api_topnhacai}/pages/getBySlug/` + props);
    const data = await res.json();
    return data
  }