import React from "react";
import TextOverHeader from "../../components/Header/TextOverHeader";
import Header from "../../components/Header/Header";
import Btn from "../../components/Inputs/Button/Btn";
import CardProduct from "../../components/Card/Product/CardProduct";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";

import IconElectrek from "../../assets/Electrek.svg";
import IconTechCrunch from "../../assets/TechCrunch.svg";
import IconPopularMechanics from "../../assets/PopularMechanics.svg";
import IconWired from "../../assets/Wired.svg";
import IconLightning from "../../assets/Lightning.svg";
//
import IconFast from "../../assets/Fast.svg";
import IconFar from "../../assets/Far.svg";
import IconSafe from "../../assets/Safe.svg";
import IconBuildToLast from "../../assets/BuildToLast.svg";
//
import Product1 from "../../assets/Product-1.png";
import Product2 from "../../assets/Product-2.png";
import Product3 from "../../assets/Product-3.png";
import Product4 from "../../assets/Product-4.png";
import Product5 from "../../assets/Product-5.png";
import Product6 from "../../assets/Product-6.png";
import Product7 from "../../assets/Product-7.png";

import styles from "./Home.module.scss";

const products = [
  {
    image: Product1,
    name: "Rev Tube",
    price: "$16.00 $19.00",
  },
  {
    image: Product2,
    name: "Boosted Rev Stem Catch",
    price: "$19.00 $29.00",
  },
  {
    image: Product3,
    name: "Stomp Brake Fender",
    price: "Sold Out",
  },
  {
    image: Product4,
    name: "Boosted Belt Kit",
    price: "$25.00",
  },
  {
    image: Product5,
    name: "Bearing Service Kit",
    price: "$50.00",
  },
  {
    image: Product6,
    name: "Boosted Pulley / Belt Upgrade Kit",
    price: "$75.00",
  },
  {
    image: Product7,
    name: "Boosted Skid Plates",
    price: "$20.00",
  },
  {
    image: Product7,
    name: "Boosted Skid Plates",
    price: "$20.00",
  },
  {
    image: Product6,
    name: "Boosted Pulley / Belt Upgrade Kit",
    price: "$75.00",
  },
  {
    image: Product5,
    name: "Bearing Service Kit",
    price: "$50.00",
  },
  {
    image: Product4,
    name: "Boosted Belt Kit",
    price: "$25.00",
  },
  {
    image: Product3,
    name: "Stomp Brake Fender",
    price: "Sold Out",
  },
  {
    image: Product2,
    name: "Boosted Rev Stem Catch",
    price: "$19.00 $29.00",
  },
  {
    image: Product1,
    name: "Rev Tube",
    price: "$16.00 $19.00",
  },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <TextOverHeader />
      <Header />
      <section className={styles.section}>
        <div className={styles.welcome}>
          <h1>Welcome to Boosted USA</h1>
          <p>
            The Holy Grail of Electric Skateboards and One REVolutionary Scooter
          </p>
          <div className={styles.buttons}>
            <Btn title={"BOOSTED REVS"} />
            <Btn title={"BOOSTED BOARDS"} />
            {/* <button>BOOSTED REVS</button>
            <button>BOOSTED BOARDS</button> */}
          </div>
        </div>
      </section>
      <div className={styles.companies}>
        <div className={styles.list}>
          <div>
            <img src={IconElectrek} alt={""} />
          </div>
          <div>
            <img src={IconTechCrunch} alt={""} />
          </div>
          <div>
            <img src={IconPopularMechanics} alt={""} />
          </div>
          <div>
            <img src={IconWired} alt={""} />
          </div>
        </div>
      </div>
      <div className={styles.question}>
        <h1>Looking for Boosted Boards, or Boosted Revs?</h1>
        <p>
          Boosted USA acquired all of the remaining inventory directly from
          Boosted. This means we have the&nbsp; electric skateboards and scooter
          you all love and have been looking for. Get your hands on these&nbsp;
          highly sought after products while supplies last.
        </p>
      </div>
      <div className={styles.images}>
        <div>
          <div>
            <img src={IconLightning} alt={""} />
            <p className={styles.title}>Shop Boosted Boards</p>
            <p className={styles.stock}>In Stock</p>
          </div>
        </div>
        <div>
          <div>
            <img src={IconLightning} alt={""} />
            <p className={styles.title}>Shop Boosted Revs</p>
            <p className={styles.stock}>In Stock</p>
          </div>
        </div>
      </div>
      <section className={styles.electricSkateboards}>
        <div>
          <p>High-performance</p>
          <h1>Electric Skateboards</h1>
          <p>
            Cruising campus, going to work or getting through that long
            list&nbsp; of errands has never been easier or more fun.
          </p>
          <div>
            <Btn title={"Show Now"} />
          </div>
          {/* <button>Shop Now</button> */}
        </div>
      </section>
      <div className={styles.boostedRev}>
        <div className={styles.image1}></div>
        <div className={styles.image2}></div>
        <div className={styles.content}>
          <h1>Boosted Rev</h1>
          <p>
            There's never been an electric scooter quite like this. Speed past
            traffic at 24 mph. Go up to 22 miles on a single charge. You'll get
            there in no time at all. Stop and go with the roll of your thumb.
            Its intuitive design means there’s almost no learning curve.
          </p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className={styles.shop}>
        <div className={`${styles.item} ${styles.image1}`}>
          <div>
            <h1>Shop Boosted Stealth</h1>
            <p>IN STOCK</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.image2}`}>
          <div>
            <h1>Shop Boosted Plus</h1>
            <p>IN STOCK</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.image3}`}>
          <div>
            <h1>Shop Boosted Mini</h1>
            <p>IN STOCK</p>
          </div>
        </div>
      </div>
      <div className={styles.videos}>
        <div className={styles.video}></div>
        <div className={styles.video}></div>
      </div>
      <div className={styles.accessories}>
        <h1>Looking for Accessories?</h1>
        <div className={styles.line} />
        <div className={styles.products}>
          <Carousel height="305px">
            <>
              {products?.map(({image, name, price}, index) => (
                <React.Fragment key={index}>
                  <CardProduct
                    image={image}
                    nameProduct={name}
                    price={price}
                  />
                </React.Fragment>
              ))}
            </>
          </Carousel>
        </div>
      </div>
      <div className={styles.advantages}>
        <div>
          <div className={styles.item}>
            <img src={IconFast} alt={""} />
            <div className={styles.content}>
              <h1>Go Fast</h1>
              <p>
                Boosted is known for its premium performance boards offering a
                next-
                <br />
                level experience.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <img src={IconFar} alt={""} />
            <div className={styles.content}>
              <h1>Go Far</h1>
              <p>
                With optional extended battery life, you can get wherever you
                need to go reliably.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <img src={IconSafe} alt={""} />
            <div className={styles.content}>
              <h1>Go Safe</h1>
              <p>
                Safety is a #1 priority for Boosted, always wear a helmet when
                riding.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <img src={IconBuildToLast} alt={""} />
            <div className={styles.content}>
              <h1>Build to Last!</h1>
              <p>
                Boosted products are engineered to last
                <br /> for years and are extremely reliable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
