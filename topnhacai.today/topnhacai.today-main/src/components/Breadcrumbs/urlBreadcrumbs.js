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
  /* console.log("28 breadcrumbs " + JSON.stringify(props)); */
  return (
    <>
      <p id="breadcrumbs" className="yoast">
        <span>
          <span>
            <Link href="/">Top Nhà Cái</Link>
            <FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{margin: "0 10px"}} />
              <a
                href={`/` + props.breadTitle.post_taxid[0].tax_slug + `/`}
                title={`/` + props.breadTitle.post_taxid[0].tax_name + `/`}
                rel="dofollow"
              ><span className="breadcrumb_last" aria-current="page">
              {props.breadTitle.post_taxid[0].tax_name}
            </span></a>
            <FontAwesomeIcon icon={["fas", "fa-chevron-right"]} style={{margin: "0 10px"}} />
            {/* <Link href="/ props.breadTitle.post_title">{props.breadTitle.post_title}</Link> */}
            <span className="breadcrumb_last" aria-current="page">
              {props.breadTitle.post_title}
            </span>
          </span>
        </span>
      </p>
    </>
  );
}

export default Breadcrumbs;
