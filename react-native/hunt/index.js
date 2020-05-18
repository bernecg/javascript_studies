/**
 * @format
 */

import {AppRegistry} from 'react-native';
// default is to import the index.js file
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
