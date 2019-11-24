import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "./src/screens/Login";

const AppNavigator = createStackNavigator({
	Login: {
		screen: LoginScreen,
	},
});

export default createAppContainer(AppNavigator);