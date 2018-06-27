import { AppRegistry } from 'react-native';
import MainApp from './MainApp';
import createSwitchNavigator from './app/routes/AuthenticationSwitch'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('SaleManagement', () => MainApp);
