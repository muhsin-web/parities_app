import { View, Text, StyleSheet, Dimensions, TextInput, Button } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react'

const {width, height} = Dimensions.get('window')
export default function OnBoardingScreen() {
  const navigation = useNavigation()

  const doneBtn = () => (
    navigation.navigate('Login')
  )

  return (
    <View style={styles.container}>
      <Onboarding bottomBarHeight={50}
      nextLabel={'->'}
      transitionAnimationDuration={10}
      onDone={doneBtn}
        pages={[
          {
            backgroundColor: 'rgba(0,0,0,0.94)',
            image: (
                <LottieView style={{width: 0.7 * width, height: width}} source={require('../assets/ani.json')} autoPlay loop/>
            ),
            title: 'Let me get you On Board',
            subtitle: 'This the what am gonna be working on tonight, stay tune for the completion of this project, should be done in 2days',
          },
          {
            backgroundColor: '#000',
            image: (
              <View>
                <LottieView style={{width: 0.7 * width, height: width}} source={require('../assets/animation_llbjaopv.json')} autoPlay loop/>
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lottie: {
    width: 300,
    height: 400
  }
})