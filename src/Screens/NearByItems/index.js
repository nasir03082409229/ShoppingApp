import React from "react";
import { View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Text, Touchable } from "../../Common";
import HDMIImage from '../../Assets/hdmi.jpg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const NearByItems = () => {
    return (
        <View style={styles.main}>

            <View style={styles.seachView}>
                <FontAwesome name="search" size={30} color="#888" />
                <TextInput placeholder={'Search'} style={styles.searchInp} />
            </View>

            <View style={styles.headView}>
                <EvilIcons name="location" size={30} color="#444" />
                <Text style={styles.heading}>Search nearby items</Text>
            </View>

            <FlatList horizontal={true} data={[1,2,3]} renderItem={({item, index})=>{
                return(
                    <TouchableOpacity style={styles.itemView}>
                        <Image style={styles.listImg} source={HDMIImage}/>
                    </TouchableOpacity>
                )
            }}/>

            {/* <Icon name="rocket" size={30} color="#900" /> */}
            {/* <Text>Splash</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1, padding: 10, },
    seachView: { padding: 10, borderRadius: 10, backgroundColor: '#CCCCCC50', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', },
    searchInp: { color: '#666', marginLeft: 10, padding: 0, fontSize: 20, height: 30, flex: 1, },
    heading: {color:'#000', fontWeight:'bold'},
    headView: {marginVertical:20, flexDirection: 'row' },
    itemView:{ marginRight:10, width:150, height:150,},
    listImg:{ borderRadius:10, width:'100%', height:'100%', resizeMode:'contain'},

})

export default NearByItems;