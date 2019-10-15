import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Card, CardActionArea, Typography, Grid, CardContent } from '@material-ui/core';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imgURL: '',
            index: '',
            isLoading: false,
            error: null,
        };
    }

    async componentDidMount() {
        const { name, url } = this.props
        const index = url.split('/')[url.split('/').length - 2]
        const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
        this.setState({
            name,
            imgURL,
            index,
            isLoading: true,
        });
    }

    render() {
        return (
            <Grid item key={this.state.name} button component={Link} to={`/${this.state.name}`}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <img src={this.state.imgURL} />
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.state.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    }
}

export default Item;