import { put, call } from 'redux-saga/effects';

import * as gridActions from './actions';
import * as R from 'ramda';
import * as api from '../../api/methods/image';

import { takeEvery } from 'redux-saga/effects';
import * as types from './types';

function* getImageList({page}) {
    yield put(gridActions.enableLoader());
    const response = yield call(api.getImageList, page);

    if (response && !response.status) {
        yield put(gridActions.getImageListSuccess(response));
    } else {
        const error = R.path(['status'], response);
        yield put(gridActions.getImageListFailed(error));
    }
    yield put(gridActions.disableLoader());
}


export const gridSagas = [
    takeEvery(types.GET_IMAGE_LIST_REQUEST, getImageList),
];

