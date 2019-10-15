import React, { Component } from 'react'
import axios from 'axios'

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: '',
            imgURL: '',
            isLoading: false,
            error: null,
        };
    }

    async componentDidMount() {
        const { name } = this.props.match.params; 

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

    render(){
        return (
            <div>
            </div>
        );
    }
}

export default DetailPage;