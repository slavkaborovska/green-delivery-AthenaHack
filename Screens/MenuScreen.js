import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    SectionList,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    SafeAreaView
} from 'react-native';
import ColourPalette from "../ColourPalette";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from "react-native-vector-icons/Ionicons";
import MenuItem from "../Components/MenuItem";
import RestaurantMenus from "../Resources/RestaurantMenus";
import RestList from "../Resources/RestaurantsList";
import {useNavigation} from "@react-navigation/native";

const MenuScreen = (props) => {

    const navigation = useNavigation();

    const id = props.route.params.idR
    console.log(id)

    const [restaurant,setRestaurant] = useState(
        {
            restaurant_id: 0,
            title: 'Taco Bell',
            category: 'Mexican • Burrito',
            deliveryTime: "20 - 25",
            priceCategory: "££",
            deliveryPrice: 2,
            image: require('../Resources/food.jpg'),
        }
    );
    const [menu,setMenu] = useState(RestaurantMenus.menu1);


    useEffect(() => {
        const rests = RestList.restaurantsList;

        let menuName = "menu0";

        for (let i = 0; i < rests.length; i++) {
            if (rests[i].restaurant_id == id) {
                setRestaurant(rests[i]);
                menuName = "menu"+id;
                setMenu(RestaurantMenus[menuName])
            }
        }

    },[])



    const [total, updateTotal] = useState(0.00);
    const [counter, updateCounter] = useState(0);
    const [order, updateOrder] = useState([]);

    const renderCategories = ({item})=> (
        <TouchableWithoutFeedback style={styles.optionButton} onPress={() => jumpTo(item.title)}>
            <Text style={styles.option}>{item.title}</Text>
        </TouchableWithoutFeedback>
    );

    const jumpTo = (name) => {
        console.log(name);
    }

    const updateCart = (item) => {
        updateTotal((total*100 + item.price*100)/100);
        updateCounter(counter + 1);
        const itemID = item.id;

        for (let i = 0; i < order.length; i++) {
            if (order[i].id == itemID) {
                order[i].quantity += 1;
                return;
            }
        }

        const add = {id: item.id, title: item.title, price: item.price, quantity: 1}
        order.push(add);

    };

    const goToCart = () => {
        console.log("hello from the cart");
        console.log(order);
        navigation.navigate("CartScreen", {order: order, total: total, delivery: restaurant.deliveryPrice});

    }

    const closePage = () => {
        console.log("closing");
        navigation.navigate("DrawerNavigation", {screen: "Restaurants" });
    }


    return(


        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style = {styles.listing}>
                <View style = {styles.upperSection}>

                    <Image style = {styles.image} source={restaurant.image} />
                    <TouchableOpacity  onPress = {closePage} onClick={closePage}>
                        <View style={{paddingTop: 35, paddingRight: 10, alignSelf: 'flex-end'}}>
                            <Icon1   name='close' size={37} color= {ColourPalette.darkGreen} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.lowerSection}>
                    <View style = {styles.lowerLeftSection}>
                        <Text style = {styles.headerText}>{restaurant.title}</Text>
                        <View style = {styles.categoryAndPriceSection}>
                            <Text style = {{color: ColourPalette.darkGreen}}>{restaurant.category}</Text>
                            <Text style = {{color: ColourPalette.darkGreen}}>{restaurant.priceCategory}</Text>
                        </View>
                    </View>
                    <View style = {styles.lowerRightSection}>
                        <Text style = {{color: ColourPalette.darkGreen}}>{restaurant.deliveryTime} min</Text>
                        <Text style = {{color: ColourPalette.darkGreen, opacity: .6}}>£{restaurant.deliveryPrice} delivery</Text>
                    </View>
                </View>
            </View>
            <View style={styles.restaurantInfo}>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>Restaurant info </Text>
                <Text><Icon name='enviroment' size={17} color={'black'}/> Personage row 1-4, G1 1QL</Text>

            </View>
            <View style={styles.horizontalOptions}>
                <FlatList
                    data={menu}
                    renderItem={renderCategories}
                    keyExtractor={item => item.title}
                    horizontal ={true}
                />
            </View>
            <View style={styles.menu}>
                <SectionList
                    sections={menu}
                    renderItem={({item}) => <MenuItem item={item} onPress={()=>updateCart(item)}/>}
                    keyExtractor={(item, index) => index}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.menuHeader}>{title}</Text>
                    )}
                    scrollEnabled={false}
                />
            </View>
            </ScrollView>

            <TouchableHighlight activeOpacity={0.6} underlayColor={ColourPalette.purple} style={styles.bottomPartButton} onPress={goToCart}>
                        <Text style={styles.bottomPartText}>
                            <Icon name='shoppingcart' size={17} color={'black'}/>  Total £{total}  •  {counter} {counter === 1 ? "Item" : "Items"}</Text>
            </TouchableHighlight>

        </SafeAreaView>


    );

}

const {height} = Dimensions.get("screen");

const styles = StyleSheet.create({
    backButton: {
        flex:2,
        marginTop:40,
        marginRight:20,
        position: 'absolute',
        top:0,
        right:0
    },
    container: {
        width: '100%',
        height: height,
    },
    listing: {
        flex:1,
        backgroundColor: '#fff',
        overflow: 'hidden',
        width: '100%',
        elevation: 0.5,
        minHeight: height*0.33,
    },
    restaurantInfo: {
        height: height*0.08,
        backgroundColor: ColourPalette.lightPurple,
        justifyContent: 'center',
        padding: 10,
    },
    horizontalOptions: {
        height: height*0.08,
        justifyContent: 'center',
        alignItems: 'center',
    },

    optionButton: {
        backgroundColor: ColourPalette.purple,
        margin: 7,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    option:{
        color: 'white',
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        // backgroundColor: ColourPalette.purple,
        backgroundColor: ColourPalette.purple,
        margin: 7,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },

    menu: {
        minHeight: '40%',
        paddingHorizontal: 10,
        // backgroundColor: ColourPalette.grey,
    },
    menuHeader:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
    },
    upperSection: {
        flex: 7,
    },
    lowerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 14,
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    lowerLeftSection: {
        flex: 8,
        justifyContent: 'space-between',
    },
    lowerRightSection: {
        flex: 7,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    categoryAndPriceSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
    },
    bottomPartButton:{
        height: height*0.14,
        borderTopWidth: 1.5,
        borderColor: ColourPalette.purple,
        alignItems: 'center',
        elevation: 0.5,
    },
    bottomPartText: {
        fontSize:15,
    }
})


export default MenuScreen;
