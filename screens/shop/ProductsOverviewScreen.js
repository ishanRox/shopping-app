
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';


const ProductsOverViewScreen = (props) => {
    const products = useSelector(state => {
        console.log(state);
        return state.products.availableProducts;
    });

    const dispatch=useDispatch();
    console.log(products);
    return (
        <FlatList data={products} renderItem={
            itemData => <ProductItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                
                onViewDetail={() => {
                    props.navigation.navigate(
                        'ProductDetail',
                        {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                        }
                    );
                }}
                
                onAddToCart={() => {
                    console.log('add to cart');
                    dispatch(cartActions.addToCart(itemData.item));
                 }}
            />
        } />
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

ProductsOverViewScreen.navigationOptions = {
    headerTitle: 'All Products'
};

export default ProductsOverViewScreen;