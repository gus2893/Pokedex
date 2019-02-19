import React,{Component} from 'react';
import PokemonInfo from './PokemonInfo';
import { connect } from 'react-redux';
import {fetchPokemon} from '../actions';
import {Button, Container, Segment, Grid, Divider, Icon} from 'semantic-ui-react';

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
            <Container Align='center' >
             <Segment Align='center' compact inverted color='red' style={{borderRadius: '50px'}}>
                <Segment Align='center' compact padded='very' inverted color='black'  style={{borderRadius: '18px'}}>
                    <PokemonInfo pokemon = {pokemon.pokemonData}/>      
                </Segment>
                <Divider/>
                <Grid columns={2}  >
                    <Grid.Row>
                        <Grid.Column width={1} verticalAlign='middle' centered >
                            <Icon 
                                bordered inverted color='black'  
                                name='caret left' 
                                disabled={this.state.prev} 
                                onClick={()=> this.navigate(pokemon.pokemonId-1)}
                            />
                        </Grid.Column>
                        <Grid.Column width={1} verticalAlign='middle'centered >
                            <Icon bordered inverted color='black'  name='caret up'></Icon>
                            <Icon bordered inverted color='black'  name='circle'></Icon>
                            <Icon bordered inverted color='black'  name='caret down'></Icon>
                        </Grid.Column>
                        <Grid.Column width={1} verticalAlign='middle' centered >
                            <Icon bordered inverted color='black'  name='caret right' disabled={this.state.next} onClick={()=> this.navigate(pokemon.pokemonId+1)}></Icon>
                        </Grid.Column>

                        <Grid.Column width={11} floated='right'>
                            <Button content='B' circular color='black' compact></Button>
                            <Button content='A' circular color='black' compact></Button>
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row>

                    </Grid.Row>
                </Grid>
             
             </Segment>

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