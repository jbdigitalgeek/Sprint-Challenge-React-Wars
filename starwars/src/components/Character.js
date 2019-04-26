import React from "react";
import "./Character.scss";

const Character = props => {
  console.log(props.charProp);
  return (
    <div className="charSheet">
      <div className="list">
        <h3>{props.charProp.name}</h3>
        <div className="list-content">Gender: {props.charProp.gender}</div>
        <div className="list-content">Height: {props.charProp.height}</div>
        <div className="list-content">Mass: {props.charProp.mass}</div>
        <div className="list-content">Hair Color: {props.charProp.hair_color}</div>
        <div className="list-content">Eye Color: {props.charProp.eye_color}</div>
      </div>
    </div>
  );
};

export default Character;
