import React from 'react';
import pokemons from '../data';

class PokeInfos extends React.Component {
    render() {
        return (
        pokemons.map((items) => 
        <div>    
          <p><img src={items.image} alt={items.name}></img></p>
          <p>Nome do Pokemon: {items.name}</p> 
          <p>Tipo do Pokemon: {items.type}</p>
          <p>Peso do Pokemon: {items.averageWeight.value} {items.averageWeight.measurementUnit}</p> 
        </div>
        ));
    };
};



export default PokeInfos;