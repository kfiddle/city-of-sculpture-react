import styles from "./Sculpture.module.css";

const SingleSculpture = (props) => {
    const { source, size } = props;

    const imageSrc = 'images/sculptures/' + source;

    return (
      <div className={`${styles.tileDiv} ${size}`}>
        <img src={imageSrc} />
        <p>{source}</p>
        <p>{size}</p>
      </div>
    );

  
};

export default SingleSculpture;
