import React, {Component} from 'react'
import Item from '../components/Item'

class Liste extends Component {
    render() {
        return (
            <ul>
                {this.props.pokemons.map((pokemon, index) =>(
                    <Item 
                    key={index}
                    /*name={appartment.name}
                    date={appartment.date}
                    description={appartment.description}*/
                    {...pokemon}
                    />
                ))}
            </ul>        
            );
    }
}

export default Liste;