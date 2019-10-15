import React, { Component } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import { Typography } from '@material-ui/core'

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonURL: '',
            name: '',
            imgURL: '',
            weight: '',
            height: '',
            moves: [],
            types: [],
            stats: [],
            data: [],
            isLoading: false,
            error: null,
        };
    }

    async componentDidMount() {
        const name = this.props.match.params.name;
        const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${name}`

        this.setState({
            pokemonURL,
            name,
            isLoading: true,
        });

        try {
            const res = await axios.get(pokemonURL);
            const data = res.data;
            const imgURL = data['sprites'].front_default;
            const weight = data.weight;
            const height = data.height;
            const moves = [data['moves']['0']['move'].name, data['moves']['1']['move'].name, data['moves']['2']['move'].name];
            const types = data['types'];
            const stats = data['stats'];

            this.setState({
                imgURL,
                weight,
                height,
                moves,
                types,
                stats,
                data,
                isLoading: false,
            });
            console.log(this.state.moves)
            console.log(this.state.types)
            console.log(this.state.stats)
        } catch (err) {
            this.setState({
                isLoading: false,
                error: err.message,
            });
            throw err;
        }
    }

    render() {
        return (
            <div>
                {this.state.error ?
                    (this.state.error) : !this.state.isLoading ?
                        (
                            <div>
                                <Typography gutterBottom variant="h3" component="h3">
                                    {this.state.name.toUpperCase()}
                                </Typography>
                                <img src={this.state.imgURL} width="100" height="100" />
                                <Typography gutterBottom variant="body1" component="p">
                                    Taille : {this.state.height * 10} cm
                                </Typography>
                                <Typography gutterBottom variant="body1" component="p">
                                    Poids : {this.state.weight / 10} kg
                                </Typography>
                                <Typography gutterBottom variant="body1" component="p">
                                    Type(s) :
                                    <ul>
                                        {
                                            this.state.types.map((type, i) => (
                                                <li key={i}>{type['type'].name}</li>
                                            ))
                                        }
                                    </ul>
                                </Typography>
                                <Typography gutterBottom variant="body1" component="p">
                                    Capacités :
                                    <ul>
                                        {
                                            this.state.moves.map((ability, i) => (
                                                <li key={i}>{ability}</li>
                                            ))
                                        }
                                    </ul>
                                </Typography>
                                <Typography gutterBottom variant="body1" component="p">
                                    Stats :
                                    <ul>
                                        {
                                            this.state.stats.map((stat, i) => (
                                                <li key={i}>{stat['stat'].name} : {stat.base_stat}</li>
                                            ))
                                        }
                                    </ul>
                                </Typography>
                            </div>
                        )
                        : <div className="centered"><Loader /></div>
                }
            </div>
        );
    }
}

export default DetailPage;