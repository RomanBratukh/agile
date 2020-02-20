import createReducer from 'app/lib/createReducer';
import * as types from './types';

const initialState = {
    loading: false,
    pictures: [], 
    page: 1, 
    pageCount: 1, 
    hasMore: false,
    error: '',
};

export const gridReducer = createReducer(initialState, {

    [types.GRID_ENABLE_LOADER](state) {
        return {
            ...state,
            loading: true,
        };
    },
    [types.GRID_DISABLE_LOADER](state) {
        return {
            ...state,
            loading: false,
        };
    },
    [types.GET_IMAGE_LIST_REQUEST](state) {
        return {
            ...state,
        };
    },
    [types.GET_IMAGE_LIST_SUCCESS](state, {pictures, page, pageCount, hasMore}) {
        return {
            ...state,
            pictures: page === 1? pictures: [...state.pictures, ...pictures], 
            page, 
            pageCount, 
            hasMore
        };
    },
    [types.GET_IMAGE_LIST_FAILED](state, {error}) {
        return {
            ...state,
            error,
        };
    },
});
