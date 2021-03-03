import React, { Component } from 'react';
import './itemBoxStyle.css';
import ItemImage from './ItemImage';

class ItemDisplay extends Component {
    render() {
        return (

            <div className="box" align="center">
                <h2>{this.props.title}</h2>
                <ItemImage Imagess={this.props.Image} />
                <p>{`welcome ${this.props.desc}`}</p>
                <p>{this.props.price}</p>
            </div>

        );
    }
}

export default ItemDisplay;