import { useState, useEffect } from "react";

import map from "../../assets/mapWithMarkers.png";
import styles from "./GettingAround.module.css";

const GettingAround = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(()=> {
    setTimeout(() => {
        setVisible(true);

    }, 100)


  }, []);

  return <img src={map} className={`${styles.map} ${visible ? styles.open : ''}`}></img>;
};

export default GettingAround;
