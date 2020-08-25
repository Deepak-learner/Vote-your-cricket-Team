import React,{useState} from "react";
import ReactDom from "react-dom";
import Heading from "./heading.jsx";
import Card from "./card.jsx";

import './App.css';
import list from './list.js';


function App() {


  return (
    <div>

    <Heading/>
    {list.map((e) => {
      return(
      <Card
      img={e.img}
       />


    );}
  )}

    </div>
  );
}

export default App;
