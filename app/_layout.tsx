import { View, Text } from 'react-native'


import { Slot } from 'expo-router'
import { useFonts } from 'expo-font';

import { globalStyles } from '@/styles/global-styles';

import * as NavigationBar from 'expo-navigation-bar';
import CalculatorAPP from './index';

NavigationBar.setBackgroundColorAsync('black')

const RootLayout = () => {

  const [] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })
  return (
    <View style={globalStyles.bakcground}>
      <Text>Header</Text>
      <Text style={{ fontSize: 50, fontFamily: 'SpaceMono', color: 'white' }}>CalculatorAPP</Text>
      <Slot />
      <Text >Footer</Text>

    </View>
  )
}

export default RootLayout