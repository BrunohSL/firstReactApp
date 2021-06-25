import React, { useState } from 'react';
import * as Font from 'expo-font'
import Home from './screens/home';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require("./assets/Fonts/Nunito-Regular.ttf"),
  'nunito-bold': require("./assets/Fonts/Nunito-Bold.ttf"),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
