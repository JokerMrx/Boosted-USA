import Logo from "../../assets/LogoFooter.svg";
import IconAmex from '../../assets/Amex.svg';
import IconDinersClubInternational from '../../assets/DinersClubInternational.svg';
import IconGooglePay from '../../assets/GooglePay.svg';
import IconKlarna from '../../assets/Klarna.svg';
import IconMasterCard from '../../assets/MasterCard.svg';
import IconPay from '../../assets/Pay.svg';
import IconV from '../../assets/V.svg';
import IconVisa from '../../assets/Visa.svg';

import styles from "./Footer.module.scss";

const BOOSTED_USA = "BOOSTED USA";
const AMEX = "AMEX";
const DINERS_CLUB_INTERNATIONAL = "Diners Club International";
const GOOGLE_PAY = "Google Pay";
const KLARNA = "KLARNA";
const MASTER_CARD = "Master Card";
const PAY = "PAY";
const V = "V";
const VISA = "Visa";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.firstPart}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <img src={Logo} alt={BOOSTED_USA} />
            </div>
            <div className={styles.explore}>
              <h2>Explore</h2>
              <div className={styles.nav}>
                <p>Electric Skateboards</p>
                <p>Electric Scooters</p>
                <p>Accessories</p>
                <p>FAQs</p>
                <p>Warranty</p>
                <p>Quick Start Guide</p>
                <p>Contact</p>
                <p>Gift Card</p>
                <p>Accessibility Statement</p>
              </div>
            </div>
            <div className={styles.aboutUs}>
              <h2>About Boosted USA</h2>
              <p className={styles.description}>
                Boosted empowers people everywhere to commute across
                <br /> their cities, campuses, and communities in ways that were
                <br /> never before possible. Boosted is solving one of the
                <br /> biggest problems people face each day: transportation.
              </p>
              <p>CaliRides LLC - DBA Boosted USA</p>
              <p>1281 Andersen Drive Ste. K</p>
              <p>San Rafael, CA 94901</p>
            </div>
          </div>
        </div>
        <div className={styles.secondPart}>
          <div className={styles.info}>
            <p className={styles.default}>&copy; 2021&nbsp;</p>
            <p className={styles.primary}>Boosted USA</p>
            <p className={styles.default}>&nbsp;.</p>
            <p className={styles.default}>All Rights Reserved.&nbsp;</p>
            <p className={styles.primary}>Terms of Service</p>
            <p className={styles.default}>.&nbsp;Built by&nbsp;</p>
            <p className={styles.primary}>BH</p>
          </div>
          <div className={styles.methods}>
            <img src={IconAmex} alt={AMEX}/>
            <img src={IconDinersClubInternational} alt={DINERS_CLUB_INTERNATIONAL}/>
            <img src={IconGooglePay} alt={GOOGLE_PAY}/>
            <img src={IconKlarna} alt={KLARNA}/>
            <img src={IconMasterCard} alt={MASTER_CARD}/>
            <img src={IconPay} alt={PAY}/>
            <img src={IconV} alt={V}/>
            <img src={IconVisa} alt={VISA}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
