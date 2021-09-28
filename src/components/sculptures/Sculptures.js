import { useState, useEffect } from "react";
import { listOfSculptures } from "./ListOfSculptures";

import TileGallery from "../tileGallery/TileGallery";
import SingleSculpture from "./SingleSculpture";
import SculptureDetails from './SculptureDetails';
import Modal from "../modal/Modal";
import styles from "./Sculptures.module.css";
import { unmountComponentAtNode } from "react-dom";

const Sculptures = (props) => {
  const [sculpturesPosition, setSculpturesPosition] =
    useState("translateX(100vw)");
  const [sculptureWasClicked, setSculptureWasClicked] = useState(false);
  const [clickedSculpture, setClickedSculpture] = useState({});

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setSculpturesPosition("translateX(0)");
    }, 500);
  }, []);

  const clickHandler = (sculpture) => {
    setSculptureWasClicked(true)
    setClickedSculpture(sculpture)

  };

  const closeModal = () => {
    setSculptureWasClicked(false)
  }

  const displayedSculptures = listOfSculptures.map((sculpture) => (
    <SingleSculpture
      key={sculpture.id}
      sculpture={sculpture}

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
      {sculptureWasClicked && <SculptureDetails closeModal={closeModal} sculpture={clickedSculpture} type={'sculpture'}/>}
    </div>

  );
};

export default Sculptures;
