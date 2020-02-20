import React, { PureComponent } from 'react';
import { View, Image, Text, Dimensions} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import ImageZoom from 'react-native-image-pan-zoom';

export default class ImageDetails extends PureComponent {
    componentDidMount() {
        const { getImageDetails, navigation: { getParam } } = this.props;
        const id = getParam('id', 0);
        getImageDetails(id);
    }

    render() {
        const { author, camera, full_picture} = this.props;
        const {width, height} = Dimensions.get('window');
        
        return (
            <View>
                <ImageZoom 
                    cropWidth={width}
                    cropHeight={height*0.7}
                    imageWidth={width*2}
                    imageHeight={height-80}

                    enableCenterFocus={false}
                    onLongPress={this.closeZoomView}
                >
                    <Image style={styles.image}
                        source={{uri: full_picture}}
                    />
                </ImageZoom>
                <Text style={styles.text}>{author}</Text>
                <Text style={styles.text}>{camera}</Text>
            </View>
        
        );
    }
}


ImageDetails.propTypes = {
    author: PropTypes.string,
    camera: PropTypes.string,
    cropped_picture: PropTypes.string,
    full_picture: PropTypes.string,
    getImageDetails: PropTypes.func,
    navigation: PropTypes.shape({
        getParam: PropTypes.func,
    })
};


