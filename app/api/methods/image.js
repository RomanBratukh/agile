import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export function getImageDetails(id) {
    return Api(ApiConstants.IMAGE_DETAILS+id, null, 'GET');
}

export function getImageList(page=1) {
    return Api(ApiConstants.IMAGES + page, null, 'GET');
}
