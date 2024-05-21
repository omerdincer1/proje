import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const LandCard = ({title,topIcon, botIcon,background}) => {
  return (
    <TouchableOpacity style={[style.root,{backgroundColor:`${background}`}]}>
        <View style={style.iconView}>
            <Icon name={topIcon} color={"white"} size={30}/>
        </View>
        <View style={style.titleView}>
            <Text style={style.titleText}>{title}</Text>
            <Icon name={botIcon} color={"white"} size={30}/>

        </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    root:{
     height:90,
     width:180,
     flexDirection:"column",
     marginHorizontal:10,
     borderRadius:20,
    },
    iconView:{
        padding:10
    },
    titleView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:10
    },
    titleText:{
        fontSize:15,
        fontWeight:"500",
        color:"white"
    }
})
export default LandCard