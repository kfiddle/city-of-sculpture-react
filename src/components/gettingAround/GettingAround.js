import { useState, useEffect } from "react";

import SlidingBox from "../slidingBox/SlidingBox";

import map from "../../assets/BridgeMain.jpg";
import styles from "./GettingAround.module.css";

const GettingAround = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(()=> {
    setTimeout(() => {
        setVisible(true);

    }, 100)


  }, []);

  return (
    <SlidingBox>
       <div className={styles.innerContentContainer}>
    <div className={styles.statementDiv}>
    <p>
      TOUR DETAILS</p>
      <p>This walk is approximately 1.85 miles and takes about 1 hour to complete.</p>
      <hr/>
      <p>SCULPTURES</p> 

      <p>	1/12	Bridge Medallions <br/>
	2	Riverside Mallards <br/>
	3	High Water Mark 1913 Flood <br/>
	4	Family of Man <br/>
	5	Tulips for Theresa Bench <br/>
	6	Embrace <br/>
	7	When it rains it pours <br/>
	8	Beetle Bench <br/>
	9	Two Halves of a Whole <br/>
	10	Sherry Corbett Memorial Sculpture <br/>
	11	Space Tower</p> 
      
      </div>
      </div>

      <div className={styles.mapImage}>
  <img src={map} className={`${styles.map} ${visible ? styles.open : ''}`}></img>
  </div>

  </SlidingBox>
  );
};

export default GettingAround;
