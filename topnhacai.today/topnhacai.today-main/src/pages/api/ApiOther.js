export async function GetFooter() {
    const res = await fetch(`${process.env.api_topnhacai}/linkFooters/getAll`);
    const data = await res.json();
    return data
  }