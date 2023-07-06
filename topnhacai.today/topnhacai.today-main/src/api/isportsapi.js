import fetch from "isomorphic-fetch"

const ISportsAPI_Key = "CegMwCscdLM1mcgM";
// teamProfiles
export const getAllByTeam = async (limit, skip) => {
    return await fetch(`${process.env.api_topnhacai}/teamProfiles/getAll?limit=${limit}&skip=${skip}`)
        .then(res => res ? res.json() : null)
        .then(data => {
            return data;
        })
}
export const getByTeamId = async (teamId) => {
    return await fetch(`${process.env.api_topnhacai}/teamProfiles/getByTeamId/${teamId}`)
        .then(res => res ? res.json() : null)
        .then(data => {
            return data;
        })
}
export const getById = async (id) => {
    return await fetch(`${process.env.api_topnhacai}/teamProfiles/getById/${id}`)
        .then(res => res ? res.json() : null)
        .then(data => {
            return data;
        })
}
export const getByLeagueId = async (leagueId) => {
    return await fetch(`${process.env.api_topnhacai}/teamProfiles/getByLeagueId/${leagueId}`)
        .then(res => res ? res.json() : null)
        .then(data => {
            return data;
        })
}
export const getByNameTeam = async (name) => {
    return await fetch(`${process.env.api_topnhacai}/teamProfiles/getByNameTeam/${name}`)
        .then(res => res ? res.json() : null)
        .then(data => {
            return data;
        })
}

// leagueProfiles
export const getAllLeague = async (name) => {
    return await fetch(`${process.env.api_topnhacai}/leagueProfiles/getAll?limit=${limit}&skip=${skip}`)
        .then(res => res ? res.json() : null)
        .then(data => {
            return data;
        })
}
export const getByProfileLeagueId = async (leagueId) => {
    return await fetch(`${process.env.api_topnhacai}/leagueProfiles/getByLeagueId/${leagueId}`)
        .then(res => res ? res.json() : null)
        .then(data => {
            return data;
        })
}
export const getByNameLeague = async (name) => {
    return await fetch(`${process.env.api_topnhacai}/leagueProfiles/getByNameLeague/${name}`)
        .then(res => res ? res.json() : null)
        .then(data => {
            return data;
        })
}
export const getByTypeLeague = async (type) => {
    return await fetch(`${process.env.api_topnhacai}/leagueProfiles/getByTypeLeague/${type}`)
        .then(res => res ? res.json() : null)
        .then(data => {
            return data;
        })
}

//api isport
export const allOdds = async (bookmakerIds) => {
    return await fetch(`${process.env.api_isports}/odds/all?api_key=${ISportsAPI_Key}&companyId=${bookmakerIds}`)
        .then(res => res?.json())
        .then(data => {
            return data;
        })
        .catch(e => {
            console.log(e);
            return e;
        });
}

export const getSchedule = (leagueId, matchId, date) => {
    let url = `${process.env.api_isports}/schedule/basic?api_key=${ISportsAPI_Key}&leagueId=${leagueId}&matchId=${matchId}&date=${date}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
export const bookmaker = () => {
    let url = `${process.env.api_isports}/bookmaker?api_key=${ISportsAPI_Key}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
export const preAndInOdds = async (matchIds, bookmakerIds) => {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS,GET'
    }
    return await fetch(`${process.env.api_isports}/odds/all?api_key=${ISportsAPI_Key}&companyId=${bookmakerIds}&matchId=${matchIds}`, {
        method: "GET",
        mode: 'cors',
        credentials: 'same-origin',
        headers: headers
    })
        .then(res => res?.json())
        .then(data => {
            return data;
        })
        .catch(e => {
            console.log(e);
            return e;
        });
}
//date = yyyy-mm-dd
export const events = (date) => {
    let url = `${process.env.api_isports}/events?api_key=${ISportsAPI_Key}&date=${date}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
//thống kê số liệu, date = yyyy-mm-dd
export const stats = (date) => {
    let url = `${process.env.api_isports}/stats?api_key=${ISportsAPI_Key}&date=${date}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
//phạt góc , date = yyyy-mm-dd
export const corner = (date) => {
    let url = `${process.env.api_isports}/corner?api_key=${ISportsAPI_Key}&date=${date}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
export const lineUps = (matchId) => {
    let url = `${process.env.api_isports}/lineups?api_key=${ISportsAPI_Key}&matchId=${matchId}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
//chấn thương
export const injury = () => {
    let url = `${process.env.api_isports}/injury?api_key=${ISportsAPI_Key}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
//danh sách trận đấu và text trực tiếp
export const matchListOfLiveText = () => {
    let url = `${process.env.api_isports}/livetext/list?api_key=${ISportsAPI_Key}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
export const liveText = (matchId) => {
    let url = `${process.env.api_isports}/livetext?api_key=${ISportsAPI_Key}&matchId=${matchId}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
//chuyển nhượng , day = 1 
export const transfer = (day) => {
    let url = `${process.env.api_isports}/transfer?api_key=${ISportsAPI_Key}&day=${day}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
//phân tích trận đấu 
export const analysis = (matchId) => {
    let url = `${process.env.api_isports}/analysis?api_key=${ISportsAPI_Key}&matchId=${matchId}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
export const listOfPlayerStats = () => {
    let url = `${process.env.api_isports}/match/list?api_key=${ISportsAPI_Key}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}

export const playerStats = (matchId) => {
    let url = `${process.env.api_isports}/match/list?api_key=${ISportsAPI_Key}&matchId=${matchId}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
export const leagueStanding = (leagueId) => {
    let url = `${process.env.api_isports}/standing/league?api_key=${ISportsAPI_Key}&leagueId=${leagueId}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
export const cupStanding = (leagueId) => {
    let url = `${process.env.api_isports}/standing/cup?api_key=${ISportsAPI_Key}&leagueId=${leagueId}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
// leagueId là bắt buộc , season thì không eg season=2020 or 2021-2022
export const topScorer = (leagueId, season) => {
    let url = `${process.env.api_isports}/topscorer?api_key=${ISportsAPI_Key}&leagueId=${leagueId}&season=${season}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
export const matchModifyRecord = () => {
    let url = `${process.env.api_isports}/schedule/modify?api_key=${ISportsAPI_Key}`;
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}
