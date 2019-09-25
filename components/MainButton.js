import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Colors from "../constants/colors";
const MainButton = props => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.7} onPress={props.onPress}>
        <View style={{ ...styles.button, ...props.style }}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: Dimensions.get("window").width < 350 ? 17 : 25,
    overflow: "hidden"
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Dimensions.get("window").width < 350 ? 8 : 12,

    paddingHorizontal: Dimensions.get("window").width < 350 ? 20 : 30,
    borderRadius: Dimensions.get("window").width < 350 ? 17 : 25
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: Dimensions.get("window").width < 350 ? 14 : 22
  }
});
export default MainButton;
