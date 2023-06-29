import React, { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import style from "../../../../style/Card.module.css";

function Card() {
  return (
    <div className={style.card}>
      <img
        className={style.card_img}
        src="https://wallpapercrafter.com/desktop2/805731-Argentina-Bariloche-clouds-forest-Hill-house.jpg"
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
