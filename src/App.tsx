

import './App.css'
import React from "react";
import  Carrusel  from  "./Carrusel";
import  img1  from  "./assets/default.svg";
import  img2  from  "./assets/Group34.svg";
import  img3  from  "./assets/Group35.svg";
import  img4  from "./assets/Group36.svg";


const App: React.FC = () => {
  const diapositivas: string[] = [img1, img2, img3, img4];

  return (
    <>
      <h1 className='text-5xl text-red-300'>Holla!</h1>
       <div className="relative">
        <div className="max-w-lg">
          <Carrusel slides={diapositivas} />
        </div>
      </div>
    </>
    
  );
};

export default App; 

