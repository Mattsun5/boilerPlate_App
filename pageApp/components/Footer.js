import * as React from 'react';
import {Dimensions, TouchableOpacity, StyleSheet, View } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const {width} = Dimensions.get('window')


export default function Footer () {
  return (
    <View style={styles.footer}>
                <TouchableOpacity>
                  <FontAwesome.Button name="facebook" backgroundColor="transparent" onPress={()=>alert('facebook')}>
                  </FontAwesome.Button>
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome.Button name="twitter" backgroundColor="transparent" onPress={()=>alert('twitter')}>
                  </FontAwesome.Button>
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome.Button name="linkedin" backgroundColor="transparent" onPress={()=>alert('linkedin')}>
                  </FontAwesome.Button>
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome.Button name="instagram" backgroundColor="transparent" onPress={()=>alert('instagram')}>
                  </FontAwesome.Button>
                </TouchableOpacity>
              
            </View>
  );
}


const styles = StyleSheet.create({
   footer: {backgroundColor: "cyan",
   flexDirection: "row",
   justifyContent: "space-around", 
   width: width, 
   padding: 20}
  });