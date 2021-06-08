import { useState } from "react";

import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const [hoveredOver, setHoveredOver] = useState(false);

  const hoverHandler = (onOrOff) => {
    onOrOff === "on" ? setHoveredOver(true) : setHoveredOver(false);
  };

  const sendUpChoice = (choice) => {
    props.clicked(props.title);
  };

  return (
    <div
      className={`${styles.navItemDiv} ${hoveredOver && styles.hovered}`}
      onMouseEnter={() => {
        hoverHandler("on");
      }}
      onMouseLeave={() => {
        hoverHandler("off");
      }}
      onClick={sendUpChoice}
    >
      <p
        className={`${styles.navBarItem} ${hoveredOver && styles.hoveredText} `}
      >
        {props.title}{" "}
      </p>
    </div>
  );
};

export default MenuItem;
