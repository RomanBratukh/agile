import { StyleSheet } from 'react-native';
import { color } from '../../config/styles';

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
    },
    tile: {
        aspectRatio: 1,
        backgroundColor: color.COLOR_GREY, 
        flex: 0.5,
        margin: 4
    }, 
});

export default styles;
