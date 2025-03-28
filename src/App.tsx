

import './App.css'
import React from "react";
import Carrusel from "./Carrusel";
import Infinito from "./CarruselInfinito";

import Cards from './components/Cards';

import Cards4 from './components/Cards4';
import { cardimg1, cardimg2, cardimg3 } from './lib/constants/card.imgs';


const diapositivas: React.ReactNode[] = [<Cards imgs={cardimg1} />, <Cards imgs={cardimg2} />, <Cards imgs={cardimg3} />];
const diapositivas2: React.ReactNode[] = [<Cards4 />];


const App: React.FC = () => {
  return (
    <>

      <Infinito slides={diapositivas2} />
      <Carrusel slides={diapositivas} title='Carusel React' />


    </>

  );
};

export default App;

