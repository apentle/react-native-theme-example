'use strict';

import React, {
  Component,
} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {styles} from 'react-native-theme';

class RedExample extends Component {
  render() {
    return (
      <View class='container'>
        <Text class="header">
          Red Header
        </Text>
        <View class="body">
          <Text class="content">
            <Text class="strong">react-native-theme</Text> also updates content while changing the theme...
          </Text>
          <TouchableOpacity>
            <View class="button">
              <Text class="label">RED OK</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text class="footer">
          Red Footer
        </Text>
      </View>
    );
  }
}

module.exports = RedExample;
