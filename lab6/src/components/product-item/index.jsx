/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #6
==========================================
*/

import React from 'react';
import "./product-item.css";

class ProductItem extends React.Component{

    handleAddButton = (id) => {
        this.props.onAddClick(id);
    }

    handleSubstractButton = (id) => {
        this.props.onSubstractClick(id);
    }

    render(){
        const { name, price, quantity, id } = this.props;
        return(
            <div className="item-box">
                <div className="properties">
                    <div className="name"> {name} </div>
                    <div className="price"> Q.{price} </div>
                    <div className="quantity"> {quantity} </div>
                    <div className="buttons-box">
                        <div className="button add" onClick={() => this.handleAddButton(id)}> + </div>
                        <div className="button substract" onClick={() => this.handleSubstractButton(id)}> - </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;