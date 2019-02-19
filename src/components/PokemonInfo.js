import React from 'react';
import {Image, Container, Segment} from 'semantic-ui-react';

const PokemonInfo = ({pokemon}) =>{
    if(!pokemon){
        return null;
    }


    return (
    <Segment compact padded style={{ backgroundColor:'lightgrey'}}>
        <Image src={pokemon.sprites.front_default}/>
        {pokemon.name}
    </Segment>
    );  
}

export default PokemonInfo;