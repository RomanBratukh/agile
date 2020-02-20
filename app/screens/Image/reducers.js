import createReducer from 'app/lib/createReducer';
import * as types from './types';

const initialState = {
    loading: false,
    id: '', 
    author: '', 
    camera: '', 
    cropped_picture: '', 
    full_picture: '', 
};

export const imageReducer = createReducer(initialState, {
    [types.GET_IMAGE_DETAILS_REQUEST]() {
        return {
            ...initialState
        };
    },
    [types.IMAGE_DETAILS_ENABLE_LOADER](state) {
        return {
            ...state,
            loading: true,
        };
    },
    [types.IMAGE_DETAILS_DISABLE_LOADER](state) {
        return {
            ...state,
            loading: false,
        };
    },
    [types.GET_IMAGE_DETAILS_SUCCESS](state, {id, author, camera, cropped_picture, full_picture}) {
        return {
            ...state,
            id,
            author, 
            camera, 
            cropped_picture, 
            full_picture
        };
    },
    [types.GET_IMAGE_DETAILS_FAILED](state) {
        return {
            ...state,
        };
    },
});
