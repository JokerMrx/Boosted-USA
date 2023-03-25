import styles from './CardProduct.module.scss';

const CardProduct = ({image, nameProduct, price}) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={nameProduct}/>
      <div className={styles.info}>
        <p className={styles.nameProduct}>{nameProduct}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  )
}

export default CardProduct