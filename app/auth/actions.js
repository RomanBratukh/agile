import * as types from './types';


export function enableLoader() {
    return {
        type: types.AUTH_ENABLE_LOADER,
    };
}

export function disableLoader() {
    return {
        type: types.AUTH_DISABLE_LOADER,
    };
}

export function getToken() {
    return {
        type: types.GET_TOKEN_REQUEST,
    };
}

export function getTokenSuccess({token}) {
    return {
        type: types.GET_TOKEN_SUCCESS,
        token
    };
}

export function getTokenFailed(error) {
    return {
        type: types.GET_TOKEN_FAILED,
        error
    };
}
