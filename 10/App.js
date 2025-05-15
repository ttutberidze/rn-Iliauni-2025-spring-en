import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CategoryListScreen from './screens/CategoryListScreen'
import MovieListScreen from './screens/MovieListScreen';
import MovieScreen from './screens/MovieScreen';
import ThemeContextProvider from './context/themeContext';
import FavoritesScreen from './screens/FavoriteScreen';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import {QueryClientProvider} from '@tanstack/react-query'
import { queryClient } from './config';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
  const movies = useSelector((state) => state.favorites.movies)

  return (
    <Tabs.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: 'yellow'
      }
    }}>
      <Tabs.Screen
        name='Home'
        component={HomeNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen 
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: () => (
            <Image 
              source={require('./assets/heart.png')}
              style={styles.tabIcon}
            />
          ),
          tabBarLabelStyle: {
            color: 'lime'
          },
          tabBarBadge: movies.length,
          tabBarBadgeStyle: {
            backgroundColor: 'lightgreen'
          },
          
        }}
      />
    </Tabs.Navigator>
  )
}

const HomeNavigation = () => {
  return (
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
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeContextProvider>
          <NavigationContainer style={styles.container}>
            <TabNavigation />
            <StatusBar style="auto" />
          </NavigationContainer>
        </ThemeContextProvider>
      </Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    height: 30,
    width: 30
  }
});
