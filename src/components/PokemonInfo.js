import React from 'react';
import {Image} from 'semantic-ui-react';

const PokemonInfo = ({pokemon , details, picture}) =>{
    
    if(!pokemon){
        return null;
    }
    const pokemonPicture = (picture) ? pokemon.sprites.front_default : pokemon.sprites.back_default;

    let type1, type2 = '';
    if(pokemon.types[1]){
        type1 = pokemon.types[0].type.name;
        type2 = pokemon.types[1].type.name;
    }else {
        type1 = pokemon.types[0].type.name;
    }
    
    if(details){
        return (
            <div>
                {pokemon.name} #{pokemon.id}<br/>
                <br/>
                Weight: {(pokemon.weight/4.536).toFixed(0)}lbs<br/>
                Height: {(pokemon.height*10).toFixed(0)}cm<br/>
                Types: <br/>
                {type1}<br/>
                {type2}

            </div>
            ); 

    }else{
        return (
            <div>
                <div style={{float:'right'}}>#{pokemon.id}</div><br/>
                <Image src={pokemonPicture}/>
                {pokemon.name}<br/>
            </div>
            ); 
    }
    

 
}

export default PokemonInfo;