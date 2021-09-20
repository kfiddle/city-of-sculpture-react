import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

import styles from "./SideBar.module.css";

const ABOUT_US = {
  id: "1",
  title: "About Us",
};
const SCULPTURES = {
  id: "2",
  title: "The Sculptures",
};
const ARTISTS = {
  id: "3",
  title: "The Artists",
};
const GETTING_AROUND = {
  id: "4",
  title: "Getting Around",
};
const BIKE_RACKS = {
  id: "5",
  title: "Sculptural Bike Racks",
};
const HAMILTON = {
  id: "6",
  title: "Hamilton",
};
const CONTACT_US = {
  id: "7",
  title: "Contact Us",
};
const menuItems = [
  ABOUT_US,
  SCULPTURES,
  ARTISTS,
  GETTING_AROUND,
  BIKE_RACKS,
  HAMILTON,
  CONTACT_US,
];

const SideBar = (props) => {
  const [currentChoice, setCurrentChoice] = useState("");
  const [sideBarLocked, setSideBarLock] = useState(false);

  const choiceHandler = (choice) => {
    props.clickedChoice(choice);
    setSideBarLock(true);
    setCurrentChoice(choice);
  };

  const lock = () => {
    setSideBarLock(true);
  };

  const displayOptions = menuItems.map((option) => (
    <MenuItem
      key={option.id}
      title={option.title}
      clicked={choiceHandler}
      locked={sideBarLocked}
      chosen={currentChoice}
    />
  ));

  return (
    <div className={styles.sideBar}>
      <div className={styles.menuContainer}>{displayOptions}</div>;
    </div>
  );
};

export default SideBar;
