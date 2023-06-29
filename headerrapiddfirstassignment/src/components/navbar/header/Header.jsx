import React, { useState } from "react";
import style from "../../../style/Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Header({ isVisible, handleIsVisibleResOption }) {
  const [visibleham, setVisibleham] = useState("");
  const [visiblehamClose, setVisiblehamClose] = useState("none");

  const handleIpsum = () => {
    isVisible();
  };
  const handleHamburger = () => {
    setVisiblehamClose("flex");
    setVisibleham("none");
    handleIsVisibleResOption();
  };
  const handleCloseHamburger = () => {
    setVisiblehamClose("none");
    setVisibleham("flex");
    handleIsVisibleResOption();
  };
  return (
    <div className={style.nav}>
      <div className={style.img_div}>
        <img
          src="https://rapids.ai/images/RAPIDS-logo.png"
          width={100}
          height={30}
        />
      </div>
      <div>
        <div className={style.nav_link_div}>
          <div>
            <ul className={style.nav_list}>
              <li className={style.header_li} onClick={handleIpsum}>
                Ipsum
              </li>
              <li className={style.header_li} onClick={handleIpsum}>
                Ipsum
              </li>
              <li className={style.header_li} onClick={handleIpsum}>
                Ipsum
              </li>
              <li className={style.header_li} onClick={handleIpsum}>
                Ipsum
              </li>
            </ul>
          </div>
          <div className={style.div1}>
            <div
              style={{ display: visibleham }}
              onClick={handleHamburger}
              className={style.hamburger_img_div}
            >
              <GiHamburgerMenu fontSize={40} color="white" />
            </div>
            <div
              style={{ display: visiblehamClose }}
              onClick={handleCloseHamburger}
              className={style.hamburger_close_img_div}
            >
              <ImCross fontSize={29} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
