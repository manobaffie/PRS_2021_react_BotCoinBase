import React, { Component } from 'react';
import { Text, View, StyleProp, TextStyle, TextInput } from 'react-native';

class CustomInput extends Component<{
  label?: string;
  placeholder?: string;

  onChangeTextInput?: (text: string) => void;

  styleView?: StyleProp<TextStyle>;
  styleText?: StyleProp<TextStyle>;
  styleInput?: StyleProp<TextStyle>;
}> {
  render() {
    return (
      <View style={this.props.styleView}>
        <Text style={this.props.styleView}>{this.props.label}</Text>
        <TextInput
          style={this.props.styleInput}
          onChangeText={this.props.onChangeTextInput}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}

export default CustomInput;