import styles from "./Image.module.scss";

const Image = ({ image, icon, title, subtitle }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <img src={icon} alt={""} />
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Image;