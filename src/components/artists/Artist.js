import { useState } from "react";

import styles from "./Artist.module.css";

const Artist = (props) => {
  const [accordionClicked, setAccordionClicked] = useState(false);

  const { name, sculpture, bio } = props.artist;

  const artistClicker = () => {
    setAccordionClicked((previous) => !previous);
  };

  return (
   

      <div className={styles.accordionContainer}> 

      <div className={styles.accordion} onClick={artistClicker}>

        <p className={styles.artistName}>{name}</p>
      </div>

      {accordionClicked && (
        <div className={styles.accordionContent}>
          <div className={styles.sculptureTitle}>{sculpture}</div>

          <p>{bio}</p>
          <hr className={styles.artistHr} />
        </div> 
      )}

</div>

  );
};

export default Artist;
