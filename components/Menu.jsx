import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, View, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

const Menu = () => {
    const navigation = useNavigation()
  return (
   <View style={styles.footer}>
   <TouchableOpacity onPress={() => navigation.navigate('Home')}>
     <AntDesign name="home" size={24} color="#fff" />
   </TouchableOpacity>

   <TouchableOpacity>
     <Ionicons name="analytics" size={24} color="#fff" />
   </TouchableOpacity>

   <TouchableOpacity style={styles.mdBtn}>
     <Feather name="send" size={24} color="#fff" />
   </TouchableOpacity>

   <TouchableOpacity>
     <AntDesign name="creditcard" size={24} color="#fff" />
   </TouchableOpacity>

   <TouchableOpacity onPress={() => navigation.navigate('User')}>
     <Entypo name="users" size={24} color="#fff" />
   </TouchableOpacity>
 </View>
  )
}

export default Menu

const styles = StyleSheet.create({
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
})