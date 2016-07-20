'use strict';

import React, {
  Component,
} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import theme, {styles, Example} from 'react-native-theme';

// Setup Themes
theme.add(require('./theme/default'));
theme.addComponents({Example: require('./ThemeExample')});

theme.add(require('./theme/red'), 'red');
theme.addComponents({Example: require('./RedExample')}, 'red');

const App = React.createClass({
  getInitialState() {
    theme.setRoot(this);
    return null;
  },
  _defaultTheme() {
    if (theme.name !== 'default') {
      theme.active();
    }
  },
  _redTheme() {
    if (theme.name !== 'red') {
      theme.active('red');
    }
  },
  render() {
    return (
      <View class="container">
        <Example />
        <TouchableOpacity onPress={this._defaultTheme}>
          <View class="button default">
            <Text class="label">DEFAULT THEME</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._redTheme}>
          <View class="button red">
            <Text class="label">RED THEME</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

module.exports = App;
