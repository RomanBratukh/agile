import * as types from './types';


export function getImageDetails(id) {
    return {
        type: types.GET_IMAGE_DETAILS_REQUEST,
        id
    };
}

export function getImageDetailsSuccess({id, author, camera, cropped_picture, full_picture}) {
    return {
        type: types.GET_IMAGE_DETAILS_SUCCESS,
        id, author, camera, cropped_picture, full_picture,
    };
}

export function getImageDetailsFailed(failedText) {
    return {
        type: types.GET_IMAGE_DETAILS_FAILED,
        failedText
    };
}

export function enableLoader() {
    return {
        type: types.IMAGE_DETAILS_ENABLE_LOADER,
    };
}

export function disableLoader() {
    return {
        type: types.IMAGE_DETAILS_DISABLE_LOADER,
    };
}
