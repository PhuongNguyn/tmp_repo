import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// import Loading from "../../components/Loading";

// import "bootstrap/dist/css/bootstrap.min.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    padding: "0px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  },
};

Modal.setAppElement("#__next");

function convertNameCompany(id) {
  switch (id) {
    case "1":
      return "Macauslot";
      break;
    case "3":
      return "Crown";
      break;
    case "4":
      return "Ladbrokes";
      break;
    case "7":
      return "SNAI";
      break;
    case "8":
      return "Bet365";
      break;
    case "9":
      return "William Hill";
      break;
    case "12":
      return "Easybets";
      break;
    case "14":
      return "Vcbet";
      break;
    case "17":
      return "Mansion88";
      break;
    case "19":
      return "Interwette";
      break;
    case "22":
      return "10BET";
      break;
    case "23":
      return "188bet";
      break;
    case "24":
      return "12bet";
      break;
    case "31":
      return "Sbobet";
      break;
    case "35":
      return "Wewbet";
      break;
    case "42":
      return "18bet";
      break;
    case "47":
      return "Pinnacle";
      break;
    case "48":
      return "HK Jockey Club";
      break;
    default:
      return "";
    // code block
  }
}

function ModalOdds(props) {
  const [modalIsOpen, setIsOpen] = useState();
  const [loading, setLoading] = useState(false);
  const [dataOdds, setDataOdds] = useState({});

  useEffect(() => {
    props.isOpen ? setIsOpen(true) : setIsOpen(false);
    const fetchData = async () => {
      setLoading(true);
      const dataOdds = await fetch(
        `${process.env.api_isports}/preAndInMainOdds?matchIds=${props.data.matchId}`
      )
        .then((res) => (res ? res.json() : null))
        .then((data) => {
          return data.data.overUnder;
        });

      setLoading(false);
      setDataOdds(dataOdds);
    };
    fetchData();
  }, [props.data.matchId]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setDataOdds({});
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <span className="modalClose" onClick={closeModal}>
          x
        </span>
        <table
          className="eTable"
          width="100%"
          border="0"
          cellSpacing="0"
          cellPadding="0"
        >
          <tbody>
            <tr>
              <th colSpan="7" className="rl" style={{ fontSize: 14 }}>
                {`Tỉ lệ kèo trận đấu ${props.data.homeName} vs ${props.data.awayName}`}
              </th>
            </tr>
            <tr>
              <th rowSpan="2" className="rl">
                Nhà cái
              </th>
              <th width="36%" colSpan="3" className="rl">
                First
              </th>
              <th width="36%" colSpan="3" className="rl">
                Live
              </th>
            </tr>
            <tr>
              <th width="12%" className="rl">
                O
              </th>
              <th width="12%" className="rl">
                T
              </th>
              <th width="12%" className="rl">
                U
              </th>
              <th width="12%" className="rl">
                O
              </th>
              <th width="12%" className="rl">
                T
              </th>
              <th width="12%" className="rl">
                U
              </th>
            </tr>

            {loading ? (
              <tr>
                <th colSpan="7" className="rl">
                  Đang tải dữ liệu ...
                </th>
              </tr>
            ) : (
              dataOdds &&
              dataOdds.length > 0 &&
              dataOdds.map((item, index) => {
                var _item = item.split(",");
                if (index < 15)
                  return (
                    <tr align="center" key={index}>
                      <td className="rl CName">
                        {convertNameCompany(_item[1])}
                      </td>
                      <td className="live_odds_early">{_item[3]}</td>
                      <td className="live_odds_early pk">{_item[2]}</td>
                      <td className="live_odds_early rl">{_item[4]}</td>

                      <td
                        className={
                          _item[6] == _item[3]
                            ? ""
                            : _item[6] > _item[3]
                            ? "o-up oddUp"
                            : "o-down oddDown"
                        }
                      >
                        {_item[6]}
                      </td>
                      <td
                        className={
                          _item[5] == _item[2]
                            ? ""
                            : _item[5] > _item[2]
                            ? "o-up oddUp"
                            : "o-down oddDown"
                        }
                      >
                        {_item[5]}
                      </td>
                      <td
                        className={
                          _item[7] == _item[4]
                            ? ""
                            : _item[7] > _item[4]
                            ? "o-up oddUp"
                            : "o-down oddDown"
                        }
                      >
                        {_item[7]}
                      </td>
                    </tr>
                  );
              })
            )}

            {/* {dataOdds &&
              dataOdds.length > 0 &&
              dataOdds.map((item, index) => {
                var _item = item.split(",");
                if (index < 15)
                  return (
                    <tr align="center" key={index}>
                      <td className="rl CName">
                        {convertNameCompany(_item[1])}
                      </td>
                      <td className="live_odds_early">{_item[3]}</td>
                      <td className="live_odds_early pk">{_item[2]}</td>
                      <td className="live_odds_early rl">{_item[4]}</td>

                      <td
                        className={
                          _item[6] == _item[3]
                            ? ""
                            : _item[6] > _item[3]
                            ? "o-up oddUp"
                            : "o-down oddDown"
                        }
                      >
                        {_item[6]}
                      </td>
                      <td
                        className={
                          _item[5] == _item[2]
                            ? ""
                            : _item[5] > _item[2]
                            ? "o-up oddUp"
                            : "o-down oddDown"
                        }
                      >
                        {_item[5]}
                      </td>
                      <td
                        className={
                          _item[7] == _item[4]
                            ? ""
                            : _item[7] > _item[4]
                            ? "o-up oddUp"
                            : "o-down oddDown"
                        }
                      >
                        {_item[7]}
                      </td>
                    </tr>
                  );
              })} */}

            {/* 
            <tr align="center">
              <td className="rl CName">Sbobet</td>
              <td className="live_odds_early">0.80</td>
              <td className="live_odds_early pk">3</td>
              <td className="live_odds_early rl">0.90</td>
              <td className="o-up oddUp">2.38</td>
              <td className="o-up oddUp">3.5</td>
              <td className="o-down oddDown rl">0.12</td>
            </tr>

            <tr align="center">
              <td className="rl CName">Crown</td>
              <td className="live_odds_early">0.80</td>
              <td className="live_odds_early pk">3</td>
              <td className="live_odds_early rl">0.90</td>
              <td className="o-up oddUp">3.12</td>
              <td className="o-up oddUp">3.5</td>
              <td className="o-down oddDown rl">0.02</td>
            </tr>

            <tr align="center">
              <td className="rl CName">Bet365</td>
              <td className="live_odds_early">0.85</td>
              <td className="live_odds_early pk">3</td>
              <td className="live_odds_early rl">0.95</td>
              <td className="o-up oddUp">4.00</td>
              <td className="o-up oddUp">3.5</td>
              <td className="o-down oddDown rl">0.17</td>
            </tr>

            <tr align="center">
              <td className="rl CName">Easybet</td>
              <td className="live_odds_early">0.82</td>
              <td className="live_odds_early pk">3</td>
              <td className="live_odds_early rl">0.96</td>
              <td className="o-up oddUp">3.20</td>
              <td className="o-up oddUp">3.5</td>
              <td className="o-down oddDown rl">0.16</td>
            </tr>

            <tr align="center">
              <td className="rl CName">Vcbet</td>
              <td className="live_odds_early">0.80</td>
              <td className="live_odds_early pk">3</td>
              <td className="live_odds_early rl">0.91</td>
              <td className="o-up oddUp">0.85</td>
              <td className="o-down oddDown">2.5</td>
              <td className="o-down oddDown rl">0.89</td>
            </tr>

            <tr align="center">
              <td className="rl CName">Mansion88</td>
              <td className="live_odds_early">0.78</td>
              <td className="live_odds_early pk">3</td>
              <td className="live_odds_early rl">0.92</td>
              <td className="o-up oddUp">3.33</td>
              <td className="o-up oddUp">3.5</td>
              <td className="o-down oddDown rl">0.06</td>
            </tr>

            <tr align="center">
              <td className="rl CName">10BET</td>
              <td className="live_odds_early">0.84</td>
              <td className="live_odds_early pk">3</td>
              <td className="live_odds_early rl">0.95</td>
              <td className="o-up oddUp">8.05</td>
              <td className="o-up oddUp">3.5</td>
              <td className="o-down oddDown rl">0.04</td>
            </tr>

            <tr align="center">
              <td className="rl CName">188bet</td>
              <td className="live_odds_early">0.80</td>
              <td className="live_odds_early pk">3</td>
              <td className="live_odds_early rl">0.90</td>
              <td className="o-up oddUp">3.22</td>
              <td className="o-up oddUp">3.5</td>
              <td className="o-down oddDown rl">0.01</td>
            </tr>

            <tr align="center">
              <td className="rl CName">12bet</td>
              <td className="live_odds_early">0.78</td>
              <td className="live_odds_early pk">3</td>
              <td className="live_odds_early rl">0.92</td>
              <td className="o-up oddUp">3.33</td>
              <td className="o-up oddUp">3.5</td>
              <td className="o-down oddDown rl">0.06</td>
            </tr>

            <tr align="center">
              <td className="rl CName">wewbet</td>
              <td className="live_odds_early">0.82</td>
              <td className="live_odds_early pk">3</td>
              <td className="live_odds_early rl">0.91</td>
              <td className="o-up oddUp">3.23</td>
              <td className="o-up oddUp">3.5</td>
              <td className="o-down oddDown rl">0.03</td>
            </tr>

            <tr align="center">
              <td className="rl CName">18Bet</td>
              <td className="live_odds_early">0.81</td>
              <td className="live_odds_early pk">3</td>
              <td className="live_odds_early rl">0.91</td>
              <td className="o-up oddUp">2.82</td>
              <td className="o-up oddUp">3.5</td>
              <td className="o-down oddDown rl">0.20</td>
            </tr>

            <tr align="center">
              <td className="rl CName">Ladbrokes</td>
              <td className="live_odds_early">0.50</td>
              <td className="live_odds_early pk">2.5</td>
              <td className="live_odds_early rl">1.40</td>
              <td className="o-up oddUp">0.75</td>
              <td className="pk">2.5</td>
              <td className="o-down oddDown rl">0.95</td>
            </tr>

            <tr align="center">
              <td className="rl CName">pinnacle</td>
              <td className="live_odds_early">0.80</td>
              <td className="live_odds_early pk">3</td>
              <td className="live_odds_early rl">0.92</td>
              <td className="o-up oddUp">2.22</td>
              <td className="o-up oddUp">3.5</td>
              <td className="o-down oddDown rl">0.30</td>
            </tr> */}

            {/* <tr>
              <td colSpan="8">
                <span className="o-up">odds rate increases</span>
                <span className="splitbar">|</span>
                <span className="o-down">odds rate decreases</span>
              </td>
            </tr> */}
          </tbody>
        </table>
      </Modal>
    </div>
  );
}

export default ModalOdds;
