import { StyleSheet, View, ImageBackground } from 'react-native';
import GameScreen from './screens/GameScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'comic': require('./assets/fonts/comic.ttf'),
    'comic-bold': require('./assets/fonts/comicbd.ttf'),
  })

  useEffect(() => {
    if(loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])
  
  if (!loaded || error) {
    return null;
  }
  return (
    <LinearGradient 
      style={{flex: 1}}
      colors={['yellow', 'orange', 'lime']}
    >
      <ImageBackground 
        style={styles.imageWrapper} 
        source={require('./assets/splash.jpg')}
        imageStyle={styles.image}
      >
        <View style={styles.container} >
          <GameScreen />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageWrapper: {
    flex: 1,
  },
  image: {
    opacity: 0.4
  }
});
