import * as React from 'react';
import { SafeAreaView,
  ScrollView,
  StatusBar,Text,Image,Dimensions, TouchableOpacity, TextInput, StyleSheet, View } from 'react-native'; 
import banner from '../assets/images/banner.jpg'; 
import {FontAwesome5} from '@expo/vector-icons';
import Carousel from '../components/carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Data} from '../data/data';

const {width} = Dimensions.get('window')


function About () {
  return(
    <View style={{backgroundColor:"black", padding: 13}}>
      <Text style = {{color: "white", fontSize: 22, padding: 6}}>About Us</Text>
      <Text style = {{color: "white", fontSize: 18}}>PageCarton makes creating stunning web sites and apps easy, 
        seamless and secure. PageCarton is the perfect tool to build any 
        kind of sites or apps: e-commerce, personal, corporate website or 
        blog. PageCarton is free and based on opensource software. 
        Users would have needed to host/install PageCarton on their own 
        web server, then we figured we can make using PageCarton even 
        easier by giving the option of using a ready-hosted PageCarton. 
        PageCarton.com helps users around the world to use the 
        functionalities of PageCarton without having to install/host their 
        own software.
      </Text>
    </View>
  );
}

function DomainReg () {
  return (
    <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 20, fontWeight: "500"}}>
                CHOOSE A DOMAIN NAME 
              </Text>
              <TextInput style={{borderBottomWidth: 1,fontSize: 16, borderBottomColor:"grey", marginBottom: 7, padding: 10}} placeholder="e.g example.com"/>
              <TouchableOpacity onPress={() => alert('We are still registering!')} style={styles.button}>
                <Text style={styles.buttonText}>
                  Continue Registration 
                </Text>
                <FontAwesome5 style={{paddingLeft: 10}} name="arrow-alt-circle-right" size={28} color="#000" />
              </TouchableOpacity>
            </View>
  );
}

function Banner () {
  return(
    <View>
    <Image source={banner} style={{ width: width, height: 300 }} />
    <View style={styles.banner}>
    </View>
    <View style={{position: "absolute", top: 40}}>
        <Carousel 
        data = {Data}
        />
    </View>
  </View>
  );
}

export default function Home({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
           <Header navigation = {navigation}/>
           <Banner />
            <View style={{flexDirection: "row", padding:10, marginBottom: 20, borderWidth: 1,borderTopColor: "grey", borderBottomColor: "grey"}}>
              <View style={{backgroundColor: "cyan", width: "100%"}}>
              </View>
              <TouchableOpacity onPress={() => alert('We are getting started!')} style={{backgroundColor: "#fff", padding: 15}}>
                <Text style={{fontSize: 16, color: "#000"}}>
                  GET STARTED NOW 
                </Text>
              </TouchableOpacity>
              <View style={{backgroundColor: "cyan", width: "100%"}}>
              </View>
            </View>
            <DomainReg />
            <About />
            <Footer />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#000",
  },
  banner: {
    backgroundColor: 'black',
    opacity: 0.6,
    width: width,
    height: 300,
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#dddddd",
    padding: 15,
    alignItems: "center",
    flexDirection: "row"
  },
  buttonText: {
    fontSize: 17
  }
});