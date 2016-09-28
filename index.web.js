'use strict';

const {AppRegistry} = require('react-native');
const app = require('./app');

AppRegistry.registerComponent('ThemeExample', () => app);
AppRegistry.runApplication('ThemeExample', {rootTag: document.getElementById('example')});
