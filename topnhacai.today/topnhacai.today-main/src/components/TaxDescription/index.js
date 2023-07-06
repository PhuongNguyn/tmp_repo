import React, { useEffect } from "react";

function TaxDescription(props) {
  const createMarkup = () => {
    return { __html: props.Tax.taxDescription };
  };
  useEffect(() => {
    document.getElementById("tax-description").querySelectorAll("a")?.forEach(item => {
      item.setAttribute("rel", "nofollow")
      item.setAttribute("target", "_blank")
    })
  },[])
  return (
    <div className="bxss sstop">
      <div className="bxinner">
        <h1>{props.Tax.taxTitle}</h1>
        <div className="des">
          <div id="tax-description" dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
      </div>
    </div>
  );
}

export default TaxDescription;
