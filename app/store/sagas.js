import { all } from 'redux-saga/effects';
import { gridSagas } from '../screens/Grid/sagas';
import { imageSagas } from '../screens/Image/sagas';
import { authSagas } from '../auth/sagas';

export default function* rootSaga() {
    yield all([
        ...gridSagas,
        ...imageSagas,
        ...authSagas,
    ]);
}
