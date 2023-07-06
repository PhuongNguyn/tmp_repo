import React from "react";
import Link from "next/link";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faCheck, faMinus, faPlus);

function CompareBets(props) {
  // console.log("13 " + JSON.stringify(props));
  const data = props.dealerList;

  // data.map((item)=>{console.log(item.dealer_name)})
  let dealerList =
    data.length > 0 &&
    data.map((item, i) => {
      return (
        <option key={i} value={item._id}>
          {" "}
          {item.dealer_name}
        </option>
      );
    }, this);

  return (
    <article id="ctwidget_ssnc-5" className="widget widget_ctwidget_ssnc">
      <div className="vbcompare_nhacai ">
        <div className="bxinner">
          <div className="title bxwidget_title">
            <span>new</span>
            <Link href="/so-sanh-nha-cai/" rel="dofollow">
              So sánh nhà cái
            </Link>
          </div>
          <form action="/so-sanh-compartDEalert/" method="GET">
            <label>Vui lòng chọn danh sách nhà cái bên dưới </label>
            <div className="bxallfield">
              <div className="field_item">
                <div
                  id="bxsl_img_nc1"
                  // data_name="nc1"
                  className="bxcs_select_img"
                >
                  <div className="bxshow_dropdown"></div>
                  <select
                    className="bxselectdf"
                    name="nc1"
                    data-index="nc1"
                    style={{ display: "block" }}
                  >
                    {dealerList}
                  </select>
                </div>
              </div>
              <div className="iconcompare">
                <span>
                  <Image
                    data-lazyloaded="1"
                    src="https://topnhacai.b-cdn.net/icon-compare.png"
                    data-src="https://topnhacai.b-cdn.net/icon-compare.png"
                    width="15"
                    height="14"
                    alt="icon-compare"
                  />
                </span>
              </div>
              <div className="field_item">
                <div
                  id="bxsl_img_nc1"
                  // data_name="nc2"
                  className="bxcs_select_img"
                >
                  <div className="bxshow_dropdown"></div>
                  <select
                    className="bxselectdf"
                    name="nc2"
                    data-index="nc2"
                    style={{ display: "block" }}
                  >
                    {dealerList}
                  </select>
                </div>
              </div>
            </div>
            <div className="bxaction">
              <input type="submit" name="sbcompare_nhacai" value="So Sánh" />
            </div>
          </form>
        </div>
      </div>
    </article>
  );
}
export default CompareBets;
