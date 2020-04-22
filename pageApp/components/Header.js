import * as React from 'react';
import { Image, Dimensions,StyleSheet, TouchableOpacity, View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import logo from '../assets/images/logo.png'; 
import {FontAwesome5} from '@expo/vector-icons';

const {width} = Dimensions.get('window')

export default function Header({navigation}){
  return(
    <View style={styles.header}>
    <Image source={logo} style={{ width: 260, height: 60 }} /> 
    <TouchableOpacity style={styles.menu}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <FontAwesome5 name="bars" size={26} color="#fff" />
      </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'black',
      width: width,
      padding: 20,
      maxHeight: 100,
      flexDirection: "row",
      justifyContent: "space-between",
      flex:1,
    },
    menu: {
        alignItems: "flex-end", 
        margin: 14, 
        marginTop: 20,
    }
  });
  