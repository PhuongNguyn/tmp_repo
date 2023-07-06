import React from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import Faq from "react-faq-component";
import Loading from "../Loading";

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
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FaqTnc(props) {
  const { data: faqData, error: faqError } = useSWR(
    `${process.env.api_topnhacai}/faqs`,
    fetcher
  );
  if (faqData && faqError) return <div>Failed to load</div>;
  if (!faqData) {
    return <Loading />;
  }

  const data = {
    title: "Câu hỏi thường gặp",
    rows: faqData.map((faq) => {
      return { title: faq.faq_question, content: faq.faq_answer };
    }),
  };

  return (
    <>
      <div className="bxss gtvaobo pad0">
        <div className="bxinner">
          <div className="bxng_danhgia pad0_20">
            <Faq
              data={data}
              styles={{
                bgColor: "white",
                titleTextColor: "#48482a",
                rowTitleColor: "#78789a",
                rowTitleTextSize: "large",
                rowTitlePadding: "10px",
                rowContentColor: "#48484a",
                rowContentTextSize: "16px",
                rowContentPaddingTop: "10px",
                rowContentPaddingBottom: "10px",
                rowContentPaddingLeft: "10px",
                rowContentPaddingRight: "10px",
                arrowColor: "black",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqTnc;
