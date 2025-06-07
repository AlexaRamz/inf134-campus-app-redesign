import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../assets/images/backarrow.png';

interface HeaderProps {
	title: string;
	renderTabs?: () => React.ReactNode;
}

export default function AppHeaderWithBack({ title, renderTabs }: HeaderProps) {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={[styles.header, renderTabs && styles.tabsHeader]}>
				<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
					<Image
						source={BackArrow}
						style={styles.backArrow}
					/>
				</TouchableOpacity>
				<Text style={[styles.headerText, renderTabs && styles.tabsHeaderText]}>
					{title}
				</Text>
				{renderTabs && (
					<View>
						{renderTabs()}
					</View>
				)}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		backgroundColor: '#255799',
	},
	header: {
		height: 117,
		justifyContent: 'flex-end',
	},
	tabsHeader: {
		height: 136,
	},
	headerText: {
		color: 'white',
		fontSize: 32,
		fontFamily: 'Montserrat_700Bold',
		marginBottom: 24,
		alignSelf: 'center',
	},
	tabsHeaderText: {
		marginBottom: 8,
	},
	backButton: {
		position: 'absolute',
		left: 25,
		top: 62,
		padding: 10,
	},
	backArrow: {
		width: 20,
		height: 20,
		resizeMode: 'contain',
	},
});
