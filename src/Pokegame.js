import React, { Component } from 'react';
import Pokedex from './Pokedex';

class PokeGame extends Component {
    static defaultProps = {
        pokemon : [
            {id:4, name:'Charmender', type:'fire', base_experience : 62},
            {id:7, name:'Squirtle', type:'water', base_experience : 63},
            {id:11, name:'Meta', type:'bug', base_experience : 77},
            {id:12, name:'Beta', type:'flying', base_experience : 162},
            {id:25, name:'Pikacu', type:'electric', base_experience : 762},
            {id:39, name:'Jiggle', type:'normal', base_experience : 632},
            {id:94, name:'Gengar', type:'poisin', base_experience : 12},
            {id:133, name:'Eevee', type:'normal', base_experience : 42}
        ]
    }
    render () {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];

        while (hand1.length < hand2.length) {
            let randIndx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIndx,1)[0];
            hand1.push (randPokemon);
        }
        let exp1 = hand1.reduce((exp,pokemon) => exp + pokemon.base_experience,0);
        let exp2 = hand2.reduce((exp,pokemon) => exp + pokemon.base_experience,0);
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1>exp2}/>
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2>exp1}/>  

            </div>
            
        )
    }
}


export default PokeGame;