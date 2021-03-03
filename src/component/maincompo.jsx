import React, { Component } from 'react';
import mainImg from './img/pcimg.jpg';
import ItemDisplas from './ItemFolder/ItemDisplay';

class maincompo extends Component {
    render() {
        return (
            <div>
                <ItemDisplas title='Title of the Item' Image={mainImg} />
                <ItemDisplas title='Rakthi' Image={mainImg} />
                <ItemDisplas title='SisiL Bima' Image={mainImg} />
            </div>
        )
    }
}
export default maincompo;
