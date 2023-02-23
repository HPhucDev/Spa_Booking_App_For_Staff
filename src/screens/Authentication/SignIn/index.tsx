import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// import localizer from "../../../localization";
import styles from "./styles";
import { height, width } from "../../../utils/systemUtils";
import colors, { linearGradient } from "../../../themes/colors";
import assets from "../../../assets/images";
import icons from "../../../assets/icons";
const bookGuestBtnColor = ["#FEA981", "#FF3576"];

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.mainContainer, mainStyles.loadedStyle]}>
        <Image style={styles.backgroundImage} source={assets.authBackground} />
        <View style={styles.topMain}>
          <View style={[styles.header]}>
            <TouchableOpacity style={[styles.languageSelector]}>
              {"en-US" == "en-US" ? (
                <Image style={styles.languageImg} source={icons.viIcon} />
              ) : (
                <Image style={styles.languageImg} source={icons.enIcon} />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <View style={[styles.guestWrapper, styles.login]}>
              <View style={styles.guestIconWrapper}>
                <Image style={styles.imgSpa} source={icons.spaIcon} />
              </View>
              <TouchableOpacity style={[styles.guestTextWrapper]}>
                <LinearGradient
                  start={linearGradient.start}
                  end={linearGradient.end}
                  colors={bookGuestBtnColor}
                  style={[styles.guestBtn]}
                >
                  <Text allowFontScaling={false} style={styles.bookText}>
                    {/* {localizer.t("Login.Booking_now")} */}
                  </Text>
                  <Text allowFontScaling={false} style={styles.buttonText}>
                    {/* {localizer.t("Login.Dont_need_account")} */}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <LinearGradient
                start={linearGradient.start}
                end={linearGradient.end}
                colors={linearGradient.colorBtn}
                style={[styles.buttonWrapper, styles.login]}
              >
                <Text allowFontScaling={false} style={styles.buttonText}>
                  {/* {localizer.t("Login.Login")} */}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <View style={styles.signupWrapper}>
              <Text
                allowFontScaling={false}
                style={[mainStyles.cWhite, mainStyles.fMontR]}
              >
                {/* {localizer.t("Login.Not_account_yet")}?{" "} */}
              </Text>
              <TouchableOpacity>
                <Text allowFontScaling={false} style={styles.signupText}>
                  {/* {localizer.t("Login.Register")} */}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.otherLogin}>
          <TouchableOpacity
            style={[
              styles.btnOther,
              styles.loginFacebook,
              // mainStyles.mb10,
              Platform.OS === "android" && styles.btnForAndroid,
            ]}
          >
            <View style={[styles.btnOtherContent]}>
              <FontAwesome
                size={17}
                style={styles.buttonIcon}
                name="facebook"
              />
              <Text allowFontScaling={false} style={styles.buttonText}>
                {/* {localizer.t("Login.Facebook")} */}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnOther,
              styles.loginGoogle,
              Platform.OS === "android" && styles.btnForAndroid,
            ]}
          >
            <View style={[styles.btnOtherContent]}>
              <FontAwesome size={13} style={styles.buttonIcon} name="google" />
              <Text allowFontScaling={false} style={styles.buttonText}>
                {/* {localizer.t("Login.Google")} */}
              </Text>
            </View>
          </TouchableOpacity>
          {Platform.OS === "ios" && (
            <TouchableOpacity style={[styles.btnOther, styles.loginApple]}>
              <View style={[styles.btnOtherContent]}>
                <FontAwesome size={16} style={styles.buttonIcon} name="apple" />
                <Text allowFontScaling={false} style={styles.buttonText}>
                  {/* {localizer.t("Login.Apple")} */}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/* {props.isLoading && (
        <View style={mainStyles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.mainColor} />
        </View>
      )} */}
    </View>
  );
};
const mainStyles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: "center",
  },
  mainContainer: {
    position: "absolute",
    width: width,
    height: height,
    alignItems: "center",
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
  },
  buttonDisable: {
    opacity: 0.5,
  },
  buttonEnable: {
    opacity: 1,
  },
  formErrorText: {
    color: "red",
    fontSize: 12,
    fontStyle: "italic",
    position: "absolute",
    left: 0,
    bottom: -16,
  },

  formErrorTextDate: {
    color: "red",
    fontSize: 12,
    fontStyle: "italic",
    position: "absolute",
    left: 0,
    bottom: -8,
  },

  loadingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  loadingStyle: {
    backgroundColor: "#ccc",
    opacity: 0.2,
  },

  loadedStyle: {
    backgroundColor: "#fff",
    opacity: 1,
  },
  icon: {
    color: colors.mainColor,
  },

  textLogo: {
    color: colors.mainColor,
    fontSize: 36,
    fontFamily: "Museo",
  },

  mb10: {
    marginBottom: 10,
  },

  cWhite: {
    color: "#fff",
  },

  fMontR: {
    fontFamily: "Montserrat-Regular",
  },
});

export default SignIn;
