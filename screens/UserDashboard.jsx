import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Button, StatusBar } from 'react-native'
import UserImg from '../assets/user.jpeg'
import Ionicons from '@expo/vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Menu from '../components/Menu'

const UserDashboard = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
     <Menu />
      <View style={styles.userContainer}>
        <View style={styles.profile}>
         <Image style={styles.userImg} source={UserImg} />
         <View>
            <Text style={styles.text}>Username</Text>
            <Text>userid</Text>
         </View>
        </View>

        <TouchableOpacity style={styles.links} onPress={() => navigation.navigate('PersonalDetails')}>
        <Entypo name="users" size={24} color="rgb(33, 16, 65)" />
          <Text style={styles.linkText}>Personal Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.links}>
        <MaterialIcons name="account-balance-wallet" size={24} color="rgb(33, 16, 65)" />
          <Text style={styles.linkText}>Add new Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.links}>
        <MaterialIcons name="account-balance" size={24} color="rgb(33, 16, 65)" />
          <Text style={styles.linkText}>Account Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.links}>
        <MaterialIcons name="security" size={24} color="rgb(33, 16, 65)" />
          <Text style={styles.linkText}>Security</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.links}>
        <MaterialIcons name="connect-without-contact" size={24} color="rgb(33, 16, 65)" />
          <Text style={styles.linkText}>Contact us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.links}>
          <Ionicons name="settings" size={32} color="rgb(33, 16, 65)" />
          <Text style={styles.linkText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.links}>
          <AntDesign name="questioncircleo" size={24} color="rgb(33, 16, 65)" />
          <Text style={styles.linkText}>About</Text>
        </TouchableOpacity>

        <Text style={{textAlign: 'center', color: 'rgba(0,0,0,0.5)', marginTop: 60}}>@zorft Technologies</Text>

      </View>
    </View>
  )
}

export default UserDashboard

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: '#fff',
    padding: 14,
    flex: 1
  },
  text:  {  
    fontSize: 17,
    fontWeight: '700'
  },
  profile: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 30
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  container: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#211041',
    width: '100%',
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
    paddingHorizontal: 30
  },
  links: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: 'rgba(0,0,0,0.045)',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  mdBtn: {
    height: 70,
    backgroundColor: '#211041',
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 50
  },
  linkText: {
    fontSize: 17, 
  }
})