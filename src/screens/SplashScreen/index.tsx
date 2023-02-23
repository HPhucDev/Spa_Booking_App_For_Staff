import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import assets from "../../assets/images";
import { height, width } from "../../utils/systemUtils";
import SignIn from "../Authentication/SignIn";

const BGColor = "#4D4A95";

export default function SplashScreen() {
  // SafeArea Value...
  const edges = useSafeAreaInsets();

  // Animation Values....
  const startAnimation = useRef(new Animated.Value(0)).current;

  // Scaling Down Both logo and Title...
  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;

  // Offset Animation....
  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  // Animating COntent...
  const contentTransition = useRef(new Animated.Value(height)).current;

  // Animation Done....
  useEffect(() => {
    // Starting Animation after 500ms....
    setTimeout(() => {
      // Parallel Animation...
      Animated.parallel([
        Animated.timing(startAnimation, {
          // For same Height for non safe Area Devices...
          toValue: -height + (edges.top + 8),
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          // Scaling to 0.35
          toValue: 0.3,
          useNativeDriver: true,
        }),
        Animated.timing(scaleTitle, {
          // Scaling to 0.8
          toValue: 0.8,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          // Moving to Right Most...
          toValue: {
            x: -width / 3,
            y: height / 2 - 0,
          },
          useNativeDriver: true,
        }),
        Animated.timing(moveTitle, {
          // Moving to Right Most...
          toValue: {
            x: 0,
            // Since image size is 100...
            y: height / 2 - 90,
          },
          useNativeDriver: true,
        }),
        Animated.timing(contentTransition, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000);
  }, []);

  // Going to Move Up like Nav Bar...
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          zIndex: 1,
          transform: [{ translateY: startAnimation }],
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animated.Image
            source={assets.logoYoko}
            style={{
              width: "65%",
              height: "22%",
              transform: [
                { translateX: moveLogo.x },
                { translateY: moveLogo.y },
                { scale: scaleLogo },
              ],
            }}
          ></Animated.Image>
        </Animated.View>
      </Animated.View>

      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,0.04)",
          zIndex: 0,
          transform: [{ translateY: contentTransition }],
        }}
      >
        <SignIn />
      </Animated.View>
    </View>
  );
}
