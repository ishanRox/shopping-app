import { View, FlatList, Platform, Text } from 'react-native';
import { useSelector } from 'react-redux';
import HeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = props => {

    const orders = useSelector(state => state.orders.orders);

    return (
        <FlatList data={orders}
            renderItem={
                itemData => <OrderItem
                    amount={itemData.item.totalAmount}
                    date={itemData.item.readableDate}
                    items={itemData.item.items}
                />
            }
        />
    )
};

OrdersScreen.navigationOptions = {
    headerTitle: 'Your Orders',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}
    >
        <Item
            title="Menue"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
                console.log('screen changed');
                navData.navigation.toggleDrawer();
            }}
        />
    </HeaderButtons>
};

export default OrdersScreen;