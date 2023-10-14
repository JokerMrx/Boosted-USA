import { useContext } from "react";

import { MenuContext } from "../../context/MenuProvider";

import IconPerson from "../../assets/Person.svg";
import IconBasket from "../../assets/Basket.svg";
import IconClose from "../../assets/Close.svg";

import styles from "./Menu.module.scss";

const Menu = () => {
  const { isOpenMenu, setOpenMenu } = useContext(MenuContext);

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div
      className={styles.menu}
      style={{ display: isOpenMenu ? "flex" : "none" }}
    >
      <div className={styles.btnCloseMenu} onClick={handleCloseMenu}>
        <img src={IconClose} alt="close menu" />
      </div>
      <div className={styles.icons}>
        <img src={IconPerson} alt={"Login"} className={styles.iconPerson} />
        <img src={IconBasket} alt={"Basket"} className={styles.iconBasket} />
      </div>
      <nav className={styles.navigation}>
        <a href="#electric-skateboards">Electric Skateboards</a>
        <a href="#electric-scooters">Electric Scooters</a>
        <a href="#accessories">Accessories</a>
        <a href="#gift-card">Gift Card</a>
        <a href="#more-info">More Info</a>
      </nav>
    </div>
  );
};

export default Menu;
