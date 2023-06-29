import React from "react";
import style from "../../style/Footer.module.css";
import FooterMenuSection from "./footer_menu/FooterMenuSection";

function Footer() {
  return (
    <div>
      <div>
        <FooterMenuSection />
      </div>
      <div className={style.footer}>
        <h2 className={style.footer_heading}>Minima ad for vitae sit</h2>
        <div className={style.footer_para}>
          Numquam, Esse aliquip do, magni.
        </div>
        <div className={style.footer_para}>
          Aut proident and voluptate sunt quisquam so voluptate nemo
        </div>
      </div>
    </div>
  );
}

export default Footer;
