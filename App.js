import { useDeviceOrientation } from '@react-native-community/hooks';
import { useEffect } from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native';
// import "./Button.module.css"
import "./assets/css/dark.css"

import { SafeAreaView } from 'react-native-safe-area-context';

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function App() {
  const orientation = useDeviceOrientation()

  useEffect(() => {
    console.log(orientation)
  }, [orientation])

  return (
    <SafeAreaView styleName="dark">
      <View styleName="tokyo_tm_all_wrap">
        {/* <Text styleName="my-dashed-class">hello some random name is present in here there are other things that are present here</Text> */}
        <TouchableHighlight>
          <Text>hello </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}