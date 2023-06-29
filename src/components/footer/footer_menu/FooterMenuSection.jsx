import React, { useState } from "react";
import style from "../../../style/FooterMenuSection.module.css";
import { RiShoppingCartFill } from "react-icons/ri";

function FooterMenuSection() {
  const [menus, setMenus] = useState(new Array(5).fill("Ipsum Lorem"));
  return (
    <div className={style.footer_menu_main_div}>
      <div className={style.footer_sections}>
        <h4>Illum magnam aliquam</h4>
        <div className={style.footer_menu_first_section}>
          <div className={style.footer_menu_link_container_div}>
            {menus.map((links) => (
              <div className={style.footer_menu_link_div}>
                <a href="#">{links}</a>
              </div>
            ))}
          </div>
          <div className={style.footer_menu_link_container_div}>
            {menus.map((links) => (
              <div className={style.footer_menu_link_div}>
                <a href="#">{links}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* //!Section2 */}
      <div className={style.footer_sections}>
        <h4>Quia so minima</h4>
        <div className={style.footer_menu_first_section}>
          <div className={style.footer_menu_link_container_div}>
            {menus.map((links) => (
              <div className={style.footer_menu_link_div}>
                <a href="#">{links}</a>
              </div>
            ))}
          </div>
          <div className={style.footer_menu_link_container_div}>
            {menus.map((links) => (
              <div className={style.footer_menu_link_div}>
                <a href="#">{links}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* //!Section3 */}
      <div className={style.footer_sections}>
        <h4 className={style.footer_menu_heading}>Quia so minima</h4>
        <div className={style.footer_menu_shopping_links}>
          <RiShoppingCartFill /> Lorem
        </div>
        <div className={style.footer_menu_shopping_links}>
          <RiShoppingCartFill /> Lorem
        </div>
        <div className={style.footer_menu_shopping_links}>
          <RiShoppingCartFill /> Lorem
        </div>
        <div className={style.footer_menu_shopping_links}>
          <RiShoppingCartFill /> Lorem
        </div>
      </div>
    </div>
  );
}

export default FooterMenuSection;
