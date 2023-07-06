import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown, faChevronRight, faLink, faChevronUp);
function ListRateComponent(props) {
  var { dealer } = props;

  return (
    <div className="bxitem">
    <div className="bxtitle">
      <p>{dealer.dealer_name}</p>
    </div>
    <div className="logo">
      <div className="lginner">
      <Link href={dealer.dealer_link[0]} className="seoquake-nofollow">
        <a>
          <Image
            data-lazyloaded="1"
            src={dealer.dealer_image}
            data-src={dealer.dealer_image}
            width="89"
            height="28"
            title={dealer.dealer_name}
            alt=""
            data-ll-status="loaded"
            className="entered litespeed-loaded"
            style={{ objectFit: "cover" }}
          />
        </a>
      </Link>
      </div>
    </div>
    <div className="bxlink_pc">
      <div className="bxlinkit link_0">
        <Link href={dealer.dealer_link[0]} rel="nofollow">
          <a>
            <FontAwesomeIcon icon={["fas", "fa-link"]} />
            Link 1
          </a>
        </Link>
      </div>
      <div className="bxlinkit link_1">
        <Link href={dealer.dealer_link[0]} rel="nofollow">
          <a>
            <FontAwesomeIcon icon={["fas", "fa-link"]} />
            Link 2
          </a>
        </Link>
      </div>
      <div className="bxlinkit link_2">
        <Link href={dealer.dealer_link[0]} rel="nofollow">
          <a>
            <FontAwesomeIcon icon={["fas", "fa-link"]} />
            Link 3
          </a>
        </Link>
      </div>
      <div className="bxlinkit link_3">
        <Link href={dealer.dealer_link[0]} rel="nofollow">
          <a>
            <FontAwesomeIcon icon={["fas", "fa-link"]} />
            Link 4
          </a>
        </Link>
      </div>
    </div>
    <div className="bxchitiet">
      <Link href={dealer.dealer_link[0]}>
        <a>
          Xem chi tiết
          <FontAwesomeIcon
            icon={["fas", "fa-chevron-right"]}
            style={{ marginLeft: "5px", fontSize: "10px" }}
          />{" "}
        </a>
      </Link>
    </div>
  </div>
  );
}


function LinkList(props) {
  const [active, setActive] = useState(false);
  const showDealerList = () => {
    var result = null;
    var { data } = props;
    if (data) {
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
    <>
    
      <div className="bxss bxrate_list pad0">
        <div className="bxinner">
          <div className="pad0_20 lists_rate">
            <div className="bxlinkvaonc bxmainviewmore">
            <div className="bxlist_nhacai" data-vbshow="5">
                <div className="bxinner">{showDealerList()}</div>
                
            </div>
              <div className="bxlinkall ">
                <Link href="" scroll={false}>
                  <a onClick={() => setActive(!active)}>
                    {!active ? `XEM THÊM` : `THU GỌN`}{" "}
                    {!active ? (
                      <FontAwesomeIcon
                        icon={["fas", "fa-chevron-down"]}
                        style={{ marginLeft: "5px" }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={["fas", "fa-chevron-up"]}
                        style={{ marginLeft: "5px" }}
                      />
                    )}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
   

    </>
  );
}

export default LinkList;
