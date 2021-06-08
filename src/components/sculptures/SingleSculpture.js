import { useState } from "react";

import styles from "./Sculpture.module.css";

const SingleSculpture = (props) => {
  const [imageHoverState, setImageHoverState] = useState(false);

  const { source, size } = props;

  const imageSrc = "images/sculptures/" + source;

  const hoverHandlers = (onOrOff) => {
    onOrOff === "on" ? setImageHoverState(true) : setImageHoverState(false);
  };

  return (
    <div
      className={`${styles.tileDiv} ${styles[size]}`}
      onMouseEnter={() => {
        hoverHandlers("on");
      }}
      onMouseLeave={() => {
        hoverHandlers("off");
      }}
    >
      <img
        src={imageSrc}
        className={`${styles.sculptureImage} ${
          imageHoverState ? styles.hover : ""
        }`}
      />

      <p className={`${styles.imageDetails} ${imageHoverState ? styles.open : ''}`}>one nifty statue</p>
    </div>
  );
};

export default SingleSculpture;
