import React, { Component } from 'react';
import { View, StyleProp, TextStyle } from 'react-native';

class NavBar extends Component<{
  styleView?: StyleProp<TextStyle>;
}> {
  render() {
    return (
      <View style={this.props.styleView}>
      </View>
    );
  }
}

export default NavBar;

// data={[
//   {key: 'Devin'},
//   {key: 'Dan'},
//   {key: 'Dominic'},
//   {key: 'Jackson'},
//   {key: 'James'},
//   {key: 'Joel'},
//   {key: 'John'},
//   {key: 'Jillian'},
//   {key: 'Jimmy'},
//   {key: 'Julie'},
// ]}
