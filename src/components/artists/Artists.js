import { useState } from "react";


import SlidingBox from "../slidingBox/SlidingBox";

import styles from "./Artists.module.css";

const Artists = (props) => {

  const [artistWasClicked, setArtistWasClicked] = useState(false);
  // const [missionWasClicked, setMissionWasClicked] = useState(false);

  const artistClicker = () => {
    setArtistWasClicked(previous => !previous);
  };

  return (
    <SlidingBox>

      <div className={styles.innerContentContainer}>

      <div className={styles.accordion}  onClick={artistClicker}> 
        <p className={styles.artistName}>DENNIS BAKER</p>
      </div>

      {artistWasClicked && <div className={styles.accordionContent}>

        <p>Star Formation #8</p>

        <p>
      The City of Sculpture's first artist-in-residence is Dennis C. Baker,
       who is working at Hamilton Scrap Processors each weekend. 
       Dennis grew up in Northern Indiana and attended Manchester College. 
       He graduated with a degree in biology and biochemistry. During college years, 
       he took classes in art, specifically painting. In 1979, Dennis moved to Cincinnati 
       where he works for a cardiovascular device company, Medtronic, Inc. 
       Now a consultant for them, Dennis spends his time in operating rooms. 
       "I have always enjoyed working with my hands as a stress reliever." Dennis says. 
       " Over the years I constantly tried new things - one of which was welding, 
       which I absolutely fell in love with." Dennis graduated in 1996 from a vocational 
       school's welding class and has taken several advanced courses since on welding, 
       painting, and applying gold leaf & patina's to his artwork. He considers himself 
       to essentially be self-taught and is proud of his development.</p>

      </div>}

      <div className={styles.accordion}  onClick={artistClicker}> 
        <p className={styles.artistName}>Artist Name </p>
      </div>

      {artistWasClicked && <div className={styles.accordionContent}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus dolor eu ipsum 
      ornare laoreet. Aenean tempus, libero ac porta tempus, enim elit fringilla ante, 
      vitae luctus orci elit ac erat. Sed volutpat dolor sit amet ultricies cursus. 
      Phasellus placerat, tellus porta cursus elementum, risus massa ornare nunc, 
      fermentum commodo.      </div>}

      </div>

      

     
    </SlidingBox>
  );
};

export default Artists;
