import React, { Component } from 'react';
import { View, StyleProp, TextStyle } from 'react-native';

class CustomForm extends Component<{
  styleView?: StyleProp<TextStyle>;
}> {
  render() {
    return (
      <View style={this.props.styleView}>
      </View>
    );
  }
}

export default CustomForm;
