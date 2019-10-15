import React, { Component } from 'react'
import axios from 'axios';

import { Typography } from '@material-ui/core'

import Filter from '../components/Filter'
import Liste from '../components/Liste'
import Loader from '../components/Loader'

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
        this.setState({
            isLoading: true,
        });

        try {
            const res = await axios.get(this.state.url);
            console.log(res.data['results']);
            this.setState({
                pokemons: res.data['results'],
                isLoading: false,
            });
        } catch (err) {
            this.setState({
                isLoading: false,
                error: err.message,
            });
            throw err;
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            pokemons: this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())),
        });
    }

    render() {
        return (
            <div>
                <Typography gutterBottom variant="h2" component="h2">
                    Bienvenue !
                </Typography>
                <Filter value={this.state.value} handleChange={this.handleChange} />
                {this.state.error ?
                    (this.state.error) : !this.state.isLoading ?
                        <Liste pokemons={this.state.pokemons} />
                        : <div className="centered"><Loader /></div>
                }
            </div>
        );
    }
}

export default HomePage;