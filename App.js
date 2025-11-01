import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Ionicons} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Colors from "./constants/color"
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {

   const HomeStack = () =>{
    return (
      <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} options={{
          header:()=>{
          return (
            <View
              style={{
                height: 80,
                backgroundColor: Colors.PRIMARY,
                
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                flexDirection:'row',
                alignItems:'center',
                // justifyContent:'space-between'
              }}
            >
          
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.backButton}
                >
                  <Ionicons name="arrow-back" size={28} color="#fff" />
                </TouchableOpacity>
                <Text style={{ color: "white", fontSize: 17, fontWeight: 600 }}>
                  Profile
                </Text>
              
            </View>
          );
          }

        }}/>
      </Stack.Navigator>
    );
   }
   const MainTabs=()=>{
    return (
      <Tabs.Navigator screenOptions={{headerShown:false}}>
        <Tabs.Screen name="Home" component={HomeStack} />
      </Tabs.Navigator>
    );
   
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='HomeTabs'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="HomeTabs" component={MainTabs} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );

 
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
