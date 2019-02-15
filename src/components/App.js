import React,{Component} from 'react';
import { connect } from 'react-redux';
import {fetchPokemon} from '../actions';

class App extends Component {
    componentDidMount = () =>{
        this.props.fetchPokemon(1);
    }

    render(){
        console.log(this.props.pokemon);
        return (
        <div>App</div>
        );
    }
};

const mapStateToProps = state => {
    return { pokemon : state.pokemon }
}

export default connect(mapStateToProps, {fetchPokemon}) (App);