/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #9
==========================================
*/

import { all, fork } from 'redux-saga/effects';
import { watchChisme } from './chismes'


function* mainSaga() {
  yield all([
      fork(watchChisme),
  ]);
}

export default mainSaga