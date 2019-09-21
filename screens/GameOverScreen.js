import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";
const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game Is Over !</TitleText>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/05/matterhorn-3x21.jpg"
          // }}
          style={styles.image}
          resizeMode="cover"
          fadeDuration={500}
        />
      </View>
      <BodyText style={styles.resultText}>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
        guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>

      <MainButton onPress={props.onRestart}>RESTART GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 20,
    width: "80%"
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});
export default GameOverScreen;
