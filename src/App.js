import './App.css';
import { Fragment, useState } from 'react';

import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import Sculptures from './components/sculptures/Sculptures';

function App() {

  const choiceHandler = (choice) => {
    console.log(choice);
  }


  return (
    <Fragment>
      <Header />
      <SideBar clickedChoice={choiceHandler}/>
      <Sculptures />

    </Fragment>
  );
}

export default App;
