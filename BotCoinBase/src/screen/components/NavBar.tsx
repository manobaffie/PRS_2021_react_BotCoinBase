import React, { Component, version } from 'react';
import { View, StyleProp, TextStyle, Text } from 'react-native';

import NavBarBase from '../../components/NavBar';
import Button from '../../components/Button';

class NavBar extends Component<{
  styleView?: StyleProp<TextStyle>;
}> {
  render() {
    return (
      <View style={this.props.styleView}>
        <NavBarBase
          styleView={{
            marginRight:30,
            padding: 30,

            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#242c35',
          }}
          ListData={[
            {id: 'test'},
            {id: 'test2'},
            {id :'test3'}
          ]}
          renderItem={(item: any) => {
            return (
              <View>
                <Button
                  styleView={{
                    paddingBottom: 5,
                    marginVertical: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: '#242c35',
                  }}
                  styleText={{
                    color: '#ffffff',
                  }}
                  titleButton={item.id}
                  onPressButton={ () => {}}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default NavBar;
