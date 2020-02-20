import createReducer from 'app/lib/createReducer';
import * as types from './types.js';

const initialState = {
    loading: false,
    authorised: false,
    token: null,
};

export const authReducer = createReducer(initialState, {

    [types.AUTH_ENABLE_LOADER](state) {
        return {
            ...state,
            loading: true,
        };
    },
    [types.AUTH_DISABLE_LOADER](state) {
        return {
            ...state,
            loading: false,
        };
    },
    [types.GET_TOKEN_REQUEST](state) {
        return {
            ...state,
        };
    },
    [types.GET_TOKEN_SUCCESS](state, {token}) {
        return {
            ...state,
            authorised: true,
            token,
        };
    },
    [types.GET_TOKEN_FAILED](state, {error}) {
        return {
            ...state,
            authorised: false,
            error,
        };
    },
});
