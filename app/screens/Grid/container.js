import { connect } from 'react-redux';
import view from './view';
import * as GridActions from './actions';
import * as AuthActions from '../../auth/actions';

function mapStateToProps(state) {
    return { ...state.gridReducer, ...state.authReducer };
}

function mapDispatchToProps(dispatch) {
    return {
        getToken: () => dispatch(AuthActions.getToken()),
        getImageList: (page) => dispatch(GridActions.getImageList(page)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(view);
