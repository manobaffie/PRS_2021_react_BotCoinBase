import React, { Component } from 'react';
import { View, StyleProp, TextStyle, ActivityIndicator } from 'react-native';

class ActivityIndicatorBase extends Component<{
  styleView?: StyleProp<TextStyle>;
  isDisplay: boolean;
}> {
  render() {
    return (
      <View style={this.props.styleView}>
        {
          (this.props.isDisplay ?
            <ActivityIndicator size='large' color='#457cb7'/> : <></>)
        }
      </View>
    );
  }
}

export default ActivityIndicatorBase;