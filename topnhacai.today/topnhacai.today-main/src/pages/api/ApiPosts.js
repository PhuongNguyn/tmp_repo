export async function getPostByTax(props) {
    const res = await fetch(`${process.env.api_topnhacai}/posts/getPostByTax?slug=${props}&status=public`);
    const data = await res.json();
    return data
  }
  export async function getPostByTax2(slug, limit = 5) {
    const res = await fetch(`${process.env.api_topnhacai}/posts/getPostByTax?slug=${slug}&status=public&skip=0&limit=${limit}`);
    const data = await res.json();
    return data
  }

  export async function getPostByTaxNew(props) {
    
    const res = await fetch(`${process.env.api_topnhacai}/posts/getPostByTaxNew?slug=${props}&status=public&skip=0&limit=10`);
    const data = await res.json();
    return data
  }

  export async function getListView(props) {
    const res = await fetch(`${process.env.api_topnhacai}/posts/getListView?taxId=${props}&limit=10`);
    const data = await res.json();
    return data
  }

  export async function getStatusAndSlug(props) {
    const res = await fetch(`${process.env.api_topnhacai}/posts/getBy/StatusAndSlug?slug=${props}`);
    const data = await res.json();
    return data
  }