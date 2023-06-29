import React, { useState } from "react";
import style from "../../../style/HeaderOptionRes.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

function HeaderOptionRes() {
  const [isCollapse, setIsCollapse] = useState("none");
  const handleCollapse = () => {
    isCollapse == "none" ? setIsCollapse("block") : setIsCollapse("none");
  };
  return (
    <div className={style.main_div_for_res_nav_opt}>
      <div onClick={handleCollapse} className={style.collapse_btn_div}>
        <div>
          <button className={style.collapse_button}>Ipsum</button>
        </div>
        <div>
          <div style={{ display: isCollapse == "none" ? "block" : "none" }}>
            <AiFillCaretDown fontSize={23} color="#003057" />
          </div>
          <div style={{ display: isCollapse }}>
            <AiFillCaretUp fontSize={23} color="#003057" />
          </div>
        </div>
      </div>

      <div
        className={style.header_option_main_div}
        style={{ display: isCollapse }}
      >
        <div>
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
        <div>
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
    </div>
  );
}

export default HeaderOptionRes;
