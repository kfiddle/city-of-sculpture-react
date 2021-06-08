import { useState, useEffect } from 'react';
import { listOfSculptures } from "./ListOfSculptures";
import SingleSculpture  from './SingleSculpture';
import styles from "./Sculptures.module.css";

const Sculptures = (props) => {
  const [sculpturesPosition, setSculpturesPosition] = useState("translateX(100vw)")

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setSculpturesPosition("translateX(0)");
    }, 500);
  }, []);

  const displayedSculptures = listOfSculptures.map((sculpture) => (
    <SingleSculpture key={sculpture.id} source={sculpture.source} size={sculpture.size}></SingleSculpture>
    
  ));

  return <div className={styles.sculptureDivPanel} style={{transform: sculpturesPosition}}>{displayedSculptures}</div>;
};

export default Sculptures;
