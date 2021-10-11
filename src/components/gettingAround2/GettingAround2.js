import { useState, useEffect } from "react";

import SlidingBox from "../slidingBox/SlidingBox";


import map from "../../assets/Downtown.jpg";
import styles from "./GettingAround2.module.css";

const GettingAround2 = (props) => {
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
      <p>This walk is approximately 2 miles and takes about 1 hour to complete.</p>
      <hr/>
      <p>SCULPTURES</p> 

      <p>	1	Spring
	2	Shared Vision<br/>
	3	First Ride<br/>
	4	Firefighter Memorial<br/>
	5	Pioneer Family<br/>
	6	Victory (on top of Monument Building)<br/>
	7	Legacy of Literature<br/>
	8	Kitty Bench<br/>
	9	Double Crazy Swirl<br/>
	10	Lentil<br/>
	11	Snapshot<br/>
	12	Urban Renewal<br/>
	13	Park Place<br/>
	14	Resurgence<br/>
	15	4 People<br/>
	16	Guitar<br/>
	17	Marcum Heart in the Park<br/>
	18	Double Dancer<br/>
	19	Tree Bench<br/>
	20	The Maestro<br/>
	21	Bird House<br/>
	22	Republic Car<br/>
	23	A Forest Treasure<br/>
	24	Here We Go<br/>
	25	Keeper of the Garden<br/>
	26	Hebe<br/>
	27	Hamilton Gateway<br/>
	28	The American Cape<br/>
	29	Conversation in Six Parts<br/>
	30	Collective Impact<br/>
	31	Come Unto Me<br/>
	32	Hanna</p> 
      
      </div>
      </div>

      <div className={styles.mapImage}>
  <img src={map} className={`${styles.map} ${visible ? styles.open : ''}`}></img>
  </div>

  </SlidingBox>
  );
};

export default GettingAround2;
