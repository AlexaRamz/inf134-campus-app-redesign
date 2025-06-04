import React, { useState, useEffect } from 'react';
import AppHeader from '@/components/AppHeader';
import AppCard from "@/components/AppCard";
import DataBox from "@/components/DataBox";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { globalStyles } from '@/styles/globalStyles';

const ANTEATERY_KEY = 'anteatery'
const BRANDYWINE_KEY = 'brandywine'

export default function DiningScreen() {
	const [activeTab, setActiveTab] = useState<string>(ANTEATERY_KEY);

	const renderMenuContent = function() {
		if (activeTab == ANTEATERY_KEY) {
			return <View>
				<ScrollView contentContainerStyle={styles.screenContainer} style={globalStyles.scrollView}>
				{/* Crowd Meter */}
				<View style={styles.crowdContainer}>
					<Text style={styles.crowdTitle}>Crowd Meter</Text>
					<View style={styles.barRow}>
						{Array.from({ length: 10 }, (_, i) => (
							<View
								key={i}
								style={[styles.bar, i < 6 ? styles.barFilled : styles.barEmpty]}
							/>
						))}
					</View>
					<Text style={styles.crowdLevel}>Moderately Busy</Text>
				</View>

				{/* Menu */}
				<Text style={styles.sectionTitle}>Lunch</Text>
				<Text style={styles.openText}>● Open until 11:00PM</Text>

				<Text style={styles.subheading}>Home</Text>

				<AppCard style={styles.card}>
					<Text style={styles.itemTitle}>Taco Seasoned Beef <Text style={styles.cal}>110 cal</Text></Text>
					<Text style={styles.itemDesc}>Ground beef seasoned with chili, garlic, and cumin</Text>
				</AppCard>

				<AppCard style={styles.card}>
					<Text style={styles.itemTitle}>Spanish Rice <Text style={styles.cal}>100 cal</Text></Text>
					<Text style={styles.itemDesc}>White rice with tomatoes, onions, garlic</Text>
				</AppCard>

				<AppCard style={styles.card}>
					<Text style={styles.itemTitle}>Charro Beans<Text style={styles.cal}>80 cal</Text></Text>
					<Text style={styles.itemDesc}>Pinto beans with broth, salsa, and cumin</Text>
				</AppCard>

				<Text style={styles.subheading}>The Oven </Text>

				<AppCard style={styles.card}>
					<Text style={styles.itemTitle}>Classic Cheese Pizza <Text style={styles.cal}>340 cal</Text></Text>
					<Text style={styles.itemDesc}>Rich tomato sauce & generous layer of mozzerella cheese on a golden brown crust</Text>
				</AppCard>

				<AppCard style={styles.card}>
					<Text style={styles.itemTitle}>Pepperoni Pizza<Text style={styles.cal}>370 cal</Text></Text>
					<Text style={styles.itemDesc}>Topped with crispy pepperoni slices, rich tomato sauce & mozzerella cheese on a golden brown crust</Text>
				</AppCard>
				</ScrollView>
			</View>
		}
		else {
			return <View>
				<Text>Content for Brandywine</Text>
				<ScrollView contentContainerStyle={styles.screenContainer} style={globalStyles.scrollView}>
				{/* Crowd Meter */}
				<View style={styles.crowdContainer}>
					<Text style={styles.crowdTitle}>Crowd Meter</Text>
					<View style={styles.barRow}>
						{Array.from({ length: 10 }, (_, i) => (
							<View
								key={i}
								style={[styles.bar, i < 6 ? styles.barFilled : styles.barEmpty]}
							/>
						))}
					</View>
					<Text style={styles.crowdLevel}>Moderately Busy</Text>
				</View>

				{/* Menu */}
				<Text style={styles.sectionTitle}>Lunch</Text>
				<Text style={styles.openText}>● Open until 11:00PM</Text>

				<Text style={styles.subheading}>Grubb</Text>

				<AppCard style={styles.card}>
					<Text style={styles.itemTitle}>BBQ Chicken Drumstick <Text style={styles.cal}>220 cal</Text></Text>
					<Text style={styles.itemDesc}>Savor the bold flavors of our Baked BBQ-Seasoned Chicken Drumstick, a perfect blend of smoky and sweet</Text>
				</AppCard>

				<AppCard style={styles.card}>
					<Text style={styles.itemTitle}>Corb on the Cobb<Text style={styles.cal}>45 cal</Text></Text>
					<Text style={styles.itemDesc}>Steamed corn on the cob</Text>
				</AppCard>

				<AppCard style={styles.card}>
					<Text style={styles.itemTitle}>Lexington Slaw <Text style={styles.cal}>80 cal</Text></Text>
					<Text style={styles.itemDesc}>Pinto beans simmered with broth, salsa, and cumin</Text>
				</AppCard>

				<Text style={styles.subheading}>The Crossroads</Text>

				<AppCard style={styles.card}>
					<Text style={styles.itemTitle}>Lemongrass Banh Mi <Text style={styles.cal}>500 cal</Text></Text>
					<Text style={styles.itemDesc}>Lemongrass marinated chicken, pickled daikon and carrots, cilantro and lime corriander mayo on a light and crispy roll. </Text>
				</AppCard>
				</ScrollView>
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
	},
	crowdContainer: {
		alignItems: 'center',
		marginVertical: 20,
	},
	crowdTitle: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 18,
		marginBottom: 8,
	},
	barRow: {
		flexDirection: 'row',
		gap: 4,
		marginBottom: 6,
	},
	bar: {
		width: 16,
		height: 20,
		borderRadius: 4,
	},
	barFilled: {
		backgroundColor: '#FECC07',
	},
	barEmpty: {
		backgroundColor: '#E0E0E0',
	},
	crowdLevel: {
		fontSize: 14,
		color: '#555',
		fontFamily: 'Montserrat_400Regular',
	},

	sectionTitle: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 20,
		marginBottom: 4,
	},
	openText: {
		fontFamily: 'Montserrat_400Regular',
		color: '#1E8D2F',
		marginBottom: 16,
	},

	subheading: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 16,
		marginTop: 16,
		marginBottom: 8,
	},

	card: {
		padding: 12,
		marginBottom: 12,
	},

	itemTitle: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 15,
	},
	itemDesc: {
		fontFamily: 'Montserrat_400Regular',
		fontSize: 13,
		color: '#666',
		marginTop: 4,
	},
	cal: {
		fontFamily: 'Montserrat_400Regular',
		color: '#999',
		fontSize: 13,
	},

	dataBoxesContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginTop: 20,
	},
});
