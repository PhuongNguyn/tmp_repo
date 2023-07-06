import React, { useEffect } from "react";
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

  // const compareId1 = props.compareId1;
  // const compareId2 = props.compareId2;
  // let dealer1 = props.dealers[0];
  // let dealer2 = props.dealers[1];
  // if(compareId1 && compareId2) {
  //   dealer1 = props.dealers.find(item => item._id == compareId1);
  //   dealer2 = props.dealers.find(item => item._id == compareId2);
  // }
  // console.log(compareId1,dealer1);
  // useEffect(() => {
  //   dealer1 = props.dealers.find(item => item._id == compareId1);
  //   dealer2 = props.dealers.find(item => item._id == compareId2);
  // }, []);

  const compareId1 = props.compareId1;
  const compareId2 = props.compareId2;
  let dealer1 = props.dealers.find(item => item._id == compareId1);
  let dealer2 = props.dealers.find(item => item._id == compareId2);
  if(!compareId1)
    return<>Loading</>
  else{
  return (
    <div className="marg_0030 pad0_20 bxformss bxflex_mg">
      <div className="bxnc_contain bxw50 col1">
        <CompareDealerSlot
          dealers={props.dealers}
          valueDefault={dealer1}  
        />
      </div>
      <div className="bxnc_contain bxw50 col2">
        <CompareDealerSlot
          dealers={props.dealers}
          valueDefault={dealer2}
        />
      </div>
    </div>
  );
  }
}

export default CompareDealers;
