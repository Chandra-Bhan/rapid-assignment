import React, { useState } from "react";
import Card from "./card/Card";
import style from "../../../style/Cards.module.css";
import Card_Sec from "./card/Card_Sec";

function Cards() {
  const [card, setCard] = useState(new Array(8).fill(0));
  return (
    <div>
      <div className={style.cards_main_div}>
        <div className={style.cards_section_headings}>
          <div className={style.cards_header_heading}>
            <h3>Officia ut</h3>
          </div>
          <div className={style.cards_header_link}>
            <a href="#">Ipsum Lorem</a>
          </div>
        </div>
        <div className={style.cards_container}>
          {card.map((cd) => (
            <div>
              <Card />
            </div>
          ))}
        </div>
      </div>
      <div className={style.cards_sec_container}>
        <Card_Sec />
        <Card_Sec />
        <Card_Sec />
      </div>
    </div>
  );
}

export default Cards;
