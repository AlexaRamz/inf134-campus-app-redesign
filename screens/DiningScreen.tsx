import React, { useState, useEffect } from 'react';
import AppHeader from '@/components/AppHeader';
import AppCard from "@/components/AppCard";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { globalStyles } from '@/styles/globalStyles';
import FoodCard from '@/components/FoodCard';

const ANTEATERY_KEY = 'anteatery'
const BRANDYWINE_KEY = 'brandywine'

export default function DiningScreen() {
	const [activeTab, setActiveTab] = useState<string>(ANTEATERY_KEY);

	const diningHallTabs = function() {
		return (
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
		);
	};

	const renderMenuContent = function() {
		if (activeTab == ANTEATERY_KEY) {
			return <>
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

				<FoodCard name="Taco Seasoned Beef" calories={110} description="Ground beef seasoned with chili, garlic, and cumin"/>
				<FoodCard name="Spanish Rice" calories={100} description="White rice with tomatoes, onions, garlic"/>
				<FoodCard name="Charro Beans" calories={80} description="Pinto beans with broth, salsa, and cumin"/>

				<Text style={styles.subheading}>The Oven </Text>

				<FoodCard name="Classic Cheese Pizza" calories={340} description="Rich tomato sauce & generous layer of mozzerella cheese on a golden brown crust"/>
				<FoodCard name="Pepperoni Pizza" calories={370} description="Topped with crispy pepperoni slices, rich tomato sauce & mozzerella cheese on a golden brown crust"/>
			</>
		}
		else {
			return <>
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

				<FoodCard name="BBQ Chicken Drumstick" calories={220} description="Savor the bold flavors of our Baked BBQ-Seasoned Chicken Drumstick, a perfect blend of smoky and sweet"/>
				<FoodCard name="Corn on the Cobb" calories={45} description="Steamed corn on the cob"/>
				<FoodCard name="Lexington Slaw" calories={80} description="Pinto beans simmered with broth, salsa, and cumin"/>

				<Text style={styles.subheading}>The Crossroads</Text>

				<FoodCard name="Lemongrass Banh Mi" calories={500} description="Lemongrass marinated chicken, pickled daikon and carrots, cilantro and lime corriander mayo on a light and crispy roll."/>
			</>
		}
	}
	return (
		<View style={globalStyles.outerContainer}>
			<AppHeader title="Dining" renderTabs={diningHallTabs}></AppHeader>
			
			<ScrollView contentContainerStyle={styles.screenContainer} style={globalStyles.scrollView}>
				{renderMenuContent()}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	screenContainer: {
		paddingHorizontal: 29,
	},

/* TABS */
	tabsContainer: {
		flexDirection: 'row',
		alignItems: 'flex-start',
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
		marginHorizontal: 20,
		backgroundColor: 'rgb(37, 87, 153)',
		paddingVertical: 15,
		paddingHorizontal: 35,
		borderRadius: 18,
		overflow: 'hidden',
		marginBottom: 15,
	},
	crowdTitle: {
		fontFamily: 'Montserrat_500Medium',
		fontSize: 18,
		marginBottom: 8,
		color: 'white',
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
		color: 'white',
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

	dataBoxesContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginTop: 20,
	},
});
