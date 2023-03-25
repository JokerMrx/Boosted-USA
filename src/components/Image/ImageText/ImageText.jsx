import styles from "./ImageText.module.scss";

const ImageText = ({image, title, subtitle}) => {
  return (
    <div className={styles.container} 
    style={{
        backgroundImage: `url(${image})`
    }}>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default ImageText;