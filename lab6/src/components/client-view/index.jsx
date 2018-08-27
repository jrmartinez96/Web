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

import "./client-view.css";
import { ProductsList } from "../products-list";
import { AccountList } from "../account-list";

class ClientView extends React.Component {
    render(){
        return(
        <div className="client-view">
            <div className="products-box">
                <div style={{width:"70%", margin:"15px auto 0 auto"}}>
                    <div style={{width:"80%", display:"flex", margin:"0 auto"}}>
                        <div style={{flex:2}}>Name</div>
                        <div style={{flex:1}}>Price</div>
                        <div style={{flex:2}}>In Stock</div>
                        <div style={{flex:1}}>Buy/Return</div>
                    </div>
                </div>
                <div className="list-box">
                    <ProductsList />
                </div>
            </div>
            <div className="account-box">
                <AccountList />
            </div>
        </div>
        );
    }
}

export default ClientView;