import React, { PureComponent } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Tile }  from '../../components';
import PropTypes from 'prop-types';
import * as R from 'ramda';

export default class Grid extends PureComponent {
    componentDidMount() {
        const { getImageList, getToken, authorised } = this.props;
        if(!authorised) {
            getToken();
        }
        getImageList();
    }

    tilePressed = (id) => {
        const { navigation: {navigate}} = this.props;
        navigate({
            routeName: 'Image',
            params: { id },
            key: id,
        });
    }

    loadMorePictures = () => {
        const { getImageList, page, hasMore } = this.props;
        if(hasMore) {
            getImageList(page+1);
        }
    }

    updateList = () => {
        const { getImageList } = this.props;
        getImageList();
    }

    render() {
        const { loading, pictures } = this.props;
    
        const placeholder = R.repeat({image: ''}, 20);
        return (<FlatList
            onEndReached={this.loadMorePictures}
            data={loading? [...pictures, ...placeholder]: pictures}
            refreshControl={<RefreshControl
                refreshing={loading && !pictures}
                onRefresh={this.updateList}
            />}
            renderItem={({ item }) => <Tile id={item.id} image={item.cropped_picture} onPress={this.tilePressed}/>}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
        />
        );
    }
}

Grid.propTypes = {
    loading: PropTypes.bool,
    page: PropTypes.number,
    hasMore: PropTypes.bool,
    pictures: PropTypes.any,
    getImageList: PropTypes.func,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
    getToken: PropTypes.func,
    authorised: PropTypes.bool,
};

