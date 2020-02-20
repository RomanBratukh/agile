import { put, call, takeEvery } from 'redux-saga/effects';
import * as imageActions from './actions';
import * as types from './types';
import { path } from 'ramda';
import * as api from '../../api/methods/image';


function* getPhotoDetails({ id }) {
    yield put(imageActions.enableLoader());
    const response = yield call(api.getImageDetails, id);
    if (response) {
        yield put(imageActions.getImageDetailsSuccess(response));
    } else {
        const failedText = path(['message'], response);
        yield put(imageActions.getImageDetailsFailed(failedText));
    }
    yield put(imageActions.disableLoader());
}

export const imageSagas = [
    takeEvery(types.GET_IMAGE_DETAILS_REQUEST, getPhotoDetails),
];