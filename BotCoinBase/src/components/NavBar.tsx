import React, { Component } from 'react';
import { View, StyleProp, TextStyle, FlatList, Text } from 'react-native';

class NavBar extends Component<{
  styleView?: StyleProp<TextStyle>;
  ListData: [];
  renderItem: Function;
}> {
  render() {
    return (
      <View style={this.props.styleView}>
        <FlatList
          data={this.props.ListData}
          renderItem={({item}) => this.props.renderItem(item)}
        />
      </View>
    );
  }
}

export default NavBar;