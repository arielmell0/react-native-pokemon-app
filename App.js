import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './src/components/Menu'
import Card from './src/components/Card';
 
export default function App() {
  return (
    <>
      <Menu />
      <Card />
    </>
  )
}