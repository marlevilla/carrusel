

import './App.css'
import React from "react";
import Carrusel from "./Carrusel";

import Cards from './components/Cards';
import Cards2 from './components/Cards2';
import Cards3 from './components/Cards3';


const diapositivas: React.ReactNode[] = [<Cards />, <Cards2 />, <Cards3 />];


const App: React.FC = () => {
  return (
    <>
      <h1 className='text-5xl text-red-300'>Holla!</h1>


      <Carrusel slides={diapositivas} />

    </>

  );
};

export default App;

