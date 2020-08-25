import React,{useState} from "react";
import ReactDom from "react-dom";
import './Card.css';




function Card(props) {

 var c=Math.random();
 var count = Math.round(c*(5.5));
  var [count,setCount]=useState(count);
  function increase(){

    setCount(count+1);
  }
  var[isMouseOver, setMouseOver]=useState(true);
  function change()
  {
    setMouseOver(false);
  }
  function changeBack()
  {
    setMouseOver(true);
  }


  return (
    <div style={{backgroundColor : isMouseOver ? "orange" : "green" }} className="sec"
    onMouseOver={change}
    onMouseOut={changeBack}>
      <img className="image" alt="csk" src ={props.img}/>
      <h3>Total Votes : {count}</h3>
      <button onClick={increase} >Add your vote</button>
      </div>
  );
}

export default Card;
