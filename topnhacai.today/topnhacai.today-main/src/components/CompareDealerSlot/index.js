import { React, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faLink,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faChevronDown,
  faChevronRight,
  faLink,
  faChevronUp,
  faPlus,
  faMinus
);

function findDealerIdInDealerService(id, dealerIds) {
  return dealerIds.find((item) => item._id && item._id == id);
}

function CompareDealerSlot(props) {
  const { valueDefault } = props;

  let loadDealerService = function (id) {
    fetch(`${process.env.api_topnhacai}/dealerService/getByDealerId/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result && result[0]) setDealerServiceBinding(result[0]);
          return result[0];
        },
        (error) => {}
      );
  };

  let loadDealerPayment = function (id) {
    fetch(`${process.env.api_topnhacai}/dealerPayment/getByDealerId/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setDealerPaymentBinding(result);
          return result;
        },
        (error) => {}
      );
  };

  let loadDealerInfor = function (id) {
    fetch(`${process.env.api_topnhacai}/dealerInfor/getByDealerId/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setDealerInforBinding(result);
          return result;
        },
        (error) => {}
      );
  };

  let loadDealer = function (id) {
    fetch(`${process.env.api_topnhacai}/dealers/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setDealerBinding(result);
          if (result.dealer_promotion && result.dealer_promotion[0]) {
            setDealerPromotionBinding(result.dealer_promotion[0]);
          }
        },
        (error) => {}
      );
  };

  let getDealerOptions = function (dealers, dealerName) {
    // console.log("dealers: ", dealers);
    // console.log("dealerName", dealerName);
    return dealers.map((dealer, index) => {
      // if (dealerName !== dealer.dealer_name)
      if (dealer.dealer_name)
        return (
          <option key={index} value={dealer._id}>
            {dealer.dealer_name}
          </option>
        );
      });
  };

  let getDealerInforPartner = function (dealerInfors) {
    if (dealerInfors && dealerInfors.di_partner) {
      return dealerInfors.di_partner.map((partner, index) => {
        return (
          <p key={index}>
            <span>{partner}</span>
          </p>
        );
      });
    }
  };

  let getDealerInforAdvantages = function (dealerInfors) {
    if (dealerInfors && dealerInfors.di_advantages) {
      return dealerInfors.di_advantages.map((adv, index) => {
        return (
          <li key={index}>
            <FontAwesomeIcon icon={["fas", "fa-plus"]} />
            <span>{adv}</span>
          </li>
        );
      });
    }
  };

  let getDealerInforWeakness = function (dealerInfors) {
    if (dealerInfors && dealerInfors.di_weakness) {
      return dealerInfors.di_weakness.map((weak, index) => {
        return (
          <li key={index}>
            <FontAwesomeIcon icon={["fas", "fa-minus"]} />
            <span>{weak}</span>
          </li>
        );
      });
    }
  };

  let getDealerPromotion = function (dealerPromotion) {
    if (dealerPromotion) {
      return dealerPromotion.map((prom, index) => {
        return (
          <div className="bxite" key={index}>
            <h5>{prom}</h5>
          </div>
        );
      });
    }
  };

  let getDealerInforGameSystem = function (dealerInfor) {
    if (dealerInfor && dealerInfor.di_game_system) {
      return dealerInfor.di_game_system.map((game, index) => {
        return (
          <tr key={index}>
            <td>{game}</td>
          </tr>
        );
      });
    }
  };

  let getDealerImage = function (dealer) {
    if (dealer && dealer.dealer_image) {
      return (
        <Image
          data-lazyloaded="1"
          src={dealer.dealer_image}
          data-src={dealer.dealer_image}
          width="89"
          height="28"
          alt="w88"
          data-ll-status="loaded"
          className="entered litespeed-loaded"
        />
      );
    }
  };

  let getDealerStars = function (dealerInfor) {
    if (!dealerInfor) return <></>;
    if (dealerInfor.di_score5) {
      return (
        <>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
        </>
      );
    } else if (dealerInfor.di_score4) {
      return (
        <>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
        </>
      );
    } else if (dealerInfor.di_score3) {
      return (
        <>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
        </>
      );
    } else if (dealerInfor.di_score2) {
      return (
        <>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
        </>
      );
    } else if (dealerInfor.di_score1) {
      return (
        <>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
        </>
      );
    } else {
      return (
        <>
          <span className="active">
            <FontAwesomeIcon icon={["fas", "fa-star"]} />
          </span>
        </>
      );
    }
  };

  let loadAllDealerRelatedData = function (event) {
    if (event.target.value) {
      loadDealer(event.target.value);
      loadDealerInfor(event.target.value);
      loadDealerPayment(event.target.value);
      loadDealerService(event.target.value);
    }
  };

  let hanleOnchangeSelect = async function (event) {
    var id = event.target.value;
    const dealerPromotionBinding = await fetch(
      `${process.env.api_topnhacai}/dealers/${id}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setDealerBinding(result);
          if (result.dealer_promotion && result.dealer_promotion[0]) {
            setDealerPromotionBinding(result.dealer_promotion[0]);
            return result.dealer_promotion[0];
          }
        },
        (error) => {}
      );

    const dealerInforBinding = await fetch(
      `${process.env.api_topnhacai}/dealerInfor/getByDealerId/${id}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setDealerInforBinding(result);
          return result;
        },
        (error) => {}
      );

    const dealerPaymentBinding = await fetch(
      `${process.env.api_topnhacai}/dealerPayment/getByDealerId/${id}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setDealerPaymentBinding(result);
          return result;
        },
        (error) => {}
      );

    setDealerInfo({
      dealerBinding: dealerPromotionBinding,
      dealerInforBinding: dealerInforBinding,
      dealerPaymentBinding: dealerPaymentBinding,
      dealerPromotionBinding: dealerPromotionBinding,
      value: dealerPromotionBinding._id,
      dealerName: dealerPromotionBinding.dp_name,
    });
  };

  const [dealerBinding, setDealerBinding] = useState({});
  const [dealerInforBinding, setDealerInforBinding] = useState({});
  const [dealerPaymentBinding, setDealerPaymentBinding] = useState({});
  const [dealerPromotionBinding, setDealerPromotionBinding] = useState({});
  const [dealerServiceBinding, setDealerServiceBinding] = useState({});
  const [infoDealer, setDealerInfo] = useState({
    value: "",
    dealerName: "",
  });

  useEffect(() => { 
    var id = valueDefault ? valueDefault._id:'62d0df228d16eea675be9beb';
    const dealerPromotionBinding = fetch(
      `${process.env.api_topnhacai}/dealers/${id}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setDealerBinding(result);
          if (result.dealer_promotion && result.dealer_promotion[0]) {
            setDealerPromotionBinding(result.dealer_promotion[0]);
            return result.dealer_promotion[0];
          }
        },
        (error) => {}
      );

    const dealerInforBinding = fetch(
      `${process.env.api_topnhacai}/dealerInfor/getByDealerId/${id}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setDealerInforBinding(result);
          return result;
        },
        (error) => {}
      );

    const dealerPaymentBinding = fetch(
      `${process.env.api_topnhacai}/dealerPayment/getByDealerId/${id}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setDealerPaymentBinding(result);
          return result;
        },
        (error) => {}
      );

    setDealerInfo({
      value: dealerPromotionBinding._id,
      dealerName: dealerPromotionBinding.dp_name,
    });

    
  }, []);

  return (
    <>
      <div className="bxloadicon" data-name="nc1">
        <span className="icon"></span>
      </div>
      <select
            className="bxsl_ss bxsl_ssn"
            name="nc1"
            onChange={hanleOnchangeSelect}
            value={infoDealer}
          >
            <option value={infoDealer.value || ""}>
              {infoDealer.dealerName || valueDefault.dealer_name}
            </option>
            {getDealerOptions(props.dealers, valueDefault.dealer_name)}
          </select>
      <div className="bxslss">
        <div className="bxss_nhacaiit">
          
        </div>
      </div>
      <div className="bxresultss" data-name="nc1">
        <div id="ssnhacai_171" className="bxxcolumnss">
          <div className="bxinner">
            <div
              className="bxssitem bxlogo"
              data-box="logo"
              style={{ height: "255.391px" }}
            >
              <div className="bxinner bxlginner">
                <div className="bxhead">
                  <div
                    className="imglg"
                    style={{ background: "#fafafa", borderColor: "#ffffff" }}
                  >
                    <span>{getDealerImage(dealerBinding)}</span>
                  </div>
                </div>
                <div className="bxkmss">
                  <div className="bxinner">
                    <h2 className="sstitle">{dealerBinding.dealer_name}</h2>
                    <div className="rate">
                      <div className="star">
                        {getDealerStars(dealerInforBinding)}
                      </div>
                    </div>
                    <div className="bxbtn btninline">
                      <a href={dealerBinding.dealer_link} rel="nofollow">
                        chơi ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div
              className="bxssitem ttcnc"
              data-box="ttchung"
              style={{ height: "350px", marginTop:"50px" }}
            >
              <table>
                  <tr>
                      <td>Website</td>
                      <td>
                        <a href={dealerBinding.dealer_link} rel="nofollow">
                          {dealerBinding.dealer_link}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Chủ quản</td>
                      <td>
                      {dealerInforBinding && dealerInforBinding.di_host
                            ? dealerInforBinding.di_host
                            : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Trụ sở chính</td>
                      <td>
                      {dealerInforBinding &&
                          dealerInforBinding.di_headquarters
                            ? dealerInforBinding.di_headquarters
                            : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Giấy phép</td>
                      <td>
                      {dealerInforBinding && dealerInforBinding.di_license
                            ? dealerInforBinding.di_license
                            : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Năm thành lập</td>
                      <td>
                      {dealerInforBinding &&
                          dealerInforBinding.di_founded_year
                            ? dealerInforBinding.di_founded_year
                            : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Đối tác &amp; tài trợ</td>
                      <td>
                      {getDealerInforPartner(dealerInforBinding)}
                      </td>
                    </tr>
                </table>
            </div>
            <div
              className="bxssitem bxdbc"
              data-box="rate"
              style={{ height: "419.5px" }}
            >
              <div className="bxinner">
                <div className="sstitle_step">Bình chọn điểm</div>
                <div className="trd">
                  <div className="dins">
                    <span className="ttrate">
                      <strong>
                        {dealerBinding && dealerBinding.dealer_star_rate
                          ? dealerBinding.dealer_star_rate[0]
                          : ""}
                      </strong>
                      /10
                    </span>
                    <div className="star">
                      {getDealerStars(dealerInforBinding)}
                    </div>
                    <div className="slbl">
                      <span>
                        <strong>
                          {dealerBinding && dealerBinding.dealer_rating
                            ? dealerBinding.dealer_rating[0] + " "
                            : ""}
                        </strong>
                        lượt bình chọn
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rate_list">
                  <div className="bxlist">
                    <div className="rtl_item style2">
                      <div className="bxtitle">
                        <span className="txt">
                        Uy tín &amp; bảo mật
                          {/* <span>Uy tín &amp; bảo mật</span> */}
                        </span>
                        <div className="rt_nb">9.5/10</div>
                      </div>
                      <div className="process">
                        <div className="bxst">
                          <span style={{ width: "95%" }}></span>
                        </div>
                      </div>
                    </div>
                    <div className="rtl_item style2">
                      <div className="bxtitle">
                        <span className="txt">
                        Nạp / rút tiền
                          {/* <span>Nạp / rút tiền</span> */}
                        </span>
                        <div className="rt_nb">9.4/10</div>
                      </div>
                      <div className="process">
                        <div className="bxst">
                          <span style={{ width: "94%" }}></span>
                        </div>
                      </div>
                    </div>
                    <div className="rtl_item style2">
                      <div className="bxtitle">
                        <span className="txt">
                        Hỗ trợ khách hàng
                          {/* <span>Hỗ trợ khách hàng</span> */}
                        </span>
                        <div className="rt_nb">9.2/10</div>
                      </div>
                      <div className="process">
                        <div className="bxst">
                          <span style={{ width: "92%" }}></span>
                        </div>
                      </div>
                    </div>
                    <div className="rtl_item style2">
                      <div className="bxtitle">
                        <span className="txt">
                        Tỉ lệ cược
                          {/* <span>Tỉ lệ cược</span> */}
                        </span>
                        <div className="rt_nb">9.5/10</div>
                      </div>
                      <div className="process">
                        <div className="bxst">
                          <span style={{ width: "95%" }}></span>
                        </div>
                      </div>
                    </div>
                    <div className="rtl_item style2">
                      <div className="bxtitle">
                        <span className="txt">
                        Tiền thường/ khuyến mãi
                          {/* <span>Tiền thường/ khuyến mãi</span> */}
                        </span>
                        <div className="rt_nb">9.5/10</div>
                      </div>
                      <div className="process">
                        <div className="bxst">
                          <span style={{ width: "95%" }}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bxssitem bxuu"
              data-box="bxuu"
              style={{ height: "315.5px" }}
            >
              <div className="bxinner">
                <div className="sstitle_step">Ưu điểm</div>
                <div className="bxbo_tt_inner bxlist bxpad20">
                  <ul>{getDealerInforAdvantages(dealerInforBinding)}</ul>
                </div>
              </div>
            </div>
            <div
              className="bxssitem bxnhuoc"
              data-box="bxnhuoc"
              style={{ height: "285.5px" }}
            >
              <div className="bxinner">
                <div className="sstitle_step">Nhược điểm</div>
                <div className="bxnhuoc">
                  <ul>{getDealerInforWeakness(dealerInforBinding)}</ul>
                </div>
              </div>
            </div>
            <div
              className="bxssitem bxnaptien"
              data-box="naptien"
              style={{ height: "375.625px" }}
            >
              <div className="bxinner">
                <div className="sstitle_step">Nạp tiền</div>
                <div className="bxnd">
                  <table>
                      <tbody>
                      <tr>
                        <td>
                          <strong>Nạp tối thiểu</strong>
                        </td>
                        <td>
                          <span>
                            {dealerPaymentBinding &&
                            dealerPaymentBinding.dp_deposit_min
                              ? dealerPaymentBinding.dp_deposit_min
                              : ""}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Nạp tối đa</strong>
                        </td>
                        <td>
                          <span>
                            {dealerPaymentBinding &&
                            dealerPaymentBinding.dp_deposit_max
                              ? dealerPaymentBinding.dp_deposit_max
                              : ""}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Nạp tối đa / ngày</strong>
                        </td>
                        <td>
                          <span>
                            {dealerPaymentBinding &&
                            dealerPaymentBinding.dp_deposit_max_day
                              ? dealerPaymentBinding.dp_deposit_max_day
                              : ""}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Thời gian xử lý</strong>
                        </td>
                        <td>
                          <span>
                            {dealerPaymentBinding &&
                            dealerPaymentBinding.dp_deposit_processing_time
                              ? dealerPaymentBinding.dp_deposit_processing_time
                              : ""}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Cổng nạp</strong>
                        </td>
                        <td>
                          <span>
                            {dealerPaymentBinding &&
                            dealerPaymentBinding.dp_deposit_payments
                              ? dealerPaymentBinding.dp_deposit_payments
                              : ""}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Ngân hàng</strong>
                        </td>
                        <td>
                          <span>
                            {dealerPaymentBinding &&
                            dealerPaymentBinding.dp_deposit_banks
                              ? dealerPaymentBinding.dp_deposit_banks
                              : ""}
                          </span>
                        </td>
                      </tr>
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="bxssitem bxrut"
              data-box="rutien"
              style={{ height: "375.625px" }}
            >
              <div className="bxinner">
                <div className="sstitle_step">Rút tiền</div>
                <div className="bxnd">
                  <table>
                      <tbody>
                      <tr>
                        <td>
                          <strong>Rút tối thiểu</strong>
                        </td>
                        <td>
                          <span>
                            {dealerPaymentBinding &&
                            dealerPaymentBinding.dp_withdrawal_min
                              ? dealerPaymentBinding.dp_withdrawal_min
                              : ""}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Rút tối đa</strong>
                        </td>
                        <td>
                          <span>
                            {dealerPaymentBinding &&
                            dealerPaymentBinding.dp_withdrawal_max
                              ? dealerPaymentBinding.dp_withdrawal_max
                              : ""}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Rút tối đa / ngày</strong>
                        </td>
                        <td>
                          <span>
                            {dealerPaymentBinding &&
                            dealerPaymentBinding.dp_withdrawal_max_day
                              ? dealerPaymentBinding.dp_withdrawal_max_day
                              : ""}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Thời gian xử lý</strong>
                        </td>
                        <td>
                          <span>
                            {dealerPaymentBinding &&
                            dealerPaymentBinding.dp_withdrawal_prc_time
                              ? dealerPaymentBinding.dp_withdrawal_prc_time
                              : ""}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Cổng thanh toán</strong>
                        </td>
                        <td>
                          <span>
                            {dealerPaymentBinding &&
                            dealerPaymentBinding.dp_withdrawal_payments
                              ? dealerPaymentBinding.dp_withdrawal_payments
                              : ""}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Ngân hàng</strong>
                        </td>
                        <td>
                          <span>
                            {dealerPaymentBinding &&
                            dealerPaymentBinding.dp_withdrawal_banks
                              ? dealerPaymentBinding.dp_withdrawal_banks
                              : ""}
                          </span>
                        </td>
                      </tr>
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="bxssitem bxctkm"
              data-box="khuyenmai"
              style={{ height: "307.5px" }}
            >
              <div className="bxinner">
                <div className="sstitle_step">
                  {dealerPromotionBinding && dealerPromotionBinding.dp_name
                    ? dealerPromotionBinding.dp_name
                    : ""}
                </div>
                <div className="bxttinner">
                  {dealerPromotionBinding &&
                    dealerPromotionBinding.dp_detail &&
                    getDealerPromotion(dealerPromotionBinding.dp_detail)}
                  <div className="bxbtn btninline">
                    <a
                      href={
                        dealerPromotionBinding && dealerPromotionBinding.dp_link
                          ? dealerPromotionBinding.dp_link
                          : ""
                      }
                      rel="nofollow"
                    >
                      nhận ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bxssitem bxdvkh"
              data-box="service"
              style={{ height: "421.625px" }}
            >
              <div className="bxinner">
                <div className="sstitle_step">Dịch vụ khách hàng</div>
                <div className="bxbbaner"></div>
                <div className="bxdvss ttls">
                  <table>
                      <tbody>
                      <tr>
                        <td>Dịch vụ</td>
                        <td>24/7/365</td>
                      </tr>
                      <tr>
                        <td>Kênh hỗ trợ</td>
                        <td>Email, Live chat</td>
                      </tr>
                      <tr>
                        <td>Hotline</td>
                        <td>{dealerServiceBinding.ds_hotline}</td>
                      </tr>
                      <tr>
                        <td>Zalo</td>
                        <td>{dealerServiceBinding.ds_zalo}</td>
                      </tr>
                      <tr>
                        <td>Skype</td>
                        <td>{dealerServiceBinding.ds_skype}</td>
                      </tr>
                      <tr>
                        <td>Viber/ WhatsApp</td>
                        <td>{dealerServiceBinding.ds_viber}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>{dealerServiceBinding.ds_email}</td>
                      </tr>
                      <tr>
                        <td>Telegram</td>
                        <td>{dealerServiceBinding.ds_telegram}</td>
                      </tr>
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="bxssitem bxdvkh"
              data-box="game"
              style={{ height: "150px" }}
            >
              <div className="bxinner">
                <div className="sstitle_step">Hệ thống trò chơi</div>
                <div className="httcss">
                  <table>
                      {dealerInforBinding &&
                        getDealerInforGameSystem(dealerInforBinding)}
                  </table>
                </div>
              </div>
            </div>
            <div
              className="bxssitem bxttcc"
              data-box="cacuoc"
              style={{ height: "336.234px" }}
            >
              <div className="bxinner">
                <div className="sstitle_step">Thông tin cá cược</div>
                <div className="bxttinner">
                  <table>
                      <tr>
                        <td>Mức cược thấp nhất</td>
                        <td>100.000&nbsp;VNĐ</td>
                      </tr>
                      <tr>
                        <td>Mức cược tối đa</td>
                        <td>200.000.000&nbsp;VNĐ</td>
                      </tr>
                      <tr>
                        <td>Tỉ lệ cược</td>
                        <td>
                          US (Mỹ), CN (China), DEC (Decimal), MY (Myanmar), IND
                          (Indonesia)
                        </td>
                      </tr>
                      <tr>
                        <td>Loại kèo</td>
                        <td>
                          <span>
                            Châu Á (Handicap), Châu Âu (1x2), Tài xỉu
                            (Over/Under), Xiên (BTTS), ...
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Tiền tệ</td>
                        <td>RMB, INR, IDR, KRW, MYR, THB, USD, VNĐ</td>
                      </tr>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="bxssitem bcttht"
              data-box="system"
              style={{ height: "358.625px" }}
            >
              <div className="bxinner">
                <div className="sstitle_step">Thông tin hệ thống</div>
                <div className="bxttinner">
                  <table>
                      <tr>
                        <td>Ngôn ngữ website</td>
                        <td>
                          <span className="langs">
                            <span
                              className="imgl"
                              style={{
                                backgroundImage:
                                  "url(https://topnhacai.b-cdn.net/vietnam.png)",
                                backgroundPosition: " center center ",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                              title="Tiếng Việt"
                            ></span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Nền tảng</td>
                        <td>Web, Mobile</td>
                      </tr>
                      <tr>
                        <td>Ứng dụng di động</td>
                        <td>iOS, iPadOS, Android</td>
                      </tr>
                      <tr>
                        <td>Ứng dụng máy tính</td>
                        <td>Không</td>
                      </tr>
                      <tr>
                        <td>Xem bóng đá trực tuyến</td>
                        <td>Không</td>
                      </tr>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="bxssitem bxbtn"
              data-box="link"
              style={{ height: "44px" }}
            >
              <a href="https://www.7897891.vip/" rel="nofollow">
                Chơi ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareDealerSlot;
