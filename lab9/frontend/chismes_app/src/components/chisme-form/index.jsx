/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #9
==========================================
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { chismeAdd } from '../../actions';
import './chisme-form.css';

const renderInputTitle = ({input, meta, ...props}) => (
    <div className="input-box">
        <div className="my-input-box">
            <input {...input} {...props} className="my-input title-input" />
        </div>

    {
            meta.error && meta.touched && (
            <div className="error">
                { meta.error }
            </div>
            )
        }
    </div>
);

const renderInputDescription = ({input, meta, ...props}) => (
    <div className="input-box">
        <div className="my-input-box">
            <textarea {...input} {...props} className="my-input description-input" />
        </div>

        {
            meta.error && meta.touched && (
            <div className="error">
                { meta.error }
            </div>
            )
        }
    </div>
);

const ChismeForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className="form">
        <Field 
            type="text"
            name="title"
            placeholder="Titulo"
            component={renderInputTitle}
        />

        <Field 
            type="text"
            name="description"
            placeholder="Descripcion"
            component={renderInputDescription}
        />
        <div className="input-button-box">
            <button type="submit" className="input-button"> Agregar Chisme</button>
        </div>
    </form>
);

export default reduxForm({
    form: 'createChismeForm',

    onSubmit(values,dispatch) {
        const { title, description } = values;
        if(title && description){
            console.log(title, description);
            dispatch(chismeAdd(title, description));
            values.title = "";
            values.description = "";
        }
    },

    validate(values) {
        const errors = {};

        if(!values.title){
            errors.title = "Es obligatorio este campo";
        }

        if(!values.description){
            errors.description = "Es obligatorio este campo";
        }

        return errors;
    },

})(ChismeForm);