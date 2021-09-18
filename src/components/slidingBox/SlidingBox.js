import { useState, useEffect } from 'react';

import styles from "./SlidingBox.module.css";

const SlidingBox = (props) => {
  const [boxPosition, setBoxPosition] = useState("translateX(0)");

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setBoxPosition("translateX(20vw)");
    }, 5);
  }, []);

  return (
    <div
      className={styles.containingDiv}
      style={{ transform: boxPosition }}
    >
      {props.children}
    </div>
  );
};

export default SlidingBox;
