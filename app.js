'use strict';

import React, {
  Component,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import theme, {styles} from 'react-native-theme';
const ThemeExample = require('./ThemeExample');

// Setup Themes
theme.add(require('./theme/default'));
theme.add(require('./theme/red'), 'red');

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
        <ThemeExample />
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
