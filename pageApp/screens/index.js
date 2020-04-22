import * as React from 'react';
import { Image} from 'react-native';
import { 
    createDrawerNavigator, 
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import logo from '../assets/images/logo.png'; 
import Home from './home';
import myAccount from './myAccount';
import CreateWeb from './pricing';
import Pricing from './myAccount';
import Support from './support';


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Image source={logo} style={{ marginBottom: 20, width: 260, height: 60 }} />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="My Account" component={myAccount} />
        <Drawer.Screen name="Pricing" component={Pricing} />
        <Drawer.Screen name="Support" component={Support} />
        <Drawer.Screen name="Create web" component={CreateWeb} />
      </Drawer.Navigator>
  );
}