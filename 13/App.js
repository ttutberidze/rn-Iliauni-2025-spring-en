import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Animated, View, Dimensions } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { useEffect, useRef } from 'react';

const {width, height} = Dimensions.get('window')

export default function App() {
  const position = useRef(new Animated.ValueXY({x: width / 2 - 30, y: height / 2 - 30})).current;

  useEffect(() => {
    const subscription = Accelerometer.addListener(({x, y}) => {
      let newX = position.x._value - x * 20
      let newY = position.y._value + y * 20

      newX = Math.max(0, Math.min(width - 60, newX))
      newY = Math.max(0, Math.min(height - 60, newY))
      position.setValue({x: newX, y: newY})
    })
    Accelerometer.setUpdateInterval(50);
    return () => subscription.remove()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {transform: position.getTranslateTransform()}]} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    position: 'absolute'
  }
});
