import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  const [imageWidth, setImageWidth] = useState(
    Dimensions.get("window").width * 0.6
  );
  useEffect(() => {
    const updateLayout = () => {
      setImageWidth(Dimensions.get("window").width * 0.6);
    };

    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, {});
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game Is Over !</TitleText>
        <View
          style={{
            ...styles.imgContainer,

            width: imageWidth,
            height: imageWidth,
            borderRadius: imageWidth / 2
          }}
        >
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
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>RESTART GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imgContainer: {
    // width: wwidth,
    // height: wwidth,
    // borderRadius: wwidth / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  resultContainer: {
    marginVertical: Dimensions.get("window").height / 60,
    marginHorizontal: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: Dimensions.get("window").width < 350 ? 14 : 20
    // width: "80%"
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});
export default GameOverScreen;
