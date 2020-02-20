import * as types from './types';


export function enableLoader() {
    return {
        type: types.GRID_ENABLE_LOADER,
    };
}

export function disableLoader() {
    return {
        type: types.GRID_DISABLE_LOADER,
    };
}

export function getImageList(page) {
    return {
        type: types.GET_IMAGE_LIST_REQUEST,
        page
    };
}

export function getImageListSuccess({pictures, page, pageCount, hasMore}) {
    return {
        type: types.GET_IMAGE_LIST_SUCCESS,
        pictures, 
        page, 
        pageCount, 
        hasMore,
    };
}

export function getImageListFailed(error) {
    return {
        type: types.GET_IMAGE_LIST_FAILED,
        error
    };
}
