import React, { Component } from 'react';
import { View, StyleProp, TextStyle } from 'react-native';

class GraphVisualizer extends Component<{
  styleView?: StyleProp<TextStyle>;
  data?: Array<{x: Number, y: Number}>;
}> {
  render() {
    return (
      <View style={this.props.styleView}>
        
      </View>
    );
  }
}

export default GraphVisualizer;