import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import Routes from './src/routes'


export default function App() {
  
  // Para trazer a informações de quando a fonte acabou de ser carregada
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  // Mostra um sinal de carregando, enquando as fontes carregam
  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    //Fragment
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}