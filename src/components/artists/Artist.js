import { useState } from "react";

import styles from "./Artist.module.css";

const Artist = (props) => {
  const [accordionClicked, setAccordionClicked] = useState(false);

  const { name, sculpture, bio } = props.artist;

  const artistClicker = () => {
    setAccordionClicked((previous) => !previous);
  };

  return (
    <div className={styles.innerContentContainer}>
      <div className={styles.accordion} onClick={artistClicker}>
        <p className={styles.artistName}>{name}</p>
      </div>

      {accordionClicked && (
        <div className={styles.accordionContent}>
          <p>{sculpture}</p>

          <p>{bio}</p>
        </div>
      )}
    </div>
  );
};

export default Artist;
