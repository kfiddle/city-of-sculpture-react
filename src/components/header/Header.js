import { useState, useEffect } from "react";

import NavStripes from "../navStripes/NavStripes";

import styles from "./Header.module.css";

const Header = (props) => {
  const [headerPosition, setHeaderPosition] = useState("translateY(-20vh)");
  const image = "images/logo.png";

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setHeaderPosition("translateY(0)");
    }, 150);
  }, []);

  return (
    <header className={styles.header} style={{ transform: headerPosition }}>
      <NavStripes />
      <img src={image}></img>
    </header>
  );
};

export default Header;
