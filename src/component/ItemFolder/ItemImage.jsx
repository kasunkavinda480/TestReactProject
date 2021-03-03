import React, {Component} from 'react';
import './itemBoxStyle.css';
class ItemImage extends Component {
    render() {
        return(
            
                <div>
                    <img className="mainImg" src={this.props.Imagess} alt="myiMge"/>
                </div>
            
        );
    }
}

export default ItemImage;