import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export default class Tile extends Component {
    render() {
        const { id, image, onPress } = this.props;
        return (
            <TouchableOpacity 
                style={styles.tile}
                onPress={() => onPress(id)}
            >
                <Image
                    style={styles.image}
                    source={{uri: image}}
                />
            </TouchableOpacity>);
    }
}

Tile.propTypes = {
    id: PropTypes.string,
    onPress: PropTypes.func,
    image: PropTypes.string,
};
