import React, { useState } from "react";
import HeaderOptions from "./header_options/HeaderOptions";
import HeaderRespon from "./header/HeaderRespon";
import Header from "./header/Header";
import style from "../../style/Navbar.module.css";

function Navbar() {
  const [visible, setVisible] = useState("none");
  const [isVisibleResOption, setIsVisibleResOption] = useState("none");
  const isVisible = () => {
    visible == "none" ? setVisible("flex") : setVisible("none");
  };
  const handleIsVisibleResOption = () => {
    isVisibleResOption == "none"
      ? setIsVisibleResOption("block")
      : setIsVisibleResOption("none");
  };

  return (
    <div className={style.navbar}>
      <Header
        isVisible={isVisible}
        handleIsVisibleResOption={handleIsVisibleResOption}
      />
      <HeaderOptions visible={visible} />

      <HeaderRespon isVisibleResOption={isVisibleResOption} />
    </div>
  );
}

export default Navbar;
