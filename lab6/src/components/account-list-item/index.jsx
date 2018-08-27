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

import "./account-list-item.css";

class AccountListItem extends React.Component{
    render(){
        const { quantity, name, price } = this.props;
        return(
            <div className="item-box">
                <div className="properties">
                    <div> {quantity} </div>
                    <div className="name"> {name} </div>
                    <div> Q.{price} </div>
                </div>
            </div>
        );
    }
}

export default AccountListItem;