import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export function getToken() {
    return Api(ApiConstants.AUTH, {apiKey: ApiConstants.API_KEY}, 'POST');
}
