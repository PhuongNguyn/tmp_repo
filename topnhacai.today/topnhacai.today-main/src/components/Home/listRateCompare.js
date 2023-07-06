import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
function ListRateComponent(props) {
  var { dealer, stt } = props;

  const showTag = (tags) => {
    var tag = null;
    if (tags.length > 0) {
      tag = tags.map((tag, index) => {
        return (
          <span className="ttn" key={index}>
            <FontAwesomeIcon icon={["fas", "fa-check"]} /> {tag}
          </span>
        );
      });
    }
    return tag;
  };
  return (
    <div className="field_item">
      <div
        id="bxsl_img_nc1"
        // data_name="nc1"
        className="bxcs_select_img"
      >
        <div className="bxshow_dropdown">
          <button className="bximg_selected">
            <span>
              <Image
                src={dealer.dealer_image}
                data-src={dealer.dealer_image}
                width="89"
                height="28"
                title={dealer.dealer_name}
                alt=""
                data-ll-status="loaded"
                className="entered litespeed-loaded"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ListRate(props) {
  const [active, setActive] = useState(false);
  const showDealerList = () => {
    var result = null;
    var { data } = props;
    if (data.length > 0) {
      result = data.map((dt, index) => {
        if (!active) {
          if (index < 5) {
            return (result = (
              <ListRateComponent dealer={dt} key={index} stt={index} />
            ));
          }
        } else {
          return (result = (
            <ListRateComponent dealer={dt} key={index} stt={index} />
          ));
        }
      });
    }
    return result;
  };
  return (
    <div className="bxallfield compare">
      {showDealerList()}
      {/* <div className="field_item">
        <div id="bxsl_img_nc1"
          data_name="nc1"
          className="bxcs_select_img">
          <div className="bxshow_dropdown">
            <button className="bximg_selected">
              <span>
                <Image
                  src="https://topnhacai.b-cdn.net/logo-789.png"
                  width="89"
                  height="28"
                  objectFit="contain"
                  alt="789Bet"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="field_item">
        <div id="bxsl_img_nc2"
          data_name="nc2"
          className="bxcs_select_img">
          <div className="bxshow_dropdown">
          <button className="bximg_selected">
              <span>
                <Image
                  src="https://topnhacai.b-cdn.net/logo-new88.png"
                  width="89"
                  height="28"
                  objectFit="contain"
                  alt="789Bet"
                />
              </span>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ListRate;
