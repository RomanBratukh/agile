import ApiConstants from './ApiConstants';
import { store } from '../store/configureStore';
import * as R from 'ramda';

export default function api(path, params, method) {
    const token = R.path(['authReducer', 'token'], store.getState());
    const options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + token,
        },
        method,
        ...(params && { body: JSON.stringify(params) }),
    };
    return fetch(ApiConstants.BASE_URL + path, options)
        .then(resp => resp.json())
        .then(json => json)
        .catch(error => error);
}
