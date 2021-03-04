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
                <ItemDisplas title='Title of the Item' Image={mainImg} />
                <ItemDisplas title='Rakthi' Image={mainImg} />
                <ItemDisplas title='SisiL Bima' Image={mainImg} />
            </div>
        )
    }

    NewText() {
        return "New test Name";
    }
}
export default maincompo;
