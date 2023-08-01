import { useDeviceOrientation } from '@react-native-community/hooks';
import { useEffect } from 'react';
import { Dimensions, StatusBar, SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import "./Button.module.css"

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function App() {
  const orientation = useDeviceOrientation()

  useEffect(() => {
    console.log(orientation)
  }, [orientation])

  return (
    <SafeAreaView>
      <Text styleName="my-dashed-class">hello lorem some random name is present in here there are other things that are present here</Text>
    </SafeAreaView>
  );
}