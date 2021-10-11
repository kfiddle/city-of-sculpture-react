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
  title: "Bridge & Main St. Walking Tour",
};
const GETTING_AROUND_2 = {
  id: "5",
  title: "Downtown Walking Tour",
};
const BIKE_RACKS = {
  id: "6",
  title: "Sculptural Bike Racks",
};
const HAMILTON = {
  id: "7",
  title: "Hamilton",
};
const CONTACT_US = {
  id: "8",
  title: "Contact Us",
};
const menuItems = [
  ABOUT_US,
  SCULPTURES,
  ARTISTS,
  GETTING_AROUND,
  GETTING_AROUND_2,
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
