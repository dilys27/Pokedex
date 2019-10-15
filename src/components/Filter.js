import React, { Component } from 'react'
import { FormLabel } from '@material-ui/core'

class Filter extends Component {
    render() {
        return (
            <div>
                <form onSubmit={ev => ev.preventDefault()}>
                    <FormLabel>
                        Recherche 
                        <input type="text" placeholder="Nom du pokémon" onChange={this.props.handleChange} />
                    </FormLabel>
                    <p>{this.props.value}</p>
                </form>
            </div>
        )
    }
}

export default Filter;