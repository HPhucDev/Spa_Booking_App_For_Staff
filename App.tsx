import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createNavigationContainerRef,
  NavigationContainer,
  StackActions,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "./src/screens/SplashScreen";

export const navigationRef = createNavigationContainerRef();
export const navigate = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
};

export const replace = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  }
};

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export const getCurrentRoute = () => {
  let currentRoute = null;
  if (navigationRef.isReady()) {
    currentRoute = navigationRef.getCurrentRoute();
  }

  return currentRoute;
};

type GetParams = {
  [key: string]: any;
};
export const getParams = (): GetParams => {
  let currentParams = {};
  if (navigationRef.isReady()) {
    currentParams = navigationRef.getCurrentRoute()?.params as any;
  }

  return currentParams;
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SplashScreen></SplashScreen>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
