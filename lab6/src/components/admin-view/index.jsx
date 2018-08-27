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
import { connect } from 'react-redux';

import "./admin-view.css";
import { productAdd } from '../../action-creators/products-action-creators'
import { ProductsList } from "../products-list";

class adminview extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            price:0,
            totalQuantity:0
        }
    }

    handleCreateClick = (name, price, totalQuantity) => {
        if(name !== '' && price !== undefined && totalQuantity !== undefined){
            const quantity = parseInt(totalQuantity,10);
            this.props.onButtonCreateClick(name, parseFloat(price), quantity);
            this.setState({name:'', price: 0, totalQuantity: 0});
        }
    }
    
    render(){
        const {name, price, totalQuantity} = this.state;
        return(
            <div className="admin-view">
                <div className="formulario-box">
                    <div className="input-box">
                        <label className="label-input">Name: </label>
                        <input 
                            className="input-input"
                            type="text" 
                            placeholder="Name" 
                            value={name} 
                            onChange={e=>this.setState({name:e.target.value})}
                            />
                        <div style={{flexGrow:"2"}}/>
                    </div>
                    
                    <div className="input-box">
                        <label className="label-input">Price: </label>
                        <input 
                            className="input-input"
                            type="number" 
                            placeholder="Price" 
                            value={price} 
                            onChange={e=>this.setState({price:e.target.value})}
                            />
                        <div style={{flexGrow:"2"}}/>
                    </div>

                    <div className="input-box">
                        <label className="label-input">Quantity: </label>
                        <input 
                            className="input-input"
                            type="number" 
                            placeholder="Quantity" 
                            value={totalQuantity} 
                            onChange={e=>this.setState({totalQuantity:e.target.value})}
                            />
                        <div style={{flexGrow:"2"}}/>
                    </div>
                    
                    <div className="create-button" onClick={() => this.handleCreateClick(name,price,totalQuantity)}> Create </div>
                </div>
                <div className="products-box">
                    <div style={{width:"70%", margin:"15px auto 0 auto"}}>
                        <div style={{width:"80%", display:"flex", margin:"0 auto"}}>
                            <div style={{flex:2}}>Name</div>
                            <div style={{flex:1}}>Price</div>
                            <div style={{flex:2}}>Quantity</div>
                            <div style={{flex:1}}>Add/Subs</div>
                        </div>
                    </div>
                    <div className="list-box">
                        <ProductsList />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onButtonCreateClick: (name, price, quantity) => {
            dispatch(productAdd({
                name:name,
                price:price,
                totalQuantity:quantity,
                sellQuantity:0
            }));
        }
    };
};


export const AdminView = connect(null,mapDispatchToProps)(adminview);