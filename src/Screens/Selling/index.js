import React from "react";
import { View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Text, Touchable } from "../../Common";
import HDMIImage from '../../Assets/hdmi.jpg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Selling = () => {
    return (
        <View style={styles.main}>

            <View style={styles.headView}>
                <Text style={styles.heading}>Selling</Text>
            </View>

            <FlatList data={[1,2,3,4]} renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity style={styles.itemView}>
                        <Image style={styles.listImg} source={HDMIImage} />
                        <View style={{marginLeft:10, paddingBottom:20, borderBottomWidth:1, borderBottomColor:'#CCC', flexDirection:'row',  flex: 1, alignItems:'center' }}>
                            <View style={{  flex:1}}>
                                <Text style={{fontSize:20, }}>HDMI Kvm Switch</Text>
                                <Text>undefined views</Text>
                                <Text style={{fontSize:15, marginVertical:5, width:70, height:27, backgroundColor:'#0099CC', borderRadius:20, color:'#FFF',textAlignVertical:'center', textAlign:'center' }}>ACTIVE</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <Text style={{fontSize:17, color:'#0099CC' }}>Edit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={{marginLeft:25, fontSize:17, color:'#0099CC' }}>See another</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <MaterialIcons name='keyboard-arrow-right' size={30} />
                            </TouchableOpacity>
                        </View>

                    </TouchableOpacity>
                )
            }} />

        </View>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1, },
    heading: { color: '#000', fontWeight: 'bold', marginHorizontal: 10, fontSize: 32, },
    headView: { marginTop: 20, borderBottomColor: '#CCC', borderBottomWidth: 1, paddingBottom: 10, },
    itemView: {marginLeft:10, flexDirection: 'row', alignItems: 'center',marginTop:20, },
    listImg: { borderRadius: 5, width: 110, height: 110, resizeMode: 'contain' },

})

export default Selling;