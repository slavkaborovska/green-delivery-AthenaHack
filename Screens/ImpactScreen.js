import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View, Image, Text, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ColourPalette from "../ColourPalette";
import Icon from "react-native-vector-icons/Octicons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import Icon2 from 'react-native-vector-icons/AntDesign';
import {ScrollView} from "react-native-gesture-handler";

const ImpactScreen = () => {

    console.disableYellowBox = true;

    const navigation = useNavigation()
    const openSideMenu = () => {
        navigation.openDrawer();
    };

    return (
        <ScrollView>
            <SafeAreaView style={{paddingTop: 50, backgroundColor: 'white'}}>
                <TouchableOpacity onPress={openSideMenu}>
                    <View style={styles.sideMenuButton}>
                        <Icon style={styles.sideMenuButton} name='three-bars' size={37} color={ColourPalette.green}/>
                    </View>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>

                    <View style={{flex: 1, marginLeft: 19}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 70, fontWeight: 'bold', color: "#36383d"}}>45,3</Text>
                            <Text style={{
                                fontSize: 50,
                                fontWeight: 'bold',
                                color: "#36383d",
                                alignSelf: "flex-end",
                                marginBottom: 4
                            }}> kg</Text>
                        </View>
                        <Text style={{marginLeft: 5, fontSize: 16.5}}>CO2 emissions prevented</Text>

                        <View style={{flexDirection: 'row', marginTop: 17}}>
                            <Icon1 style={{alignSelf: "center", marginRight: 10}} name='plus' size={26}
                                   color={ColourPalette.purple}/>
                            <View>
                                <Text style={{
                                    fontSize: 23,
                                    fontWeight: 'bold',
                                    color: "#36383d",
                                    margin: -5,
                                    marginLeft: 1.5
                                }}>243</Text>
                                <Text>containers</Text>
                                <Text>prevented</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 13}}>
                            <Icon1 style={{alignSelf: "center", marginRight: 10}} name='plus' size={26}
                                   color={ColourPalette.green}/>
                            <View>
                                <Text style={{
                                    fontSize: 23,
                                    fontWeight: 'bold',
                                    color: "#36383d",
                                    margin: -5,
                                    marginLeft: 1.5
                                }}>38</Text>
                                <Text>patrol rides</Text>
                                <Text>prevented</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 13}}>
                            <Icon1 style={{alignSelf: "center", marginRight: 10}} name='plus' size={26}
                                   color={ColourPalette.darkGreen}/>
                            <View>
                                <Text style={{
                                    fontSize: 23,
                                    fontWeight: 'bold',
                                    color: "#36383d",
                                    margin: -5,
                                    marginLeft: 1.5
                                }}>30</Text>
                                <Text>containers</Text>
                                <Text>not in the</Text>
                                <Text>ocean</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{
                            fontSize: 34,
                            alignSelf: 'flex-end',
                            marginRight: 30,
                            marginTop: -50,
                            color: ColourPalette.green,
                            fontWeight: 'bold'
                        }}>My GREEN</Text>
                        <Text style={{
                            fontSize: 30,
                            alignSelf: 'flex-end',
                            marginRight: 30,
                            marginTop: -5,
                            color: ColourPalette.green,
                            fontWeight: 'bold'
                        }}>Impact</Text>
                    </View>

                </View>

                <Image style={{width: 325, height: 325, marginLeft: 131, marginTop: -233}}
                       source={{uri: 'https://media.giphy.com/media/Xlrd0dWPniCXxIoG2V/giphy.gif'}}/>

                <Image style={{height: 40, width: 176, alignSelf: "flex-start", marginBottom: 10, marginLeft: 5}}
                       source={require('../Images/social.png')}/>

                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.wm.com/us/en/recycle-right/recycling-101')}>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: "#f0f1fa",
                        padding: 10,
                        borderRadius: 16,
                        margin: 10,

                    }}>
                        <Image source={require('../Resources/LinksImages/recycling.png')}
                               style={{height: 70, width: 70, marginRight: 10}}/>
                        <View style={{justifyContent: 'center', width:'75%'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 17}}>Guide to recycling</Text>
                            <Text>Click to learn about correct ways to recycle</Text>
                        </View>
                        <Icon2 name="bulb1" size={25} color={ColourPalette.purple} style={{marginLeft: 100}}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.thefabuloustimes.com/green-ways-to-travel-around-london/')}>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: "#f0f1fa",
                        padding: 10,
                        borderRadius: 16,
                        margin: 10
                    }}>
                        <Image source={require('../Resources/LinksImages/travelling.png')}
                               style={{height: 70, width: 70, marginRight: 10}}/>
                        <View style={{justifyContent: 'center', width:'75%'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 17}}>Green travelling</Text>
                            <Text>Click to see green ways get around London</Text>
                        </View>
                        <Icon2 name="bulb1" size={25} color={ColourPalette.purple} style={{marginLeft: 100}}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.wessexwater.co.uk/community/blog/14-ways-to-live-a-more-sustainable-lifestyle')}>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: "#f0f1fa",
                        padding: 10,
                        borderRadius: 16,
                        margin: 10
                    }}>
                        <Image source={require('../Resources/LinksImages/sustainable.png')}
                               style={{height: 70, width: 70, marginRight: 10}}/>
                        <View style={{justifyContent: 'center', width:'75%'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 17}}>Sustainable lifestyle</Text>
                            <Text>Click to see the ways you can contribute</Text>
                        </View>
                        <Icon2 name="bulb1" size={25} color={ColourPalette.purple} style={{marginLeft: 100}}/>
                    </View>
                </TouchableOpacity>

            </SafeAreaView>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    sideMenuButton: {
        paddingRight: 10,
        paddingLeft: 5,
        paddingBottom: 5,
    },
});

export default ImpactScreen;
