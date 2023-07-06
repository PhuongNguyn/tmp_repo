import React from "react";

function Form(props) {
  return (
    <div className="bxss gtvaobo pad0">
      <div className="bxinner">
        <div className="bxng_danhgia pad0_20">
          <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
      </div>
    </div>
  );
}

export default Form;
