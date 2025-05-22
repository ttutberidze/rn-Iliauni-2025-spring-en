import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Image } from 'react-native';
import {CameraView, useCameraPermissions} from 'expo-camera'
import { useEffect, useRef, useState } from 'react';
import {usePermissions as useMediaLibraryPermission, saveToLibraryAsync} from 'expo-media-library';

export default function App() {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions()
  const [mediaLibraryPermission, requestMediaLibraryPermission] = useMediaLibraryPermission();
  const [facing, setFacing] = useState('back');
  const [picture, setPicture] = useState();
  const cameraRef = useRef()

  useEffect(() => {
    requestCameraPermission()
  }, [])

  if(!cameraPermission) {
    return <View />
  }

  if(!cameraPermission.granted) {
    return (
      <View>
        <Text>Camera permission is needed</Text>
        <Button title='Grant Permission' onPress={() => requestCameraPermission()} />
      </View>
    )
  }

  const takePicture = async () => {
    const picture = await cameraRef.current.takePictureAsync()
    setPicture(picture)
  }

  const flip = () => {
    setFacing((prev) => prev === 'back' ? 'front' : 'back')
  }

  const savePicture = async () => {
    console.log(mediaLibraryPermission)
    if (mediaLibraryPermission.status !== 'granted') {
      await requestMediaLibraryPermission();
    }
    if (mediaLibraryPermission.status === 'granted') {
      await saveToLibraryAsync(picture.uri)
      console.log('Saved')
    }
  }

  return (
    <View style={styles.container}>
      {!picture ? (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <Button title="Flip the camera" onPress={flip} />
        <Button title='Take a picture' onPress={takePicture} />
      </CameraView>
      ) : (
        <View style={styles.picture}>
          <Button title='Store Picture' onPress={savePicture} />
          <Image source={picture} style={{height: '50%'}} />
          <Button title='Store Picture' onPress={savePicture} />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  picture: {
    backgroundColor: 'red'
  }
});
