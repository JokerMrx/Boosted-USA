import { useContext } from "react";

import TextOverHeader from "./TextOverHeader";

import { MenuContext } from "../../context/MenuProvider";

import IconLogo from "../../assets/Logo.svg";
import IconPerson from "../../assets/Person.svg";
import IconBasket from "../../assets/Basket.svg";
import IconBurgerMenu from "../../assets/burger-menu.svg";

import styles from "./Header.module.scss";

const NAME_COMPANY = "BOOSTED USA";

const Header = () => {
  const { setOpenMenu} = useContext(MenuContext);

  const handleMenu = () => {
    setOpenMenu(true);
  };

  return (
    <header className={styles.header}>
      <TextOverHeader />
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={IconLogo} alt={NAME_COMPANY} />
        </div>
        <nav className={styles.navigation}>
          <a href="#electric-skateboards">Electric Skateboards</a>
          <a href="#electric-scooters">Electric Scooters</a>
          <a href="#accessories">Accessories</a>
          <a href="#gift-card">Gift Card</a>
          <a href="#more-info">More Info</a>
        </nav>
        <div className={styles.iconsHeader}>
          <img src={IconPerson} alt={"Login"} className={styles.iconPerson} />
          <img src={IconBasket} alt={"Basket"} className={styles.iconBasket} />
        </div>
        <div className={styles.btnMenu} onClick={handleMenu}>
          <img src={IconBurgerMenu} alt="menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
