import React, {Component} from 'react'

class Item extends Component {
    render() {
        const { name, date, description } = this.props
        return (
        <div> 
            <h2>{name}</h2> 
            <div 
                style={{
                       width: '20px',
                       height: '20px', 
                       backgroundColor: date ? 'red' : 'green'
                      }}> 
            </div> 
            <p>{description}</p>
        </div>
               ) //<React.Fragment>
    }
}

export default Item;