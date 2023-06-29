import React from "react";
import style from "../../../style/HeaderOptions.module.css";

function HeaderOptions({ visible }) {
  return (
    <div style={{ display: visible }} className={style.header_option_main_div}>
      <div className={style.header_option_main_div_nested}>
        <p className={style.header_opt_heading}>Ipsum Lorem</p>
        <ul className={style.header_opt_ul}>
          <li className={style.header_opt_li}>
            <a href="#">Link</a>
          </li>
          <li className={style.header_opt_li}>
            <a href="#">Link</a>
          </li>
          <li className={style.header_opt_li}>
            <a href="#">Link</a>
          </li>
          <li className={style.header_opt_li}>
            <a href="#">Link</a>
          </li>
          <li className={style.header_opt_li}>
            <a href="#">Link</a>
          </li>
        </ul>
      </div>
      <div className={style.header_option_main_div_nested}>
        <p className={style.header_opt_heading}>Ipsum Lorem</p>
        <ul className={style.header_opt_ul}>
          <li className={style.header_opt_li}>
            <a href="#">Link</a>
          </li>
          <li className={style.header_opt_li}>
            <a href="#">Link</a>
          </li>
          <li className={style.header_opt_li}>
            <a href="#">Link</a>
          </li>
          <li className={style.header_opt_li}>
            <a href="#">Link</a>
          </li>
          <li className={style.header_opt_li}>
            <a href="#">Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderOptions;
