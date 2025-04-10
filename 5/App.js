import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryListScreen from './screens/CategoryListScreen'
import MovieListScreen from './screens/MovieListScreen';
import MovieScreen from './screens/MovieScreen';
import ThemeContextProvider from './context/themeContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: 'lightgreen',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }}>
          <Stack.Screen 
            name='CategoryList' 
            component={CategoryListScreen}
            options={{
              title: 'Categories',
            }}
          />
          <Stack.Screen 
            name='MovieList' 
            component={MovieListScreen} 
          />
          <Stack.Screen 
            name='Movie' 
            component={MovieScreen} 
          />
          </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
