import React, { Component } from 'react';
import { Text, View, StyleProp, TextStyle, TextInput } from 'react-native';

class Input extends Component<{
  styleView?: StyleProp<TextStyle>;
  styleText?: StyleProp<TextStyle>;
  styleInput?: StyleProp<TextStyle>;

  label?: string;
  placeholder?: string;

  onChangeTextInput?: (text: string) => void;
}> {
  render() {
    return (
      <View style={this.props.styleView}>
        <Text style={this.props.styleText}>{this.props.label}</Text>
        <TextInput
          style={this.props.styleInput}
          onChangeText={this.props.onChangeTextInput}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}

export default Input;