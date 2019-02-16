import React,{Component} from 'react';
import PokemonInfo from './PokemonInfo';
import { connect } from 'react-redux';
import {fetchPokemon} from '../actions';
import {Button, Container} from 'semantic-ui-react';

class App extends Component {
    state = {next: false, prev:true}
    
    componentDidMount = () =>{
        this.props.fetchPokemon(1);
    }
    navigate = pokeId => {
        this.props.fetchPokemon(pokeId);
        this.setState({prev: (pokeId-1===0) ? true : false})
    }
    render(){
        const {pokemon} = this.props;

        return (
            <Container>
                <PokemonInfo pokemon = {pokemon.pokemonData}/>
                <Button content='Next' disabled={this.state.next} onClick={()=> this.navigate(pokemon.pokemonId+1)}></Button>
                <Button content='Previous' disabled={this.state.prev} onClick={()=> this.navigate(pokemon.pokemonId-1)}></Button>
            </Container>     
        );
    }
};

const mapStateToProps = state => {
    return { 
        pokemon : state.pokemon,
    }
}

export default connect(mapStateToProps, {fetchPokemon }) (App);