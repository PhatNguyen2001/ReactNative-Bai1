import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App'
import SignIn from './SignIn'
import SignUp from './SignUp'
// import IconSimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
// import IconOcticons from 'react-native-vector-icons/Octicons';

const Stack = createNativeStackNavigator();
export default function WelcomeScreen(props) {
    return (
       <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen 
                name = "Sign In" 
                component={SignIn}
                options={styles.title}
                />
                <Stack.Screen
                name = "Sign up"
                component={SignUp} 
                option={styles.title}

                />
                
            
            </Stack.Navigator>
       </NavigationContainer>

    
    );
}
const styles = StyleSheet.create({
      title : {
        // headerTitle: 'Sign In',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511ea6',
          },
        headerTitleStyle: {
          color: 'white',
          },
        tabBarIcon:({ color, size }) => (
                      <IconSimpleLineIcon name="login" color={color} size={size} />
                    )

      } , 
})

