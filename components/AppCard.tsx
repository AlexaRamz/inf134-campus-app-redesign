import { View, StyleSheet, ViewStyle } from 'react-native';

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

		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 10,
		elevation: 3,
	},
})
