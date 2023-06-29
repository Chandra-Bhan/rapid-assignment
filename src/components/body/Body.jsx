import React from "react";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import style from "../../style/Body.module.css";
import Cards from "./cards/Cards";

function Body() {
  return (
    <div className={style.body_section}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Cards />
    </div>
  );
}

export default Body;
