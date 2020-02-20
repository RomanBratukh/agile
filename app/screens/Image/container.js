import { connect } from 'react-redux';
import view from './view';
import * as actions from './actions';

function mapStateToProps(state) {
    return { ...state.imageReducer};
}

function mapDispatchToProps(dispatch) {
    return {
        getImageDetails: (id) => {dispatch(actions.getImageDetails(id));}
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(view);
