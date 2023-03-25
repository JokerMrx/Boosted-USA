import styles from "./TextOverHeader.module.scss";

const TextOverHeader = () => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>Financing option available at checkout.</p>
    </div>
  );
};

export default TextOverHeader;