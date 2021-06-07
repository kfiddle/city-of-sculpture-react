import './App.css';
import { Fragment, useState } from 'react';

import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import Sculptures from './components/sculptures/Sculptures';

function App() {



  return (
    <Fragment>
      <Header />
      <SideBar/>
      <Sculptures />

    </Fragment>
  );
}

export default App;
