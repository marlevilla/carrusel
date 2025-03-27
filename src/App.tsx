

import './App.css'
import React from "react";
import Carrusel from "./Carrusel";

import Cards from './components/Cards';

import { cardimg1, cardimg2, cardimg3 } from './lib/constants/card.imgs';


const diapositivas: React.ReactNode[] = [
  <Cards imgs={cardimg1} />,
  <Cards imgs={cardimg2} />,
  <Cards imgs={cardimg3} />,
];


const App: React.FC = () => {
  return (
    <>

      <Carrusel slides={diapositivas} title='React carusel' />

    </>

  );
};

export default App;

