import React from 'react';

const CharacterList = (props) => {
  const characterItems = props.characters.map((character, index) => {
    return(
      <div key={index}>
      <img href="#" onClick={handleView} src={character.image} style={{width: "300px"}} alt={character.name}/>
      <p>
        {character.name}
      </p>
    </div>
    )
  });

  const handleView = (event) => {
    event.preventDefault();
    let index = event.target.value;
    props.onCharacterSelected(index);
  }


    return (
      <React.Fragment>
    {characterItems}
  </React.Fragment>
   );
  }


export default CharacterList;
