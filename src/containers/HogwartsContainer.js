import React from 'react';
import Heading from "../components/Heading";
import CharacterList from "../components/CharacterList";

class HogwartsContainer extends React.Component{
constructor(props){
  super(props);
  this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  this.state = {
    characters: [],
    currentCharacter: null
  }
}

componentDidMount(){
  fetch("http://hp-api.herokuapp.com/api/characters")
  .then((response) => response.json())
  .then(json => this.setState({characters: json}));
}

handleCharacterSelected(index){
  const selectedCharacter = this.state.characters[index];
  this.setState({currentCharacter: selectedCharacter});
}

  render(){

    return (
      <React.Fragment>
      <Heading/>
      <CharacterList
        characters={this.state.characters}
        onCharacterSelected={this.handleCharacterSelected}
      />
      </React.Fragment>
    )
  }
}

export default HogwartsContainer;
