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

class ThemeExample extends Component {
  render() {
    return (
      <View class='container'>
        <Text class="header">
          Header Title
        </Text>
        <View class="body">
          <Text class="content">
            <Text class="strong">react-native-theme</Text> helps you manage your application theme. Separate style files and switch theme at runtime...
          </Text>
          <TouchableOpacity>
            <View class="button">
              <Text class="label">OK</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text class="footer">
          Footer
        </Text>
      </View>
    );
  }
}

module.exports = ThemeExample;
