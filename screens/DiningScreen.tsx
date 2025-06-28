import React, { useState } from 'react';
import AppHeader from '@/components/AppHeader';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import { globalStyles } from '@/styles/globalStyles';
import FoodCard from '@/components/FoodCard';
import Arrow from '../assets/images/backarrow.png'; // rotate 270 deg
import ExitX from '../assets/images/exitX.png';
import CrowdBarHeader from '@/components/CrowdBarHeader';
import AnteateryBackground from '../assets/images/anteaterybg.png';
import BrandywineBackground from '../assets/images/brandywinebg.png';

const ANTEATERY_KEY = 'anteatery';
const BRANDYWINE_KEY = 'brandywine';

export default function DiningScreen() {
	const [activeTab, setActiveTab] = useState<string>(ANTEATERY_KEY);

	const meals = [
		{ name: 'Breakfast', time: '7:15AM - 11:00AM' },
		{ name: 'Lunch', time: '11:00AM - 4:30PM' },
		{ name: 'Dinner', time: '4:30PM - 8:00PM' },
		{ name: 'Late Night', time: '8:00PM - 11:00PM' },
	];

	const [selectedMeal, setSelectedMeal] = useState('Lunch');
	const [mealModalVisible, setMealModalVisible] = useState(false);

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
		if (activeTab === ANTEATERY_KEY) {
			return <>
				<CrowdBarHeader backgroundImage={AnteateryBackground}/>
				
				<View style={globalStyles.bodyContentContainer}>
					{/* Meal Header */}
					<TouchableOpacity onPress={() => setMealModalVisible(true)} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
						<Text style={styles.sectionTitle}>{selectedMeal}</Text>
						<Image source={Arrow} style={{ width: 12, height: 12, marginLeft: 8, transform: [{ rotate: '270deg' }] }} />
					</TouchableOpacity>

					<Text style={styles.openText}>● Open until 11:00PM</Text>

					<Text style={styles.subheading}>Home</Text>
					<FoodCard name="Taco Seasoned Beef" calories={110} description="Ground beef seasoned with chili, garlic, and cumin"/>
					<FoodCard name="Spanish Rice" calories={100} description="White rice with tomatoes, onions, garlic"/>
					<FoodCard name="Charro Beans" calories={80} description="Pinto beans with broth, salsa, and cumin"/>

					<Text style={styles.subheading}>The Oven</Text>
					<FoodCard name="Classic Cheese Pizza" calories={340} description="Rich tomato sauce & generous layer of mozzerella cheese on a golden brown crust"/>
					<FoodCard name="Pepperoni Pizza" calories={370} description="Topped with crispy pepperoni slices, rich tomato sauce & mozzerella cheese on a golden brown crust"/>
				</View>
			</>
		} else {
			return <>
				<CrowdBarHeader backgroundImage={BrandywineBackground}/>

				<View style={globalStyles.bodyContentContainer}>
					{/* Meal Header */}
					<TouchableOpacity onPress={() => setMealModalVisible(true)} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
						<Text style={styles.sectionTitle}>{selectedMeal}</Text>
						<Image source={Arrow} style={{ width: 12, height: 12, marginLeft: 8, transform: [{ rotate: '270deg' }] }} />
					</TouchableOpacity>

					<Text style={styles.openText}>● Open until 11:00PM</Text>

					<Text style={styles.subheading}>Grubb</Text>
					<FoodCard name="BBQ Chicken Drumstick" calories={220} description="Savor the bold flavors of our Baked BBQ-Seasoned Chicken Drumstick, a perfect blend of smoky and sweet"/>
					<FoodCard name="Corn on the Cobb" calories={45} description="Steamed corn on the cob"/>
					<FoodCard name="Lexington Slaw" calories={80} description="Pinto beans simmered with broth, salsa, and cumin"/>

					<Text style={styles.subheading}>The Crossroads</Text>
					<FoodCard name="Lemongrass Banh Mi" calories={500} description="Lemongrass marinated chicken, pickled daikon and carrots, cilantro and lime corriander mayo on a light and crispy roll."/>
				</View>
			</>
		}
	};

	return (
		<View style={globalStyles.outerContainer}>
			<AppHeader title="Dining" renderTabs={diningHallTabs}></AppHeader>
			
			<ScrollView style={globalStyles.scrollView}>
				{renderMenuContent()}
			</ScrollView>

			{/* Meal selection modal */}
			{mealModalVisible && (
				<View style={{
					position: 'absolute',
					top: 0, left: 0, right: 0, bottom: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
					<View style={{
						backgroundColor: 'white',
						borderRadius: 12,
						paddingVertical: 20,
						paddingHorizontal: 20,
						width: 300,
						position: 'relative',
					}}>
						{/* X Button */}
						<TouchableOpacity
							onPress={() => setMealModalVisible(false)}
							style={{
								position: 'absolute',
								top: 12,
								right: 12,
								padding: 8,
								zIndex: 1,
							}}
						>
							<Image source={ExitX} style={{ width: 16, height: 16, resizeMode: 'contain' }} />
						</TouchableOpacity>

						{/* Modal Title */}
						<Text style={[styles.sectionTitle, { textAlign: 'left', marginBottom: 16 }]}>Chosen Menu</Text>

						{/* Meal List */}
						{meals.map(meal => (
							<TouchableOpacity
								key={meal.name}
								onPress={() => {
									setSelectedMeal(meal.name);
									setMealModalVisible(false);
								}}
								style={{
									flexDirection: 'row',
									alignItems: 'flex-start',
									paddingVertical: 10,
								}}
							>
								{/* Radio circle */}
								<View style={{
									width: 20,
									height: 20,
									borderRadius: 10,
									borderWidth: 2,
									borderColor: '#000',
									justifyContent: 'center',
									alignItems: 'center',
									marginRight: 12,
									marginTop: 2,
								}}>
									{selectedMeal === meal.name && (
										<View style={{
											width: 10,
											height: 10,
											borderRadius: 5,
											backgroundColor: '#000',
										}} />
									)}
								</View>

								{/* Text */}
								<View>
									<Text style={{
										fontFamily: 'Montserrat_700Bold',
										fontSize: 16,
										marginBottom: 2,
									}}>{meal.name}</Text>
									<Text style={{
										fontFamily: 'Montserrat_400Regular',
										fontSize: 13,
										color: '#777',
									}}>{meal.time}</Text>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
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
