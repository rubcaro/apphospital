import { AppRegistry } from 'react-native';
import App from './App';
import bgMessaging from './data/bgMessaging';

AppRegistry.registerComponent('pruebaFirebase', () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging);
