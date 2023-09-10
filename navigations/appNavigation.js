import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';
import UserDashboard from '../screens/UserDashboard';
import PersonalDetails from '../screens/PersonalDetails';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

  const isUserAuthenticated = async () => {
    const token = await AsyncStorage.getItem('token');
    return !!token; // Returns true if the token exists; otherwise, false
    console.log(token, 'muhsin')
  };

    const [authenticated, setAuthenticated] = useState(false);
  
    useEffect(() => {
      // Check user authentication status when the component mounts
      isUserAuthenticated().then((result) => {
        setAuthenticated(result);
      });
    }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        {authenticated ? (
          <>
            <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
            <Stack.Screen name="User" options={{headerShown: false}} component={UserDashboard}/>
            <Stack.Screen name="PersonalDetails" options={{headerShown: false, animationTypeForReplace: 'push', animation:'slide_from_left'}} component={PersonalDetails}/>
          </>
        ) : (
          <>
            <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnBoardingScreen}/>
            <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation