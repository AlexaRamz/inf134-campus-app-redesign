import React from "react";
import { View, Text, SafeAreaView, StyleSheet} from "react-native";

interface HeaderProps {
	title: string;
	renderTabs?: () => React.ReactNode;
}

export default function AppHeader({ title, renderTabs }: HeaderProps) {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={[styles.header, renderTabs && styles.tabsHeader]}>
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
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  	},

	backButton: {
    padding: 10, 
  	},
});