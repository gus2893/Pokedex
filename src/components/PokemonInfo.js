import React from 'react';
import {Image} from 'semantic-ui-react';

const PokemonInfo = ({pokemon}) =>{
    if(!pokemon){
        return null;
    }


    return (
    <div>
        <Image src={pokemon.sprites.front_default}/>
        {pokemon.name}
    </div>
    );  
}

export default PokemonInfo;