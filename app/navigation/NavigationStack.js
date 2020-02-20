import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Grid from 'app/screens/Grid';
import Image from 'app/screens/Image';

const RNApp = createStackNavigator(
    {
        Grid: {
            screen: Grid,
        },
        Image: {
            screen: Image,
        },
    },
    {
        initialRouteName: 'Grid',
    },
);

export default createAppContainer(RNApp);
