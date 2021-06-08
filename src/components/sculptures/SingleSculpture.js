import styles from "./Sculpture.module.css";

const SingleSculpture = (props) => {
  const { source, size } = props;

  const imageSrc = "images/sculptures/" + source;

  return (
    <div className={`${styles.tileDiv} ${styles[size]}`}>
      <img src={imageSrc} className={styles.sculptureImage} />
    </div>
  );
};

export default SingleSculpture;
