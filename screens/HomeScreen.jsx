import React, { useEffect, useState } from 'react'
import { Image, Text, SafeAreaView, ImageBackground, TouchableOpacity, View, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Menu from '../components/Menu'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2', {
            method: 'GET',
         })
            if(response.status == 200){
               const feedBack = await response.json()
               setUsers(feedBack.data)
            }else{
                console.log('error login')
            }
         console.log(response.status)

   } catch (error) {
      console.log(error)
   }
  }

  const Nav = () => (
    <View style={{marginVertical: 10, marginBottom: 20, shadowOffset: {width: 20, height: 14}, elevation: 10, shadowRadius: 3, shadowColor: '#171717',   shadowOpacity: 1, paddingHorizontal: 20, gap: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <View style={{flex: 2}}>
        <Text style={{fontWeight: '700'}}>Good morning User</Text>
      </View>

      <TextInput style={{ backgroundColor: 'rgba(0,0,0,0.07)', paddingHorizontal: 10, borderRadius: 20, paddingVertical: 10, flex: 3,}} placeholder='search for a friend'/>

      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <MaterialIcons name="filter-list" size={24} color="black" />
      </View>
    </View>
  )
  useEffect(()=> {
    getUsers()
  }, [])
  console.log('muhsin', users)

  const Cards = ({item}) => (
    <ImageBackground borderRadius={20} source={{uri: item.avatar}} style={styles.card}>
      <View style={styles.overlay}>
        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{uri: item.avatar}}/>
        <Text style={{color: '#fff', fontSize: 17, fontWeight: '600'}}>{item.first_name} {item.last_name}</Text>
      </View>
    </ImageBackground>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
    <Nav />
    <ScrollView style={{marginBottom: 60}}>
      <FlatList 
        renderItem={({item}) => <Cards item={item}/>}
        data={users}
        contentContainerStyle={{marginHorizontal: 10, gap: 10, marginVertical: 5}}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <FlatList 
          renderItem={({item}) => <Cards item={item}/>}
          data={users}
          contentContainerStyle={{marginHorizontal: 10, gap: 10, marginVertical: 5}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

      <FlatList 
          renderItem={({item}) => <Cards item={item}/>}
          data={users}
          contentContainerStyle={{marginHorizontal: 10, gap: 10, marginVertical: 5}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

      <FlatList 
          renderItem={({item}) => <Cards item={item}/>}
          data={users}
          contentContainerStyle={{marginHorizontal: 10, gap: 10, marginVertical: 5}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

    </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  card: {
    width: 150,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 20,
    height: 200,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'space-between'
  }

});