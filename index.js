import { AppRegistry } from 'react-native';
import App from './App';
import createSwitchNavigator from './app/routes/AuthenticationSwitch'

AppRegistry.registerComponent('SaleManagement', () => createSwitchNavigator);
