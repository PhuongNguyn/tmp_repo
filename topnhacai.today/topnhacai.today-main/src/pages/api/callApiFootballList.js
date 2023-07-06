export async function getLiveScores() {
    const limitLiveScore = 10;
    const res = await fetch(`${process.env.api_isports}/liveScoreTodays?limit=${limitLiveScore}`);
    const data = await res.json();
    return data
  }
