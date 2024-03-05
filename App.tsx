import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { OneSignal } from 'react-native-onesignal'

import { THEME } from './src/theme';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';

OneSignal.initialize("7e578caf-d7ba-4fed-b468-698e13c453e2")

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}