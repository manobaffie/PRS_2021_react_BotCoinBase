import React, { Component } from 'react';
import { Text, View, StyleProp, TextStyle, TouchableOpacity } from 'react-native';

class CustomButton extends Component<{
  styleView?: StyleProp<TextStyle>;
  styleButton?: StyleProp<TextStyle>;
  styleText?: StyleProp<TextStyle>;

  titleButton: string;
  onPressButton: () => void;
}> {
  render() {
    return (
      <View style={this.props.styleView}>
        <TouchableOpacity
          style={this.props.styleButton}
          onPress={this.props.onPressButton}
        >
          <Text style={this.props.styleText} >{this.props.titleButton}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomButton;