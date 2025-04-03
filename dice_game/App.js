import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import GameScreen from './screens/GameScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'comic': require('./assets/fonts/comic.ttf'),
    'comic-bold': require('./assets/fonts/comicbd.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient 
      style={styles.container}
      colors={['yellow', 'orange', 'lime']}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        style={styles.container}
        source={require('./assets/splash.jpg')}
        imageStyle={styles.image}
      >
        <SafeAreaView>
          <GameScreen />
        </SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  image: {
    opacity: 0.1
  }
});
