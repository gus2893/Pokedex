import React,{Component} from 'react';
import PokemonInfo from './PokemonInfo';
import { connect } from 'react-redux';
import {fetchPokemon} from '../actions';
import {Button, Container, Segment, Grid, Divider, Icon} from 'semantic-ui-react';

class App extends Component {
    state = {next: false, prev:true, details: false, picture: true}
    
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
            <Container align='center' >
                <Segment align='center' compact inverted color='red' style={{borderRadius: '50px'}}>
                <Segment align='center'  padded='very' inverted color='black'  style={{borderRadius: '18px'}}>
                <Segment size='large' padded style={{ backgroundColor:'lightgrey'}}>
                    <PokemonInfo pokemon = {pokemon.pokemonData} details ={this.state.details} picture ={this.state.picture} /> 
                </Segment>
                              
                </Segment>
                <Divider/>
                <Divider/>
                <Grid columns={3} >
                    <Grid.Row >
                        <Grid.Column  width={1}>    
                        </Grid.Column>

                        <Grid.Column  width={13}>
                            <Grid.Column  verticalAlign='middle' align='left' style={{paddingLeft: '35px', paddingBottom: '4px'}}>
                                <Icon bordered inverted color='black'  name='caret up' disabled={this.state.next} onClick={()=> this.navigate(pokemon.pokemonId+1)}></Icon>
                            </Grid.Column>
                            
                            
                            <Icon bordered inverted color='black'  name='caret left' disabled={this.state.picture} onClick ={()=> this.setState({picture : true})}/>
                            <Icon bordered inverted color='black'  name='circle' style={{paddingLeft: '35px'}}></Icon>
                            <Icon bordered inverted color='black'  name='caret right' disabled={!this.state.picture} onClick ={()=> this.setState({picture : false})}></Icon>
                            
                            <Button 
                                content='A' 
                                circular 
                                color='black' 
                                compact 
                                floated='right'
                                onClick ={()=> this.setState({details : true})}>
                            </Button>
                            <Button 
                                content='B' 
                                circular 
                                color='black' 
                                compact 
                                floated='right'
                                onClick ={()=> this.setState({details : false})}>
                            </Button>

                            

                            <Grid.Column width={1} verticalAlign='middle' style={{paddingRight: '88px', paddingTop: '4px'}}>
                                <Icon 
                                    bordered inverted color='black'  
                                    name='caret down'                                     
                                    disabled={this.state.prev} 
                                    onClick={()=> this.navigate(pokemon.pokemonId-1)}>
                                </Icon>
                            </Grid.Column>
                            <Divider/>
                            <Grid.Column width={9}>
                                <Button size='mini' content='Select' circular color='black' compact>
                                </Button>
                                <Button size='mini' content='Start' circular color='black' compact>
                                </Button>
                            </Grid.Column>
                            
                                
                            
                        
                   

                        </Grid.Column>

                        <Grid.Column width={1}>
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row  >

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