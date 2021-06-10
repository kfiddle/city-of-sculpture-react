import "./App.css";
import { Fragment, useState } from "react";

import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import AboutUs from "./components/aboutUs/AboutUs";
import Sculptures from "./components/sculptures/Sculptures";
import BikeRacks from './components/bikeRacks/BikeRacks';
import GettingAround from './components/gettingAround/GettingAround';

const SCULPTURES = "The Sculptures";
const ABOUT_US = "About Us";
const ARTISTS = "Artists";
const BIKE_RACKS = 'Sculptural Bike Racks';
const GETTING_AROUND = 'Getting Around';

function App() {
  const [chosenOption, setChosenOption] = useState(SCULPTURES);

  const MAPPING = chosenOption === 'Getting Around';

  const mainChoiceHandler = (choice) => {
    console.log(choice)
    setChosenOption(choice);
  };

  return (
    <Fragment>
      <Header />
      <SideBar clickedChoice={mainChoiceHandler}  mapOpen={MAPPING}  />
      {chosenOption === SCULPTURES && <Sculptures />}
      {chosenOption === ABOUT_US && <AboutUs />}
      {chosenOption === BIKE_RACKS && <BikeRacks />}
      {chosenOption === GETTING_AROUND && <GettingAround/>}
    </Fragment>
  );
}

export default App;
