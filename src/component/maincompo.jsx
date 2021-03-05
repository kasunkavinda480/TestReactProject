import React, { Component } from 'react';
import mainImg from './img/pcimg.jpg';
import ItemDisplas from './ItemFolder/ItemDisplay';

class maincompo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name : 'kasun kavinda',
            city : 'matara'
        }
    }
    render() {
        let classses = this.NewText();
        return (
            <div>
                <ItemDisplas title = "sdkfuhdsadfk" Image={mainImg}/>
                <ItemDisplas title = "kasun"/>
                <ItemDisplas />
                <ItemDisplas/>

                
            </div>
        )
    }

    NewText() {
        return "New test Name";
    }
}
export default maincompo;
