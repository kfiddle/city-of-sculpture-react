import styles from "./Sculpture.module.css";
import picture from '../../assets/sculptures/hamilton-thecape-2200x2401.jpeg';

const SingleSculpture = (props) => {
    const { source, size } = props;

    const imageSrc = '../../assets/sculptures/' + source;
    return (
      <div className={`${styles.tileDiv} ${size}`}>
        <img src={picture} />
        <p>{size}</p>
      </div>
    );

  
};

export default SingleSculpture;
