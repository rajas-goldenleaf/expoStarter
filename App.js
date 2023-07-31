import { useDeviceOrientation } from '@react-native-community/hooks';
import { useEffect } from 'react';
import { Dimensions,StatusBar, SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function App() {
  const orientation = useDeviceOrientation()

  useEffect(() => {
    console.log(orientation)
  }, [orientation])

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text>Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laudantium assumenda pariatur repellat! Odit ullam quaerat vero fugit nesciunt, sapiente alias voluptates sequi omnis nulla suscipit, quidem est perspiciatis laudantium.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginRight: Platform.OS === "android" ? 5  : 0,
    marginLeft: Platform.OS === "android" ? 10  : 0,
  }
});
