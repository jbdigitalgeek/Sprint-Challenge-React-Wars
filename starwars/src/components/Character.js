import React from "react";
import "./Character.scss";

const Character = props => {
  console.log(props.charProp);
  return (
    <div className="charSheet">
      <div className="list">
        <h3>{props.charProp.name}</h3>
        <div>Gender: {props.charProp.gender}</div>
        <div>Height: {props.charProp.height}</div>
        <div>Mass: {props.charProp.mass}</div>
        <div>Hair Color: {props.charProp.hair_color}</div>
        <div>Eye Color: {props.charProp.eye_color}</div>
      </div>
    </div>
  );
};

export default Character;
