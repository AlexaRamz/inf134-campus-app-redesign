import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import BackArrow from '../assets/images/backarrow.png';


interface HeaderProps {
	title: string;
	renderTabs?: () => React.ReactNode;
}

export default function AppHeaderWithBack({ title, renderTabs }: HeaderProps) {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={[styles.header, renderTabs && styles.tabsHeader]}>
				<Image
					source={BackArrow}
					style={styles.backArrow}
				/>
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
	backArrow: {
		width: 20,
		height: 20,
		resizeMode: 'contain',
		position:'absolute',
		left: 25,
		top: 62,
	}
});