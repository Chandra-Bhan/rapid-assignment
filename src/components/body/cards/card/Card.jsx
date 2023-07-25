import React, { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import style from "../../../../style/Card.module.css";

function Card() {
  return (
    <div className={style.card}>
      <img
        className={style.card_img}
        // src="https://wallpapercrafter.com/desktop2/805731-Argentina-Bariloche-clouds-forest-Hill-house.jpg"
        src="https://good-wallpapers.com/wallpapers/27320/mountains_%20hill_%20and%20a%20river%20_reflectance_%20_good-wallpapers.com_.jpg"
      />
      <p>Adipisicing unde vel so dolore, consequatur.</p>
      <div className={style.section2_div}>
        <span className={style.section2_img}>
          <BsLink45Deg />
        </span>
        Ipsum Lorem
      </div>
    </div>
  );
}

export default Card;
