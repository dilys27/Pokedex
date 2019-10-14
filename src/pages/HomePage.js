import React, { Component } from 'react'
import axios from 'axios';

import Filter from '../components/Filter'
import Liste from '../containers/Liste'
import Loader from '../components/Loader'

//import Title from '@material-ui/core/'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964
            `,
            pokemons: [],
            isLoading: false,
            error: null,
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        this.setState ({
            isLoading: true,
        });
        
        try {
            const res = await axios.get(this.state.url);
            console.log(res.data['results']);
            this.setState ({
                pokemons: res.data['results'],
                isLoading: false,
            });
        } catch (err) {
            this.setState ({
                isLoading: false,
                error: err.message,
            });
            throw err;
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            pokemons: this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase()),),
        });
    }

    render(){
        return (
            <div>
                <h1>Liste des pokémons</h1>
                <Filter value={this.state.value} handleChange={this.handleChange} />
                { this.state.error ? 
                 (this.state.error) : !this.state.isLoading ? 
                 <Liste pokemons={this.state.pokemons} />
                    : <Loader />   
                }
            </div>
        );
    }
}

export default HomePage;