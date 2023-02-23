import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import themes from "../../themes";
import TextInput from "../customs/TextInput";

interface InputPassWordType {
  errors: any;
  secureTextEntry: boolean;
  setSecureTextEntry: any;
  placeholder: string;
  onBlur: () => void;
  onChange: () => void;
  value: string;
  styleInputPassword?: string;
}

const InputPassword = ({
  errors,
  placeholder,
  secureTextEntry,
  setSecureTextEntry,
  onBlur,
  onChange,
  value,
  styleInputPassword,
}: InputPassWordType) => {
  return (
    <View style={styles.wrapperInputPassWord}>
      <TextInput
        style={[
          styles.inputStyle,
          styleInputPassword === "inputPassword"
            ? styles.inputPassword
            : styleInputPassword === "inputCustomerDetail"
            ? styles.inputStyleCustomerDetail
            : null,
          errors ? styles.inputError : null,
        ]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
      {secureTextEntry ? (
        <IconFeather
          size={22}
          name="eye"
          style={styles.iconEyes}
          onPress={() => setSecureTextEntry(!secureTextEntry)}
        />
      ) : (
        <IconFeather
          size={22}
          name="eye-off"
          style={styles.iconEyes}
          onPress={() => setSecureTextEntry(!secureTextEntry)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: themes.colors.backgroundInput,
    paddingVertical: Platform.OS === "ios" ? 20 : 15,
    paddingHorizontal: 25,
    borderRadius: 26,
    marginVertical: 10,
  },
  inputStyleCustomerDetail: {
    // marginTop: 14,
    marginBottom: 2,
    borderWidth: 0.3,
    backgroundColor: themes.colors.backgroundInput,
    paddingVertical: Platform.OS === "ios" ? 20 : 15,
    // paddingHorizontal: 25,
    borderRadius: 26,
  },
  inputPassword: {
    borderWidth: 0.5,
    borderColor: themes.colors.grayBorder,
    marginHorizontal: themes.spacing.marginHorizontalContent,
    borderRadius: 8,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  wrapperInputPassWord: {
    position: "relative",
  },

  iconEyes: {
    padding: 20,
    position: "absolute",
    right: 2,
    transform: [{ translateY: 8 }],
    color: themes.colors.lightGray,
  },
});

export default InputPassword;

