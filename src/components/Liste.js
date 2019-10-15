import React, { Component } from 'react'
import Item from './Item'
import { Grid } from '@material-ui/core';

class Liste extends Component {
    render() {
        return (
            <div style={{ marginTop: 20, padding: 30 }}>
                <Grid container spacing={6} justify="center">
                    {this.props.pokemons.map((pokemon, index) => (
                        <Item
                            key={index}
                            {...pokemon}
                        />
                    ))}
                </Grid>
            </div>
        );
    }
}

export default Liste;