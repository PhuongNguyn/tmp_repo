import React from "react";
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
import CompareDealerSlot from "../CompareDealerSlot";

library.add(faChevronDown, faChevronRight, faLink, faChevronUp);

function CompareDealers(props) {
  return (
    <div className="marg_0030 pad0_20 bxformss bxflex_mg">
      <div className="bxnc_contain bxw50 col1">
        <CompareDealerSlot
          dealers={props.dealers}
          valueDefault={props.dealers[0]}
        />
      </div>
      <div className="bxnc_contain bxw50 col2">
        <CompareDealerSlot
          dealers={props.dealers}
          valueDefault={props.dealers[1]} 
        />
      </div>
    </div>
  );
}

export default CompareDealers;
