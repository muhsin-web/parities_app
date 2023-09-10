import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Text, Button, Image, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

const LoginScreen = () => {
   const navigation = useNavigation()
   const [loginInfo, setLoginInfo] = useState({
      email: '',
      password: ''
   })

   const credentials = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    };

   // console.log(loginInfo)

   const submitLogs = async () => {
      try {
         const response = await fetch('https://reqres.in/api/login', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json', // Specify the content type as JSON
               },
               body: JSON.stringify(loginInfo),
            })
               if(response.status == 200){
                  const data = await response.json()
                  const token = data.token
                  await AsyncStorage.setItem('token', token)
                  navigation.navigate('Home')
                  Toast.show({
                     type: 'success',
                     position: 'top',
                     text1: 'Success',
                     text2: 'Login successful',
                     visibilityTime: 600
                  })
               }else{
                  Toast.show({
                     type: 'error',
                     position: 'top',
                     text1: 'Error',
                     text2: 'incorrect password or email',
                     visibilityTime: 600
                  })
                  console.log('error login')
               }
            console.log(response.status)

      } catch (error) {
         console.log(error)
      }
   }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.header}>Welcome Back  !</Text>
      <Image style={styles.img} source={Logo}/>
      <TextInput
        placeholderTextColor={'#f7dee9'}
        placeholder="Email"
        style={styles.input}
        onChangeText={(value)=> setLoginInfo(info => ({...info, email: value}))}
         value={loginInfo.email}
      />

      <TextInput
         // secureTextEntry={true}
         placeholderTextColor={'#f7dee9'}
         placeholder="Password"
         style={styles.input}
         onChangeText={(value)=> setLoginInfo(info => ({...info, password: value}))}
         value={loginInfo.password}
      />

      <TouchableOpacity onPress={submitLogs} style={styles.btn}>
         <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.text}>you dont have an account?</Text>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#231942'
   },
   input: {
      marginBottom: 15,
      padding: 12,
      borderColor: 'red',
      backgroundColor: '#5e548e',
      borderRadius: 10,
      width: '85%',
      color: '#fff'
   },
   btn: {
      width: '85%',
      backgroundColor: '#211041',
      color:'red',
      padding: 20,
      marginBottom: 15,
      borderRadius: 20
   }, 
   header: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
   },
   btnText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
      letterSpacing: 5
   },
   text: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
   },
   img: {
      marginBottom: 20
   }
})