import { useState, useEffect } from "react";
import { listOfSculptures } from "./ListOfSculptures";

import TileGallery from "../tileGallery/TileGallery";
import SingleSculpture from "./SingleSculpture";
import Modal from "../modal/Modal";
import styles from "./Sculptures.module.css";
import { unmountComponentAtNode } from "react-dom";

const Sculptures = (props) => {
  const [sculpturesPosition, setSculpturesPosition] =
    useState("translateX(100vw)");
  const [sculptureWasClicked, setSculptureWasClicked] = useState(false);

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setSculpturesPosition("translateX(0)");
    }, 500);
  }, []);

  const clickHandler = () => {
    setSculptureWasClicked(true)
  };

  const closeModal = () => {
    setSculptureWasClicked(false)
  }

  const displayedSculptures = listOfSculptures.map((sculpture) => (
    <SingleSculpture
      key={sculpture.id}
      source={sculpture.source}
      size={sculpture.size}
      title={sculpture.title}
      type={"sculpture"}
      clicked={clickHandler}
    ></SingleSculpture>
  ));

  return (
    <div className={styles.tileGalleryContainer}>
      <TileGallery
        className={"sculptureGalleryDiv"}
        position={sculpturesPosition}
      >
        {displayedSculptures}
      </TileGallery>
      {sculptureWasClicked && <Modal closeModal={closeModal}>I am a modal of fun sculpture stuff</Modal>}
    </div>
  );
};

export default Sculptures;
