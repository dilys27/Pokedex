import React, {Component} from 'react'

class Filter extends Component { 
    render() {
        return (
                <div>
                    <form onSubmit={ev => ev.preventDefault()}>
                        <label>
                            Recherche :
                            <input type="text" onChange={this.props.handleChange} />
                        </label>
                        <p>{this.props.value}</p>
                    </form>
                </div>    
            )
    }
}

export default Filter;