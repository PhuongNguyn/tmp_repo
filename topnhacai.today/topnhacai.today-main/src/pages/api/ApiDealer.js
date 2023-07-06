export async function getDealer() {
    const res = await fetch(`${process.env.api_topnhacai}/dealers`);
    const data = await res.json()
    return data
}