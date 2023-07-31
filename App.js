import { useDeviceOrientation } from '@react-native-community/hooks';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function App() {
  const orientation = useDeviceOrientation()
  useEffect(() => {
    console.log(orientation)
  }, [orientation])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>hello there</Text>
        <View  style={styles.button} >
          <TouchableNativeFeedback onPress={() => {
            console.log("button pressed");
          }}
          >
            <View>
              <Text style={styles.text}>button pressed</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#e6edf3",
  },
  button: {
    backgroundColor: "#1f6feb",
    width: "fit-content",
    padding: "20 0"
  },
  text: {
    color: "#e6edf3",
    fontWeight: "bold",

  }
});
