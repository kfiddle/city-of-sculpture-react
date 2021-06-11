import { useState } from "react";
import styles from "./NavStripes.module.css";

const NavStripes = (props) => {
  const [bar1, setBar1] = useState("");
  const [bar2, setBar2] = useState("");
  const [bar3, setBar3] = useState("");

  const hovering = (up) => {
    setTimeout(() => {
      up ? setBar1("hover") : setBar1("");
    }, 50);
    setTimeout(() => {
      up ? setBar2("hover") : setBar2("");
    }, 150);
    setTimeout(() => {
      up ? setBar3("hover") : setBar3("");
    }, 250);
  };

  return (
    <div
      className={styles.outerHamburger}
      onMouseEnter={() => {
        hovering(true);
      }}
      onMouseLeave={() => {
        hovering(false);
      }}
    >
      <div className={styles.bars}>
        <span
          className={`${styles.bar} ${styles[bar1]}`}
          style={{ top: "10px" }}
        ></span>
        <span
          className={`${styles.bar} ${styles[bar2]}`}
          style={{ top: "23px" }}
        ></span>
        <span
          className={`${styles.bar} ${styles[bar3]}`}
          style={{ top: "38px" }}
        ></span>
      </div>
    </div>
  );
};

export default NavStripes;
