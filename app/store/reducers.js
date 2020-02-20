import * as gridReducer from '../screens/Grid/reducers';
import * as imageReducer from '../screens/Image/reducers';
import * as authReducer from '../auth/reducer';
export default Object.assign(gridReducer, imageReducer, authReducer);
