export async function getBanner(props) {
    const res = await fetch(`${process.env.api_topnhacai}/banners/getByPage/` + props);
    const data = await res.json()
    return data
}