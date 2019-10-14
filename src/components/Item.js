import React, {Component} from 'react'
import axios from 'axios'

import { Card, CardHeader, CardContent } from '@material-ui/core';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imgURL: '',
            index: '',
            data: [],
            isLoading: false,
            error: null,
        };
    }
    
    async componentDidMount(){
        const { name, url } = this.props
        const index = url.split('/')[url.split('/').length - 2]
        const imgURL = `http://pokeapi.co/media/sprites/pokemon/${index}.png`
        this.setState ({
            name,
            imgURL,
            index,
            isLoading: true,
        });
        
        try {
            const {data: data} = await axios.get(url);
            console.log(data);
            this.setState ({
                data,
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

    render() {
        return (
            <div>
                <h1>{this.state.name.toLowerCase().split(' ').map(letter => letter.charAt[0].toUpperCase() + letter.substring(1)).join(' ')}</h1>
            </div>
        ) 
    }
}

export default Item;