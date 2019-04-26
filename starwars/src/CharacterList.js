import React from 'react';
import Character from './components/Character';

const characterList = props => {
   return (
    <div className={"list-container"}>
    {props.starwarsChars.map((char, i) => {
      return (

          <Character starwarsChars={props.starwarsChars} index={i} />


      );
    })}
  </div>
   )
}


export default characterList; 