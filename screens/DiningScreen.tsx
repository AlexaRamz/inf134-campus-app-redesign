import React, { useState, useEffect } from 'react';
import AppHeader from '@/components/AppHeader';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { globalStyles } from '@/styles/globalStyles';

const ANTEATERY_KEY = 'anteatery'
const BRANDYWINE_KEY = 'brandywine'

export default function DiningScreen() {
	const [activeTab, setActiveTab] = useState<string>(ANTEATERY_KEY);

	const renderMenuContent = function() {
		if (activeTab == ANTEATERY_KEY) {
			return <View>
				<Text>Content for Anteatery</Text>
			</View>
		}
		else {
			return <View>
				<Text>Content for Brandywine</Text>
			</View>
		}
	}
	return (
		<View>
			<AppHeader title="Dining"></AppHeader>
			<View style={styles.tabsContainer}>
				<TouchableOpacity
					style={[
						styles.tabButton,
						activeTab === ANTEATERY_KEY && styles.activeTabBorder
					]}
					onPress={() => setActiveTab(ANTEATERY_KEY)}
				>
					<Text style={styles.tabText}>Anteatery</Text>
				</TouchableOpacity>
				
				<TouchableOpacity
					style={[
						styles.tabButton,
						activeTab === BRANDYWINE_KEY && styles.activeTabBorder
					]}
					onPress={() => setActiveTab(BRANDYWINE_KEY)}
				>
					<Text style={styles.tabText}>Brandywine</Text>
				</TouchableOpacity>
			</View>
			<ScrollView contentContainerStyle={styles.screenContainer} style={globalStyles.scrollView}>
				{renderMenuContent()}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	screenContainer: {

	},

/* TABS */
	tabsContainer: {
		flexDirection: 'row',
		backgroundColor: '#255799',
	},
	tabButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 14,
	},
	tabText: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 15,
		color: 'white',
	},
	activeTabBorder: {
		borderBottomWidth: 3,
		borderBottomColor: '#FECC07',
	}
});
