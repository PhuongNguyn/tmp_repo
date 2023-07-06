import React from "react";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// library.add(fab, faCheck, faMinus, faPlus);

function Content(props) {
  const createMarkup = () => {
    if (props.data && props.data.page_content) {
      return { __html: props.data.page_content };
    } else {
      return { __html: "loading..." };
    }
  };

  return (
    <div className="bxss gtvaobo pad0">
      <div className="bxinner">
        <div className="bxng_danhgia">
          <div className="bxndnd marg_0030 pad0_20">
            <div dangerouslySetInnerHTML={createMarkup()}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
