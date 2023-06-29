import React from "react";
import style from "../../../style/Section2.module.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsLink45Deg } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function Section2() {
  return (
    <div className={style.section2_main_div}>
      <div className={style.section2_heading}>
        Minim modi yet omnis nor qula so minima.
      </div>
      <div className={style.container_div_section2}>
        <div className={style.section2_div}>
          <span className={style.section2_img}>
            <HiOutlineMailOpen />
          </span>
          Ipsum Lorem
        </div>
        <div className={style.section2_div}>
          <span className={style.section2_img}>
            <BsLink45Deg />
          </span>
          Ipsum Lorem
        </div>
        <div className={style.section2_div}>
          <span className={style.section2_img}>
            <CiLocationOn />
          </span>
          Ipsum Lorem
        </div>
      </div>
    </div>
  );
}

export default Section2;
