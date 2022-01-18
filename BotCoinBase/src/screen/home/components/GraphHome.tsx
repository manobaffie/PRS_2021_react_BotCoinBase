import React, { Component } from 'react';
import { View, StyleProp, TextStyle } from 'react-native';

import GraphVisualizer from '../../../components/GraphVisualizer';

class GraphHome extends Component<{
  styleView?: StyleProp<TextStyle>;
}> {
  render() {
    return (
      <View style={this.props.styleView}>
        <GraphVisualizer
          data={[
            {x: 0, y: 0},
            {x: 2, y: 2},
            {x: 3, y: 3},
            {x: 3, y: 3},
            {x: 3, y: 3}
          ]}
        />
      </View>
    );
  }
}

export default GraphHome;