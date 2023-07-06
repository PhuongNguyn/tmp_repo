import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

const Infor = ({ data }) => {
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
    // if (!dealerInfor) return <></>;
    // if (dealerInfor.di_score5) {
    //   return (
    //     <>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //     </>
    //   );
    // } else if (dealerInfor.di_score4) {
    //   return (
    //     <>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //     </>
    //   );
    // } else if (dealerInfor.di_score3) {
    //   return (
    //     <>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //     </>
    //   );
    // } else if (dealerInfor.di_score2) {
    //   return (
    //     <>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //     </>
    //   );
    // } else if (dealerInfor.di_score1) {
    //   return (
    //     <>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //     </>
    //   );
    // } else {
    //   return (
    //     <>
    //       <span className="active">
    //         <FontAwesomeIcon icon={["fas", "fa-star"]} />
    //       </span>
    //     </>
    //   );
    // }
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
    var id = data ? data._id : "62d0df228d16eea675be9beb";
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
          console.log(result, id);

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
    setDealerInforBinding(dealerInforBinding);
  }, []);
  return (
    <div className="bxresultss" data-name="nc1" style={{ height: "" }}>
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
                  <span>{getDealerImage(data)}</span>
                </div>
              </div>
              <div className="bxkmss">
                <div className="bxinner">
                  <h2 className="sstitle">{data.dealer_name}</h2>
                  <div className="rate">
                    <div className="star">{getDealerStars(data)}</div>
                  </div>
                  <div className="bxbtn btninline">
                    <a href={data.dealer_link} rel="nofollow">
                      chơi ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {data?.dealer_description && (
            <div
              dangerouslySetInnerHTML={{ __html: data?.dealer_description }}
            ></div>
          )}
          {/* Bình chọn điểm */}
          <div
            className="bxssitem bxdbc"
            data-box="rate"
            style={{ height: "auto" }}
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
          {/* Thông tin nhà cái */}
          <div
            className="row"
            style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "flex-start",
            }}
          >
            <div className="col">
              <div
                className="bxssitem ttcnc"
                data-box="ttchung"
                style={{ width: "100%" }}
              >
                <div className="sstitle_step">Thông tin nhà cái</div>

                <table>
                  <tr>
                    <td>Website</td>
                    <td>
                      <a href={data.dealer_link} rel="nofollow">
                        {data.dealer_link}
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
                      {dealerInforBinding && dealerInforBinding.di_headquarters
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
                      {dealerInforBinding && dealerInforBinding.di_founded_year
                        ? dealerInforBinding.di_founded_year
                        : ""}
                    </td>
                  </tr>
                  <tr>
                    <td>Đối tác &amp; tài trợ</td>
                    <td>{getDealerInforPartner(dealerInforBinding)}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="col">
              {/* Thông tin cá cược */}
              <div
                className="bxssitem bxttcc"
                data-box="cacuoc"
                style={{ width: "100%" }}
              >
                <div className="bxinner" style={{ paddingTop: "0" }}>
                  <div className="sstitle_step">Thông tin cá cược</div>
                  <div className="bxttinner">
                    <table>
                      <tr>
                        <td>Mức cược thấp nhất</td>
                        <td>{dealerInforBinding?.di_lowest_bet}</td>
                      </tr>
                      <tr>
                        <td>Mức cược tối đa</td>
                        <td>{dealerInforBinding?.di_highest_bet}</td>
                      </tr>
                      <tr>
                        <td>Tỉ lệ cược</td>
                        <td>{dealerInforBinding?.di_odds}</td>
                      </tr>
                      <tr>
                        <td>Loại kèo</td>
                        <td>
                          <span>{dealerInforBinding?.di_bets}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Tiền tệ</td>
                        <td>{dealerInforBinding?.di_currency?.toString()}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider" />
          {/* Ưu điểm nhược điểm */}
          <div className="row" style={{ display: "flex" }}>
            <div className="col">
              {" "}
              {/* Ưu điểm */}
              <div
                className="bxssitem bxuu"
                data-box="bxuu"
                style={{ height: "auto" }}
              >
                <div className="bxinner">
                  <div className="sstitle_step">Ưu điểm</div>
                  <div
                    className="bxbo_tt_inner bxlist bxpad20"
                    style={{ padding: "0" }}
                  >
                    <ul>{getDealerInforAdvantages(dealerInforBinding)}</ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              {/* Nhược điểm */}
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
            </div>
          </div>
          {/* nạp rút tiền */}

          <div className="row" style={{ display: "flex" }}>
            <div className="col">
              {/* Nạp tiền */}
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
            </div>
            <div className="col">
              {" "}
              {/* rút tiền */}
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
            </div>
          </div>
          {/* dịch vụ */}
          <div className="row" style={{ display: "flex" }}>
            <div className="col">
              {/* Dịch vụ khách hàng */}
              <div
                className="bxssitem bxdvkh"
                data-box="service"
                style={{ height: "421.625px" }}
              >
                <div className="bxinner">
                  <div className="sstitle_step">Dịch vụ khách hàng</div>
                  {/* <div className="bxbbaner"></div> */}
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
            </div>
            <div className="col">
              {/* Thông tin hệ thống */}
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
                            {/* <span
                              className="imgl"
                              style={{
                                backgroundImage:
                                  "url(https://topnhacai.b-cdn.net/vietnam.png)",
                                backgroundPosition: " center center ",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                              title="Tiếng Việt"
                            ></span> */}
                            {dealerInforBinding?.di_languages?.toString()}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Nền tảng</td>
                        <td>Web, Mobile</td>
                      </tr>
                      <tr>
                        <td>Ứng dụng di động</td>
                        <td>
                          {dealerInforBinding?.di_mobile_applications?.toString()}
                        </td>
                      </tr>
                      <tr>
                        <td>Ứng dụng máy tính</td>
                        <td>
                          {" "}
                          {dealerInforBinding?.di_web_applications?.toString()}
                        </td>
                      </tr>
                      <tr>
                        <td>Xem bóng đá trực tuyến</td>
                        <td>
                          {dealerInforBinding?.di_live_soccer?.toString()}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Link khuyến mãi */}
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

          {/* Hệ thống trò chơi */}
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
        </div>
      </div>
    </div>
  );
};

export default Infor;
