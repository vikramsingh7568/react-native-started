import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';

import  Firm from './components/externalApp/firm/Firm'
import Dropdownlist from './components/externalApp/firm/Dropdownlist'
export default function App() {
  return (
    <View>
    <Firm/>
    <Dropdownlist/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto"/>
    </View>
  );
}
