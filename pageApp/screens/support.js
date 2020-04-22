import * as React from 'react';
import {SafeAreaView,
  ScrollView,
  Text,Button,Dimensions,StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { height} = Dimensions.get('window')




export default function Support({ navigation }) {
  return (
    <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
        <View style={{minHeight: height}}>
          <Header navigation={navigation}/>
          <View style={styles.container}>
            <Text style={{color: "#000"}}>Support</Text>
            <Button onPress={() => navigation.goBack()} title="Go back" />
          </View>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: "#000",
    },
   
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'

    },
  });