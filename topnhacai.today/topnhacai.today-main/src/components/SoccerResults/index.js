import React, { useState } from 'react';
import Image from 'next/image';
// import $, { map } from 'jquery';
import { useEffect } from "react";
import useSWR from "swr";
import { render } from 'react-dom';
import { useFileSystemPublicRoutes } from '../../../next.config';
import Loading from "../../components/Loading";
import fetch from "isomorphic-fetch"
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const timestamp = new Date().getTime();
const staticProfile = [];
function formatDate(date) {
    var x = new Date(date)
    var dd = x.getDate();
    var mm = x.getMonth() + 1;
    var yyyy = x.getFullYear()
    return  (dd > 9 ? dd : '0' + dd) + "/" + (mm > 9 ? mm : '0' + mm) + "/" + yyyy;
}

function formatTime(timestamp) {
    var x = new Date(timestamp * 1000);
    var dd = x.getDate();
    var mm = x.getMonth() + 1;
    return (dd > 9 ? dd : '0' + dd) + "/" + (mm > 9 ? mm : '0' + mm);
}

function formatDate1(timestamp) {

    var x = new Date(parseInt(timestamp));
    var dd = x.getDate();
    var mm = x.getMonth() + 1;
    var yyyy = x.getFullYear()
    return yyyy + "-" + (mm > 9 ? mm : '0' + mm) + "-" + (dd > 9 ? dd : '0' + dd);
}

const groupBy = (items, key) => items.reduce(
    (result, item) => ({
        ...result,
        [item[key]]: [
            ...(result[item[key]] || []),
            item,
        ],
    }),
    {},
);

const mapData = (arr1, arr2) => {
    var result = []
    arr1.map((item, index) => {
        arr2.map((item1, index) => {
            if (item.homeId === item1.teamId || item.awayId === item1) {
                result.push({ schedule: item, item1 })
            }
        })
    })
    return result;
}

function SoccerResults(props) {
    const current = new Date();
    const addDate = 86400 * 1000;
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    const [stateData, setStateData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const resSchedule = await fetch(`${process.env.api_topnhacai}/schedule?date=${date}&limit=100`)
                .then((res) => (res ? res.json() : null))
                .then((data) => {
                    return JSON.parse(data)?.datas;
                });
            //get data teamprofile 
            var arrTeamIds = []
            resSchedule && resSchedule?.map(item => {
                arrTeamIds.push(item.homeId)
                arrTeamIds.push(item.awayId)
            })
            var dataReq = {
                teamIds: arrTeamIds
            }
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const options = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(dataReq)
            };
            const resTeamProfile = await fetch(`${process.env.api_topnhacai}/teamProfiles/getByTeamIds`, options)
                .then(res => res.json())
                .then((data) => {
                    return data;
                });

            setStateData({
                listSchedule: resSchedule ? resSchedule : [],
                listTeamProfile: resTeamProfile ? resTeamProfile : [],
            });
        };
        fetchData();
    }, [date]);

    const ActiveTab = async (e) => {
        var time = e.target.getAttribute("data");
        $('a.active').removeClass('active');
        $(e.target).addClass("active");
        if (time) {
            const resScheduleTab = await fetch(`${process.env.api_isports}/schedules?date=${formatDate1(time)}&&limit=60`)
                .then(response => response.json())
                .then((data) => {
                   return  data ? JSON.parse(data).datas : [];
                });
                var arrTeamIds = []
                resScheduleTab && resScheduleTab?.map(item => {
                    arrTeamIds.push(item.homeId)
                    arrTeamIds.push(item.awayId)
                })
                var dataReq = {
                    teamIds: arrTeamIds
                }
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                const options = {
                    method: 'POST',
                    headers: myHeaders,
                    body: JSON.stringify(dataReq)
                };
            const resTeamProfile = await fetch(`${process.env.api_topnhacai}/teamProfiles/getByTeamIds`, options)
                .then(res => res.json())
                .then((data) => {
                    return data;
                });
            setStateData({
                listSchedule: resScheduleTab ? resScheduleTab : [],
                listTeamProfile: resTeamProfile ? resTeamProfile : [],
                // dataMatch: resMatch ? resMatch[0] : [],
            });
        }
    }
    const allData  = mapData(stateData ? stateData.listSchedule : [], stateData ? stateData.listTeamProfile : [])


    return (
        <>
            <div className="bxss ssiframe">
                <div className="bxinner">
                    <div className="app-loadicon text-center" style={{ display: "none" }}><span className="loadicon active"></span></div>
                    <div id="app_kqbd" className="tabs_iframe app-init is_active">
                        <ul>
                            <li onClick={ActiveTab}><a className="active" href="javascript:;" data-id="#ket-qua-bong-da-2" data={timestamp}>Hôm nay</a></li>
                            <li onClick={ActiveTab}><a href="javascript:;" data-id="#ket-qua-bong-da-2" data={timestamp - addDate}>{formatDate(timestamp - addDate)}</a></li>
                            <li onClick={ActiveTab}><a href="javascript:;" data-id="#ket-qua-bong-da-2" data={timestamp - addDate * 2} >{formatDate(timestamp - addDate * 2)}</a></li>
                            <li onClick={ActiveTab}><a href="javascript:;" data-id="#ket-qua-bong-da-2" data={timestamp - addDate * 3}>{formatDate(timestamp - addDate * 3)}</a></li>
                            <li onClick={ActiveTab}><a href="javascript:;" data-id="#ket-qua-bong-da-2" data={timestamp - addDate * 4}>{formatDate(timestamp - addDate * 4)}</a></li>
                            <li onClick={ActiveTab}><a href="javascript:;" data-id="#ket-qua-bong-da-2" data={timestamp - addDate * 5}>{formatDate(timestamp - addDate * 5)}</a></li>
                            <li onClick={ActiveTab}><a href="javascript:;" data-id="#ket-qua-bong-da-2" data={timestamp - addDate * 6}>{formatDate(timestamp - addDate * 6)}</a></li>
                        </ul>
                        <div className="bxiframe_nguon active" style={{ display: "block" }}>
                            {allData?.map((result, index) => {

                                    return (
                                        <div id="ltd1" className="match-football match-football-item" key={index}>
                                            <div className="football-header">
                                                <h3 className="fhead-left">
                                                    <span title="Kết quả Premier League" className="active">
                                                        {result.schedule.leagueName}
                                                    </span>
                                                </h3>
                                                <div className="fhead-right"></div>
                                            </div>

                                            <div data-leagueid="1" className="f-row matchdetail">
                                                <div className="football-match">
                                                    <div className="columns-time"><span id="65064_timeplaying" className="time">FT</span> <span
                                                        className="separator m_hiden">-</span> <span className="date">{formatTime(result.schedule.matchTime)}</span> 
                                                        {/* <span
                                                            title="Vòng 16" className="vongbang m_hiden"> 18 </span> <span id="65064_livetime"
                                                                className="live m_hiden"></span> */}
                                                                </div>
                                                    <div className="columns-match">
                                                        <div className="row-teams">
                                                            <div className="columns-club"><span className="name-club club1">
                                                                {result.schedule.homeName}
                                                                <Image data-lazyloaded="1" width={30} height={30} 
                                                                src={
                                                                    result.schedule.homeId === result.item1.teamId 
                                                                    ? result.item1.logo :'https://topnhacai.b-cdn.net/no-logo.gif'
                                                                }
                                                                    alt="Alianza Lima" className="logo-club entered litespeed-loading"
                                                                    data-ll-status="loading" />
                                                                <div id="redCardHome">
                                                                </div>
                                                            </span></div>
                                                            <div className="columns-number">
                                                                <p><span className="soccer-scores">{result.schedule.homeScore} - {result.schedule.awayScore}</span></p>
                                                            </div>
                                                            <div className="columns-club"><span className="name-club club2">
                                                                {result.schedule.awayName}
                                                                <Image data-lazyloaded="1" width={30} height={30} 
                                                                src={
                                                                    result.schedule.awayId === result.item1.teamId 
                                                                    ? result.item1.logo :'https://topnhacai.b-cdn.net/no-logo.gif'
                                                                }
                                                                    alt="Ayacucho FC" className="logo-club entered litespeed-loading"
                                                                    data-ll-status="loading" />
                                                                <div id="redCardAway">
                                                                </div>
                                                            </span></div>
                                                        </div>
                                                        <div id="65064_matchinfo" className="row_match_info"><span className="item_ktv"><span
                                                            title="Tỷ số hiệp 1">H1:</span> 0-0</span>
                                                            <div className="fix_hiden"></div>
                                                        </div>
                                                    </div>
                                                    <div className="columns-other">
                                                        <div className="flexright">
                                                            <div className="item-other1 m_hiden"></div>
                                                            <div className="item-other2 m_hiden"></div>
                                                            <div className="item-other3 f-tv m_hiden"></div>
                                                            <div className="item-other4"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) 
                            }
                        </div>
                    </div>
                    {/* <div v-if="isRunning" className="bxiframe_nguon text-center" style={{ display: "block", marginTop: "10px" }}><span
                        className="loadicon active"></span></div> */}
                </div>
            </div>
        </>
    );


}

export default SoccerResults;