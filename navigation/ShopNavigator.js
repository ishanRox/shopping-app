import { createAppContainer } from 'react-navigation';
import Colors from '../constants/Colors';
import ProductsOverViewScreen from '../screens/shop/ProductsOverviewScreen';
import { Platform } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";

import ProductDetailScreen from '../screens/shop/ProductDetailScreen.js';

const ProductNavigator = createStackNavigator(
    {
        ProductsOverview: ProductsOverViewScreen,
        ProductDetail: ProductDetailScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            },
            headerTintColor: Platform.Os === 'android' ? 'white' : Colors.primary
        }
    }
)
export default createAppContainer(ProductNavigator);