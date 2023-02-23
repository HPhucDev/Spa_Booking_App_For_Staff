import { StyleSheet } from "react-native";
import colors from "../../../themes/colors";
import fontSize from "../../../themes/fontSize";
import { height, width } from "../../../utils/systemUtils";

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: "center",
  },
  mainContainer: {
    width: width,
    height: height,
    alignItems: "center",
  },

  guestWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width - 70,
    height: 80,
    marginBottom: 10,
    borderRadius: 4,
    overflow: "hidden",
  },
  guestIconWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 80,
  },
  guestTextWrapper: {
    flex: 3,
    height: 80,
  },

  guestBtn: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 25,
  },

  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width - 70,
    height: 50,
    borderRadius: 4,
    overflow: "hidden",
  },

  topMain: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
    height: height - 80,
  },

  backgroundImage: {
    position: "absolute",
    left: 0,
    top: 0,
    width: width,
    height: height,
    resizeMode: "cover",
  },

  otherLogin: {
    // width: width - 70,
    marginHorizontal: 16,
    height: 200,
    // backgroundColor: "#fff",
    // justifyContent: "space-between",
    // flexDirection: "row",
  },
  btnForAndroid: {
    width: (width - 80) / 2,
  },
  btnOther: {
    width: width - 70, // 16 marginHorizontal,
    flexDirection: "row",
    alignItems: "center",

    marginHorizontal: 2,
    paddingHorizontal: 8,
    height: 46,
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 10,
  },
  btnOtherContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: width - 70,
    marginTop: 30,
    marginBottom: 80,
  },

  languageText: {
    color: colors.priColor,
    fontSize: fontSize.normal,
    fontFamily: "Montserrat-Bold",
  },

  languageImg: {
    width: 30,
    height: 30,
  },

  languageSelector: {
    marginTop: 20,
    alignItems: "center",
  },
  signupWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width - 70,
    height: 60,
  },
  logo: {
    color: colors.mainColor,
  },
  login: {
    backgroundColor: colors.mainColor,
  },
  loginFacebook: {
    backgroundColor: colors.fbColor,
  },
  loginGoogle: {
    backgroundColor: colors.ggColor,
  },
  loginApple: {
    backgroundColor: colors.priColor,
  },
  branchText: {
    color: colors.mainColor,
    fontSize: 30,
    fontFamily: "Museo",
  },

  bookText: {
    color: "#fff",
    fontSize: fontSize.normal,
    fontFamily: "Montserrat-Bold",
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: fontSize.normal,
    fontFamily: "Montserrat-Regular",
  },

  signupText: {
    color: colors.mainColor,
    fontSize: fontSize.normal,
    fontFamily: "Montserrat-Medium",
  },
  buttonIcon: {
    color: "#fff",
    paddingRight: 15,
  },

  imgSpa: {
    height: 60,
    width: 60,
  },
});

export default styles;
