import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as img from "./../../const/Image";

function AdsImage(props) {
  if(props.data)
  {
    var topLeft = {};
    props?.data && props?.data.forEach(element => {
      if(element.position === 'TopLeft'){
        topLeft = element;
      }
    });
   
    return (
      <article
        id="ctwidget_ads_nhacai-6"
        className="widget widget_ctwidget_ads_nhacai"
      >
        <div className="bxbannerads">
          <div className="bxinner">
            <a rel="noreferrer nofollow" target={'_blank'} href={topLeft?.link} className="seoquake-nofollow">
              <Image
                data-lazyloaded="1"
                src={topLeft?.image}
                data-src={topLeft?.image}
                width={331}
                height={275}
                alt=""
                data-ll-status="loaded"
                className="entered litespeed-loaded"
                style={{cursor : 'pointer'}}
              />
            </a>
          </div>
        </div>
      </article>
    );
  }else{
    return (
      <article
        id="ctwidget_ads_nhacai-6"
        className="widget widget_ctwidget_ads_nhacai"
      >
        <div className="bxbannerads">
          <div className="bxinner">
            <Link href="/" className="seoquake-nofollow">
              <Image
                src={img.ADS4}
                data-src={img.ADS4}
                width={331}
                height={275}
                alt=""
                data-ll-status="loaded"
                className="entered litespeed-loaded"
              />
            </Link>
          </div>
        </div>
      </article>
    );
  }
}

export default AdsImage;
