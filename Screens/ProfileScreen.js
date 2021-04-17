import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View, Image, ImageBackground, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ColourPalette from "../ColourPalette";
import Icon from "react-native-vector-icons/Octicons";
import Icon1 from "react-native-vector-icons/FontAwesome5";

const ProfileScreen = () => {


    const navigation = useNavigation()
    const openSideMenu = () => {
        navigation.openDrawer();
    };

    return (
        <SafeAreaView style = {{paddingTop: 50, backgroundColor: 'white', height: '100%'}}>


            <TouchableOpacity onPress={openSideMenu}>
                <View style={styles.sideMenuButton}>
                    <Icon style={styles.sideMenuButton} name='three-bars' size={37} color= {ColourPalette.green} />
                </View>
            </TouchableOpacity>

            <Image style = {{alignSelf: "center", height: 150, width:150, marginBottom: 50}} source={require('../Images/profilePhoto.jpg')}/>

            <View style = {{flexDirection: 'row', alignItems: "center", justifyContent: "space-between", backgroundColor: '#f4f5fa', borderRadius: 15, height: 70, paddingLeft: 15, margin:10}}>
                <View>
                <Text >Name</Text>
                    <Text style={{alignSelf: "flex-start", fontWeight: "bold"}}>Slavka Borovska</Text>
                </View>
                <View>
                    <Icon1 style={{alignSelf: "flex-end", marginRight: 15}} name='pen' size={25} color= {ColourPalette.purple} />
                </View>
            </View>
            <View style = {{flexDirection: 'row', alignItems: "center", justifyContent: "space-between", backgroundColor: '#f4f5fa', borderRadius: 15, height: 70, paddingLeft: 15, margin:10}}>
                <View>
                <Text >Email</Text>
                    <Text style={{alignSelf: "flex-start", fontWeight: "bold"}}>slavkaborovska@gmail.com</Text>
                </View>
                <View>
                    <Icon1 style={{alignSelf: "flex-end", marginRight: 15}} name='pen' size={25} color= {ColourPalette.purple} />
                </View>
            </View>
            <View style = {{flexDirection: 'row', alignItems: "center", justifyContent: "space-between", backgroundColor: '#f4f5fa', borderRadius: 15, height: 80, paddingLeft: 15, margin:10}}>
                <View>
                    <Text >Phone</Text>
                    <Text style={{alignSelf: "flex-start", fontWeight: "bold"}}>+44 8484 567838</Text>
                    <View style={{flexDirection: 'row',backgroundColor: "#a8fadf", height: 23,width: 79, justifyContent: "center", borderRadius:10}}>
                        <Text style={{alignSelf: "flex-start"}}>✓ verified</Text>
                    </View>
                </View>
                <View>
                    <Icon1 style={{alignSelf: "flex-end", marginRight: 15}} name='pen' size={25} color= {ColourPalette.purple} />
                </View>
            </View>

            <View style = {{flexDirection: 'row', alignItems: "center", justifyContent: "space-between", backgroundColor: '#f4f5fa', borderRadius: 15, height: 70, paddingLeft: 15, margin:10}}>
                <View>
                <Text >Address</Text>
                    <Text style={{alignSelf: "flex-start", fontWeight: "bold"}}>G1 1QL, 1-4 Personage row</Text>
                </View>
                <View>
                    <Icon1 style={{alignSelf: "flex-end", marginRight: 15}} name='pen' size={25} color= {ColourPalette.purple} />
                </View>
            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    sideMenuButton: {
        paddingRight: 15,
        paddingLeft: 10,
        paddingBottom: 5,
    },
});

export default ProfileScreen;
