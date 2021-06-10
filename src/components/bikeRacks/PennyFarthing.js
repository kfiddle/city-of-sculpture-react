import { useState, useEffect, Fragment } from "react";

import styles from "./PennyFarthing.module.css";

const PennyFarthing = (props) => {
  // const [position, setPosition] = useState("translateX(0vw)");

  const bigWheel = "images/bigWheel.png";
  const pennyFrame = "images/pennyFrameWithTow.png";
  const smallWheel = "images/smallWheel.png";

  // const rideBike = () => {
  //   setTimeout(() => {
  //     setPosition("translateX(100vw)");
  //   }, 50);
  // };

  // useEffect(() => {
  //   rideBike();
  // }, []);

  // style={{ transform: position }}

  return (
    <div className={styles.bikeDiv} >
      <img src={bigWheel} className={`${styles.bigWheel}`}></img>
      <img src={pennyFrame} className={styles.pennyFrame}></img>
      <img src={smallWheel} className={styles.smallWheel}></img>
    </div>
  );
};

export default PennyFarthing;
