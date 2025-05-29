import React from "react";
import { View, Text, SafeAreaView, StyleSheet} from "react-native";

interface HeaderProps {
	title: string;
}

export default function AppHeader({ title }: HeaderProps) {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.header}>
				<Text style={styles.headerText}>
					{title}
				</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		backgroundColor: '#255799',
	},
	header: {
		backgroundColor: '#255799',
		height: 123,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 18,
	},
	headerText: {
		color: 'white',
		fontSize: 32,
		fontFamily: 'Montserrat_700Bold',
	},
});