import { View, StyleSheet, ViewStyle } from 'react-native';
import { globalStyles } from '@/styles/globalStyles';

interface AppCardProps {
	children: React.ReactNode;
	style?: ViewStyle;
}

export default function AppCard({ children, style }: AppCardProps) {
	return (
		<View style={[styles.card, style]}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#D9D9D9',
		backgroundColor: '#FFFFFF',

		...globalStyles.appCardShadow
	},
})
