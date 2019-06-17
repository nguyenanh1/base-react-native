import { createAppContainer } from 'react-navigation';
import createSwitchNavigator from './AppSwitchNavigator';

var AppContainer = createAppContainer(createSwitchNavigator);

export default AppContainer;