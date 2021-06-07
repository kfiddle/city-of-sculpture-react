import { useState } from "react";

import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const [hoveredOver, setHoveredOver] = useState(false);

  const hoverOver = (event) => {
    setHoveredOver(true);
  };

  const hoverOut = (event) => {
    setHoveredOver(false);
  };

  return (
    <div
      className={`${styles.navItemDiv} ${hoveredOver && styles.hovered}`}
      onMouseEnter={hoverOver}
      onMouseLeave={hoverOut}
    >
      <p className={`${styles.navBarItem} ${hoveredOver && styles.hoveredText} `}>{props.title} </p>
    </div>
  );
};

export default MenuItem;
