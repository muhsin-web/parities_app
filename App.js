import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppNavigation from './navigations/appNavigation';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native'

export default function App() {
  return (
    <>
      <AppNavigation />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});
