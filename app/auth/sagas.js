import { put, call } from 'redux-saga/effects';

import * as loginActions from './actions';
import * as R from 'ramda';
import * as api from '../api/methods/auth';

import { takeEvery } from 'redux-saga/effects';
import * as types from './types';

function* getToken() {
    yield put(loginActions.enableLoader());
    const response = yield call(api.getToken);

    if (response && response.auth) {
        yield put(loginActions.getTokenSuccess(response));
    } else {
        const error = R.path(['status'], response);
        yield put(loginActions.getTokenFailed(error));
    }
    yield put(loginActions.disableLoader());
}


export const authSagas = [
    takeEvery(types.GET_TOKEN_REQUEST, getToken),
];

