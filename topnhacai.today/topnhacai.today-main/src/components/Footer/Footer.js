/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";
import Link from "next/link";
import { faFacebook, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
Footer.propTypes = {};

function Footer(props) {
  const { data, error } = useSWR(
    `${process.env.api_topnhacai}/linkFooters/getAll`,
    fetcher
  );
  const linkList = () => {
    var result = null;
    if (data && data.length > 0) {
      result = data.map((item, index) => {
        return (
            <li
              key={index}
              id="menu-item-287"
              className="note note-hot menu-item menu-item-type-custom menu-item-object-custom menu-item-287"
            >
              <a rel="nofollow" target="_blank" href={item.link}>{item.name}</a>
            </li>
        );
      });
      return result;
    }
  };
  return (
    <div
      id="footer-outer"
      data-midnight="light"
      data-cols="4"
      data-custom-color="true"
      data-disable-copyright="false"
      data-matching-section-color="false"
      data-copyright-line="false"
      data-using-bg-img="false"
      data-bg-img-overlay="1.0"
      data-full-width="false"
      data-using-widget-area="true"
      data-link-hover="default"
    >
      <div id="footer-widgets" data-has-widgets="true" data-cols="4">
        <div className="container">
          <div className="row">
            <div className="col first span_3 one-fourths clear-both">
              <div id="media_image-2" className="widget widget_media_image">
                <Link href="">
                  <Image
                    data-lazyloaded="1"
                    src="https://topnhacai.b-cdn.net/topnhacai.today.png?v=1655975658"
                    width={171}
                    height={65}
                    data-src="https://topnhacai.b-cdn.net/topnhacai.today.png?v=1655975658"
                    className="image wp-image-767  attachment-full size-full"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div id="text-2" className="widget widget_text">
                <div className="textwidget">
                  <p className="font-14">
                    Topnhacai.today cung cấp cho người xem những bài đánh giá về 
                    các nhà cái online. Dựa trên kinh nghiệm hơn 10 năm trong lĩnh
                     vực cá cược trực tuyến, chúng tôi sẽ cung cấp đầy đủ các thông
                     tin một cách khách quan nhất, đầy đủ và chính xác nhất. Chúng
                     tôi cũng cung cấp các công cụ hỗ trợ phục vụ người chơi trong
                     ngành cá cược một cách hoàn toàn miễn phí.
                  </p>
                </div>
              </div>
            </div>
            <div className="col third span_3 one-fourths clear-both">
              <div id="text-3" className="widget widget_text">
                <h4>CHỦ ĐỀ NỔI BẬT</h4>
                <div className="textwidget"></div>
              </div>
              <div id="nav_menu-4" className="widget widget_nav_menu">
                <div className="menu-widget-congcuhuongdan-container">
                  <ul id="menu-widget-congcuhuongdan" className="menu" style={{marginLeft: "0 !important"}}>
                    <li
                      id="menu-item-14127"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14127"
                    >
                      <Link href="/nhan-dinh-bong-da">
                      <a rel="nofollow">Nhận định bóng đá</a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-22618"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22618"
                    >
                      <Link href="/nha-cai-uy-tin">
                      <a rel="nofollow">Nhà cái uy tín</a>  
                      </Link>
                    </li>
                    <li
                      id="menu-item-14128"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14128"
                    >
                      <Link href="/tip-bong-da">
                      <a rel="nofollow">Tip bóng đá</a>
                       </Link>
                    </li>
                    <li
                      id="menu-item-51162"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51162"
                    >
                      <Link href="/thu-vien-ca-cuoc">
                        <a rel="nofollow">Thư viện cá cược</a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-14126"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14126"
                    >
                      <Link href="/gai-xinh">
                        <a rel="nofollow">Gái xinh</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col fourth span_3 one-fourths right-edge">
              <div id="text-5" className="widget widget_text">
                <h4>GIỚI THIỆU</h4>
                <div className="textwidget"></div>
              </div>
              <div id="nav_menu-6" className="widget widget_nav_menu">
                <div className="menu-widget-thongtin-container">
                  <ul id="menu-widget-thongtin" className="menu" style={{marginLeft: "0 !important"}}>
                    {/* <li
                      id="menu-item-306"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-306"
                    >
                      <Link href="/ve-chung-toi">
                      <a rel="nofollow">Về chúng tôi</a>
                        
                      </Link>
                    </li> */}
                    <li
                      id="menu-item-306"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-306"
                    >
                      <Link href="/gioi-thieu-top-nha-cai-today-bach-khoa-toan-thu-cua-cuoc-thu">
                      <a rel="nofollow">Giới thiệu</a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-2145"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-308"
                    >
                      <Link href="/chinh-sach-bao-mat-cua-top-nha-cai">Chính sách bảo mật</Link>
                    </li>
                    <li
                      id="menu-item-2145"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-308"
                    >
                      <Link href="/dieu-khoan-va-dieu-kien-cua-top-nha-cai">Điều khoản sử dụng</Link>
                    </li>
                    <li
                      id="menu-item-2145"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-308"
                    >
                      <Link href="/ve-chung-toi-top-nha-cai-today-nguoi-ban-cua-cuoc-thu">Liên hệ</Link>
                    </li>
                     
                    <li
                      id="menu-item-308"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-308"
                    >
                      <Link href="/post-sitemap.xml">
                        <a rel="nofollow">Sitemap</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col first span_3 one-fourths clear-both">
              <div id="media_image-2" className="widget widget_media_image">
                <h4>THÔNG TIN LIÊN HỆ</h4>
                <div className="textwidget"></div>
              </div>
              <div id="nav_menu-6" className="widget widget_nav_menu">
                <div className="menu-widget-thongtin-container">
                <span>
                
                Địa chỉ: 226 P. Vĩnh Hưng, Vĩnh Hưng, Hoàng Mai, Hà Nội
                EMAIl : topnhacaitoday@okvip.com
                </span>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14900.160413585352!2d105.8794515!3d20.9910295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aea64e37dc31%3A0x5a57d84c15ee29e1!2stopnhacai.today!5e0!3m2!1svi!2s!4v1684762298568!5m2!1svi!2s" width={320} height={250} style={{marginTop: '20px', maxWidth: '140%'}}/>
                </div>
              </div>
            </div>
            {/* <div className="col first span_4 one-fourths clear-both">
              
              </div> */}
          </div>
          <div className="row row-custom-widget">
            <div className="col-12 span_12 custom-noice">
              <div id="text-11" className="widget widget_text">
                <div className="textwidget">
                  <p>
                    <Image
                      data-lazyloaded="1"
                      src="https://cdn.topnhacai.today/Layer-875.png?v=16559756591"
                      className="aligncenter size-full wp-image-309"
                      data-src="https://cdn.topnhacai.today/Layer-875.png?v=16559756591"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </p>
                </div>
              </div>
              <div id="media_gallery-4" className="widget widget_media_gallery">
                <div
                  id="gallery-1"
                  className="gallery galleryid-134 gallery-columns-3 gallery-size-thumbnail"
                >
                  <dl className="gallery-item">
                    <dt className="gallery-icon landscape">
                      {/* <Link 
                      href="www.dmca.com/Protection/Status.aspx?ID=71ca1848-8f0f-415c-ad13-fb8b4508da1f" 
                      title="DMCA.com Protection Status"> 
                        <Image 
                          src ="https://images.dmca.com/Badges/_dmca_premi_badge_3.png?ID=71ca1848-8f0f-415c-ad13-fb8b4508da1f"  
                          data-src="https://images.dmca.com/Badges/_dmca_premi_badge_3.png?ID=71ca1848-8f0f-415c-ad13-fb8b4508da1f"
                          width="54"
                          height="40"
                          alt="DMCA.com Protection Status" />
                    </Link>  */}
                      <a
                        href="//www.dmca.com/Protection/Status.aspx?ID=71ca1848-8f0f-415c-ad13-fb8b4508da1f"
                        title="DMCA.com Protection Status"
                        rel="nofollow" target="_blank"
                      >
                          <Image
                          data-lazyloaded="1"                          
                          src="https://images.dmca.com/Badges/_dmca_premi_badge_3.png?ID=71ca1848-8f0f-415c-ad13-fb8b4508da1f"
                          style={{ boerdr: "none" }}
                          alt="DMCA.com Protection Status"
                          width="54"
                          height="40"
                        />
                      </a>
                    </dt>
                  </dl>
                  <dl className="gallery-item">
                    <dt className="gallery-icon landscape">
                      <Image
                        data-lazyloaded="1"
                        src="https://cdn.topnhacai.today/Vector-Smart-Object6.png?v=16559756591"
                        width="54"
                        height="40"
                        data-src="https://cdn.topnhacai.today/Vector-Smart-Object6.png?v=16559756591"
                        className="attachment-thumbnail size-thumbnail"
                        alt=""
                      />
                    </dt>
                  </dl>
                  <dl className="gallery-item">
                    <dt className="gallery-icon landscape">
                      <Image
                        data-lazyloaded="1"
                        src="https://cdn.topnhacai.today/Vector-Smart-Object7.png?v=16559756591"
                        width="94"
                        height="40"
                        data-src="https://cdn.topnhacai.today/Vector-Smart-Object7.png?v=16559756591"
                        className="attachment-thumbnail size-thumbnail"
                        alt=""
                      />
                    </dt>
                  </dl>
                  <dl className="gallery-item">
                    <dt className="gallery-icon landscape">
                      <Image
                        data-lazyloaded="1"
                        src="https://cdn.topnhacai.today/Vector-Smart-Object8.png?v=16559756591"
                        width="137"
                        height="44"
                        data-src="https://cdn.topnhacai.today/Vector-Smart-Object8.png?v=16559756591"
                        className="attachment-thumbnail size-thumbnail"
                        alt=""
                      />
                    </dt>
                  </dl>
                  <br style={{ clear: "both" }} />
                </div>
              </div>
              <div id="text-12" className="widget widget_text">
                <div className="textwidget">
                  <p>
                    Cảnh báo : Bạn cần đủ 18 tuổi trở lên để tham gia cá cược
                    trực tuyến. Hãy chơi có trách nhiệm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row" id="copyright" data-layout="default">
        <div className="container">
          <div className="col span_5">
            <div className="copyright-text-ft">
              <p>Copyright © 2021 | All rights reserved by topnhacai.today</p>
            </div>
          </div>
          <div className="col span_7 col_last">
            <div className="menu-copyright">
              <div className="menu-menu-copyrights-container">
                <ul id="copyright-menu" className="nav navbar-nav">
                  <li
                    id="menu-item-2145"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-2145"
                  >
                    <Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
                  </li>
                  <li
                    id="menu-item-2146"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2146"
                  >
                    <Link href="/dieu-khoan-va-dieu-kien">
                      Điều khoản và điều kiện
                    </Link>
                  </li>
                  <li
                    id="menu-item-2148"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2148"
                  >
                    <Link href="/lien-he">Liên hệ </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Footer;
