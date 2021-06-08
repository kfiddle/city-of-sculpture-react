import { useState } from 'react';

import styles from "./Sculpture.module.css";

const SingleSculpture = (props) => {
  const [imageHoverState, setImageHoverState] = useState(false);
  const imageClass = styles.sculptureImage + '.hover';

  const { source, size } = props;

  const imageSrc = "images/sculptures/" + source;

  const onHoverHandler = () => {
    setImageHoverState(true);
  };

  const hoverOutHandler = () => {
    setImageHoverState(false);
  }

  return (
    <div
      className={`${styles.tileDiv} ${styles[size]}`}
      onMouseEnter={onHoverHandler}
      onMouseLeave={hoverOutHandler}
    >
      <img
        src={imageSrc}
        className={`${styles.sculptureImage} ${imageHoverState ? styles.hover : ''}`} 
      />
    </div>
  );
};

export default SingleSculpture;

// ${imageHoverState ? ".hover" : ""