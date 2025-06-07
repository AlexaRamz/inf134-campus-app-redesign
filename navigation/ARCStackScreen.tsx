import { createStackNavigator } from '@react-navigation/stack';

import ARCScreen from '../screens/ARCScreen';
import ARCDetailsScreen from '../screens/ARCDetailsScreen';

const ARCStack = createStackNavigator();

export default function ARCStackScreen() {
	return (
		<ARCStack.Navigator>
			<ARCStack.Screen
				name="ARCMain"
				component={ARCScreen}
				options={{ headerShown: false }}
			/>
			<ARCStack.Screen
				name="ARCDetails"
				component={ARCDetailsScreen}
				options={{ headerShown: false }}
			/>
		</ARCStack.Navigator>
	);
}