/* eslint-disable import/extensions */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
// eslint-disable-next-line import/no-unresolved
import App from './src/App';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
