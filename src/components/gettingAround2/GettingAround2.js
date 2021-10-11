import { useState, useEffect } from "react";

import map from "../../assets/Downtown.jpg";
import styles from "./GettingAround2.module.css";

const GettingAround2 = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(()=> {
    setTimeout(() => {
        setVisible(true);

    }, 100)


  }, []);

  return <img src={map} className={`${styles.map} ${visible ? styles.open : ''}`}></img>;
};

export default GettingAround2;
