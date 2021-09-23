import { useState } from "react";


import SlidingBox from "../slidingBox/SlidingBox";

import styles from "./Artists.module.css";

const Artists = (props) => {

  const [artistWasClicked, setArtistWasClicked] = useState(false);

  const artistClicker = () => {
    setArtistWasClicked(previous => !previous);
  };

  return (
    <SlidingBox>
      <div className={styles.accordion}  onClick={artistClicker}> 
        <p className={styles.artistName}>Artist Name </p>
      </div>

      {artistWasClicked && <div className={styles.accordionContent}>
        
          Artist Description
        
      </div>}

      <div className={styles.accordion}  onClick={artistClicker}> 
        <p className={styles.artistName}>Artist Name </p>
      </div>

      {artistWasClicked && <div className={styles.accordionContent}>
     
          Artist Description
    
      </div>}

     
    </SlidingBox>
  );
};

export default Artists;
