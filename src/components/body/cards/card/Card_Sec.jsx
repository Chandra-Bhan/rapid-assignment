import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import style from "../../../../style/Card_Sec.module.css";

function Card_Sec() {
  return (
    <div className={style.card_sec_container_div}>
      <div className={style.card_sec_heading_con}>
        <hr className={style.card_sec_line} />
        <h3>Esse aliquip do, magni!</h3>
      </div>
      <div>
        <div className={style.card_sec_shopping_links}>
          <RiShoppingCartFill /> Lorem
        </div>
      </div>
    </div>
  );
}

export default Card_Sec;
