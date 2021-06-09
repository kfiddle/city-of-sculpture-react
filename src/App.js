import "./App.css";
import { Fragment, useState } from "react";

import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import AboutUs from "./components/aboutUs/AboutUs";
import Sculptures from "./components/sculptures/Sculptures";

const SCULPTURES = "Sculptures";
const ABOUT_US = "About Us";
const ARTISTS = "Artists";

function App() {
  const [chosenOption, setChosenOption] = useState(SCULPTURES);

  const mainChoiceHandler = (choice) => {
    setChosenOption(choice);
  };

  return (
    <Fragment>
      <Header />
      <SideBar clickedChoice={mainChoiceHandler} />
      {chosenOption === ABOUT_US && <AboutUs />}
      <Sculptures />
    </Fragment>
  );
}

export default App;
