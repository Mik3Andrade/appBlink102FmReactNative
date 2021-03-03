/**
 * @format
 */

import {AppRegistry} from 'react-native';
import BottomTabs from './src/routes/bottomTabs.routes';
import HomeScreen from './src/pages/Home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeScreen);
