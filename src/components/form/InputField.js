import React, { Component } from "react";
import { View, Text, StyleSheet,TextInput } from "react-native";


class InputField extends Component {
  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
      placeholder
    } = this.props;
    const color = labelColor || '#FFFFFF';
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || '#FFFFFF';
    const borderBottom = borderBottomColor || "transparent";
    return (
      <View style={[customStyle, styles.wrapper]}>
      <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        style={[
          { color: inputColor, borderBottomColor: borderBottom },
          styles.inputFiled
        ]}
        secureTextEntry={inputType === "password"}
      />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  },
  label: { fontWeight: "700", marginBottom: 10 },
  inputFiled: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  }
});
export default InputField;