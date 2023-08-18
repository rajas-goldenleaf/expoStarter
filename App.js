import { useDeviceOrientation } from '@react-native-community/hooks';
import { useEffect } from 'react';
import {
	Dimensions,
	StatusBar,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableNativeFeedback,
	View,
	Image,
} from 'react-native';
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
			<View styleName="tokyo_tm_all_wrap" data-enter="fadeInUp">
				{/* <Text styleName="my-dashed-styleName">hello some random name is present in here there are other things that are present here</Text> */}
				<View styleName="tokyo_tm_topbar">
					<View styleName="topbar_inner">
						<View styleName="logo" data-type="image">
							{/* <a href="#"> */}
							
							<Image source={require("./assets/img/logo/logo.png")} />
							<Text>TOKYO</Text>
							{/* </a> */}
						</View>
						<View styleName="trigger">
							<View styleName="hamburger hamburger--slider">
								<View styleName="hamburger-box">
									<View styleName="hamburger-inner"></View>
								</View>
							</View>
						</View>
					</View>
				</View>

			</View>
		</SafeAreaView>
	);
}