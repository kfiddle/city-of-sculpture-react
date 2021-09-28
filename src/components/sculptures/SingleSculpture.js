import { useState } from "react";

import styles from "./Sculpture.module.css";

const SingleSculpture = (props) => {
  const [imageHoverState, setImageHoverState] = useState(false);
  const [sculptureClicked, setSculptureClicked] = useState(false);

  const { title, source, size, type, sculpture } = props;

  let imageSrc;

  type === "sculpture"
    ? (imageSrc = "images/sculptures/" + source)
    : (imageSrc = "images/bikeRacks/" + source);

  const hoverHandlers = (onOrOff) => {
    onOrOff === "on" ? setImageHoverState(true) : setImageHoverState(false);
  };

  const showModal = () => {
    setSculptureClicked(true);
  };

  const closeModal = () => {
    console.log("clicked");
    setSculptureClicked(false);
  };

  return (
    <div
      onClick={() => props.clicked(sculpture)}
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

      <p
        className={`${styles.imageDetails} ${
          imageHoverState ? styles.open : ""
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default SingleSculpture;
