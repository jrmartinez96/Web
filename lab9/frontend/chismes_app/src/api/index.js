/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #9
==========================================
*/


import axios from 'axios';

export const getChismesApi = () => new Promise (
    resolve => axios.get('http://127.0.0.1:8000/api/v1/chismes/').then(
          (response) => resolve(response.data)
        )
);

export const postNewChismeApi = (title, description) =>( 
    axios.post('http://127.0.0.1:8000/api/v1/chismes/',{
        title: title,
        description:description
    })
);

export const deleteChismeApi = (id) =>(
    axios.delete(`http://127.0.0.1:8000/api/v1/chismes/${id}/`)
);