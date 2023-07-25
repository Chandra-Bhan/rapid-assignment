import React from "react";
import style from "../../../style/Section3.module.css";
import { BsLink45Deg } from "react-icons/bs";

function Section3() {
  return (
    <div className={style.section3_main_div}>
      <div className={style.section3_div1}>
        <img
          className={style.section3_div1_image}
          src="https://good-wallpapers.com/wallpapers/27320/mountains_%20hill_%20and%20a%20river%20_reflectance_%20_good-wallpapers.com_.jpg"
          // src="https://wallpapercrafter.com/desktop2/805731-Argentina-Bariloche-clouds-forest-Hill-house.jpg"
        />
        <div className={style.section3_left_img_link}>
          <div className={style.section3_div}>
            <span className={style.section3_img}>
              <BsLink45Deg />
            </span>
            Ipsum Lorem
          </div>
          <div className={style.section3_div}>
            <span className={style.section3_img}>
              <BsLink45Deg />
            </span>
            Ipsum Lorem
          </div>
          <div className={style.section3_div}>
            <span className={style.section3_img}>
              <BsLink45Deg />
            </span>
            Ipsum Lorem
          </div>
        </div>
      </div>
      <div className={style.section3_nested_div}>
        <div className={style.section3_div2}>
          <p className={style.section3_div2_head1}>
            Numquam.{" "}
            <span className={style.section3_small_heading1}>
              Esse aliquip do, magni.
            </span>
          </p>
          <h3 className={style.section3_div2_head2}>Minima ad for vitae sit</h3>
          <a className={style.section3_link1} href="#">
            Ipsum Lorem
          </a>
        </div>
        <div className={style.section3_div2_img_div}>
          <img
            className={style.section3_div2_image}
            src="https://edge.mwallpapers.com/photos/celebrities/hd-wallpapers/panoramic-tree-mountain-panoramic-view-horizontal-plane-field-hill-android-iphone-hd-wallpaper-background-downloadhd-wallpapers-desktop-background-android-iphone-1080p-4k-gxwj3.jpg"
            width={750}
            height={200}
          />
        </div>
        <div className={style.section3_div2_footer}>
          <div className={style.section3_div2_footer_btn}>
            <span className={style.section3__footer_img}>
              <BsLink45Deg />
            </span>
            Ipsum Lorem
          </div>
          <div className={style.section3_div2_paragraph}>
            Adipisicing unde vel so dolore,{" "}
            <div className={style.section3_div_paragraph}>consequatur.</div>
          </div>
          <div className={style.section3_link1_div}>
            <a className={style.section3_link1} href="#">
              Ipsum Lorem
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
