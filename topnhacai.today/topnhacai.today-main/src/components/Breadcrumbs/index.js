import React from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGift,
  faCheck,
  faStar,
  faChevronRight,
  faChevronDown,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
library.add(
    fab,
    faGift,
    faCheck,
    faStar,
    faChevronRight,
    faChevronDown,
    faRefresh
  );
  
Breadcrumbs.propTypes = {};

function Breadcrumbs(props) {
  return (
    <>
      <p id="breadcrumbs" className="yoast">
        <span>
          <span>
            <Link href="/">Top Nhà Cái</Link>
            <FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{margin: "0 10px"}} />
            <span className="breadcrumb_last" aria-current="page">
              {props.breadTitle}
            </span>
          </span>
        </span>
      </p>
    </>
  );
}

export default Breadcrumbs;
