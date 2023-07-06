import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import DealersList from '../../containers/News/DealersListSoiKeo';

function TrustBet(props) {
    return (
        <article id="ctwidget_topnhacai-2" className="widget widget_ctwidget_topnhacai">
    <div className="bxwidget_topnc bxcswidget">
        <div className="bxinner">
            <div className="title bxwidget_title"><span className="wgicon_top">top</span>
                <Link href="https://topnhacai.today/nha-cai-uy-tin/" target="_blank" rel="dofollow">Nhà cái uy tín</Link>
            </div>
            <div className="bxlist_contain">
                <div className="bxitemnc">
                    {
                        <>
                            <DealersList />
                        </>
                    }
                    {/* <div className="bxinner"><span className="count">1</span>
                        <div className="bxnhacai-image"><Link href="https://www.7897891.vip/"
                                className="seoquake-nofollow"><Image data-lazyloaded="1"
                                    src="https://topnhacai.b-cdn.net/logo-789.png"
                                    data-src="https://topnhacai.b-cdn.net/logo-789.png"
                                    width="89" height="28" title="Nhà cái 789bet" alt="789bet" data-ll-status="loaded"
                                    className="entered litespeed-loaded" /></Link></div>
                        <div className="bxkm">
                            <div className="ttkm">
                                <span className="ttkm">Thưởng 100% lên đến</span><br></br>
                                <span className="giakm">1.500.000&nbsp;VNĐ</span>
                            </div>
                        </div>
                        <div className="bxlink"><Link href="https://www.7897891.vip/"
                                className="seoquake-nofollow">Chơi ngay</Link></div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</article>
    );
}

export default TrustBet;