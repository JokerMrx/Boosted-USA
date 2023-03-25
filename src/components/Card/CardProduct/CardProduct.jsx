import styles from "./CardProduct.module.scss";

const PRICE_COLOR = "#373737";
const OLD_PRICE_COLOR = "#FF2121";
const SOLD_OUT_COLOR = "rgba(0, 0, 0, 0.3)";

const CardProduct = ({ image, nameProduct, price }) => {
  let showPrice = "";
  if (price.indexOf("$") !== -1) {
    if (price.indexOf(" ") !== -1) {
      const arrPrice = price.split(" ");
      showPrice = (
        <>
          <label style={{ color: PRICE_COLOR }}>{arrPrice[0]}</label>
          <label style={{ marginLeft: "4px", color: OLD_PRICE_COLOR }}>
            {arrPrice[1]}
          </label>
        </>
      );
    } else showPrice = price;
  } else showPrice = <label style={{ color: SOLD_OUT_COLOR }}>{price}</label>;

  return (
    <div className={styles.container}>
      <img src={image} alt={nameProduct} />
      <div className={styles.info}>
        <p className={styles.nameProduct}>{nameProduct}</p>
        <p className={styles.price}>{showPrice}</p>
      </div>
    </div>
  );
};

export default CardProduct;