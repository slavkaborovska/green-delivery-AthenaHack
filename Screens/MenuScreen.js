import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View, SectionList, TouchableHighlight} from 'react-native';
import ColourPalette from "../ColourPalette";
import {SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import MenuItem from "../Components/MenuItem";
import RestaurantMenus from "../Resources/RestaurantMenus";

const MenuScreen = ({rId}) => {
    console.log(rId);
    let id = global.currentListing
    let m;
    if(id == 1){
        m = RestaurantMenus.menu1
    }else if(id == 2){
        m = RestaurantMenus.menu2
    }else if(id == 3){
        m = RestaurantMenus.menu3
    }else if(id == 4){
        m = RestaurantMenus.menu4
    }else if(id == 5){
        m = RestaurantMenus.menu5
    }else if(id == 6){
        m = RestaurantMenus.menu6
    }else if(id == 7){
        m = RestaurantMenus.menu7
    }else if(id == 8){
        m = RestaurantMenus.menu8
    }else if(id == 9){
        m = RestaurantMenus.menu9
    }else if(id == 10){
        m = RestaurantMenus.menu10
    }else if(id == 11){
        m = RestaurantMenus.menu11
    }else if(id == 12){
        m = RestaurantMenus.menu12
    }else if(id == 13){
        m = RestaurantMenus.menu13
    }else if(id == 14){
        m = RestaurantMenus.menu14
    }else if(id == 15){
        m = RestaurantMenus.menu15
    }

    // console.log(restaurantMenu);
    // const m = RestaurantMenus.menus;


    const [total, updateTotal] = useState(0.00);
    const [counter, updateCounter] = useState(0);

    const box = {
        id: 0,
        title: 'Reusable box',
        description: 'One fancy fancy fancy fancy super fancy duddy',
        price: 3.99,
        image: require('../Resources/food.jpg')
    };

    const restaurant = {
        restaurant_id: 1,
        title: 'Taco Bell',
        category: 'Mexican • Burrito',
        deliveryTime: "20 - 25",
        priceCategory: "££",
        deliveryPrice: 2,
        image : require('../Resources/food.jpg')
    };

    const [menu, setMenu] = useState(m);


    const renderCategories = ({item})=> (
        <Text style={styles.option}>{item.title}</Text>
    );

    const updateCart = (item) => {
        updateTotal((total*100 + item.price*100)/100);
        updateCounter(counter + 1);
    };

    const goToCart = () => {
        console.log("hello from the cart");
    }


    return(


        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style = {styles.listing}>
                <View style = {styles.upperSection}>
                    <Image style = {styles.image} source={restaurant.image} />
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
                <MenuItem item={box} onPress={()=>updateCart(box)}/>
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

            <TouchableHighlight activeOpacity={0.6} underlayColor={ColourPalette.lightPurple} style={styles.bottomPartButton} onPress={goToCart}>
                        <Text style={styles.bottomPartText}>Total £{total}  •  {counter} {counter === 1 ? "Item" : "Items"}</Text>
            </TouchableHighlight>

        </SafeAreaView>



    )

}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    listing: {
        flex:1,
        backgroundColor: '#fff',
        overflow: 'hidden',
        width: '100%',
        elevation: 0.5,
        minHeight: 200,
    },
    restaurantInfo: {
        height: '4%',
        backgroundColor: ColourPalette.lightPurple,
        justifyContent: 'center',
        padding: 10,
    },
    horizontalOptions: {
        height: '3.5%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    option:{
        backgroundColor: ColourPalette.purple,
        color: 'white',
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 7,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

        // height:'75%',

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
    bottomPart: {
        backgroundColor: ColourPalette.lightPurple,
        height: '7%',
        borderTopWidth: 1.5,
        borderColor: ColourPalette.purple,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0.5,
    },
    bottomPartButton:{
        // backgroundColor: 'white',
        height: '7%',
        borderTopWidth: 1.5,
        borderColor: ColourPalette.purple,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0.5,
    },
    bottomPartText: {
        fontSize:15,
    }
})


export default MenuScreen
