import React, { useState } from 'react';
import AppHeader from '@/components/AppHeader';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { globalStyles } from '@/styles/globalStyles';
import FoodCard from '@/components/FoodCard';
import ExitX from '../assets/images/exitX.png';
import CrowdBarHeader from '@/components/CrowdBarHeader';
import AnteateryBackground from '../assets/images/anteaterybg.png';
import BrandywineBackground from '../assets/images/brandywinebg.png';
import ServiceHoursComponent from '@/components/ServiceHoursHeader';
import AppModal from '@/components/AppModal';

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
					<ServiceHoursComponent serviceName={selectedMeal} isOpen={true} availabilityText={'Open until 11:00PM'} onPressCallback={() => setMealModalVisible(true)}></ServiceHoursComponent>

					<Text style={globalStyles.heading2}>Home</Text>
					<FoodCard name="Taco Seasoned Beef" calories={110} description="Ground beef seasoned with chili, garlic, and cumin"/>
					<FoodCard name="Spanish Rice" calories={100} description="White rice with tomatoes, onions, garlic" dietHighlights={ ['vegan', 'gluten free'] }/>
					<FoodCard name="Charro Beans" calories={80} description="Pinto beans with broth, salsa, and cumin" dietHighlights={ ['vegetarian', 'eat well'] }/>

					<Text style={globalStyles.heading2}>The Oven</Text>
					<FoodCard name="Classic Cheese Pizza" calories={340} description="Rich tomato sauce & generous layer of mozzerella cheese on a golden brown crust" dietHighlights={ ['vegetarian'] }/>
					<FoodCard name="Pepperoni Pizza" calories={370} description="Topped with crispy pepperoni slices, rich tomato sauce & mozzerella cheese on a golden brown crust"/>
				</View>
			</>
		} else {
			return <>
				<CrowdBarHeader backgroundImage={BrandywineBackground}/>

				<View style={globalStyles.bodyContentContainer}>
					<ServiceHoursComponent serviceName={selectedMeal} isOpen={true} availabilityText={'Open until 11:00PM'} onPressCallback={() => setMealModalVisible(true)}></ServiceHoursComponent>

					<Text style={globalStyles.heading2}>Grubb</Text>
					<FoodCard name="BBQ Chicken Drumstick" calories={220} description="Savor the bold flavors of our Baked BBQ-Seasoned Chicken Drumstick, a perfect blend of smoky and sweet" dietHighlights={ ['gluten free', 'eat well'] }/>
					<FoodCard name="Corn on the Cobb" calories={45} description="Steamed corn on the cob" dietHighlights={ ['vegan', 'gluten free'] }/>
					<FoodCard name="Lexington Slaw" calories={80} description="Pinto beans simmered with broth, salsa, and cumin" dietHighlights={ ['vegetarian', 'gluten free', 'eat well'] }/>

					<Text style={globalStyles.heading2}>The Crossroads</Text>
					<FoodCard name="Lemongrass Banh Mi" calories={500} description="Lemongrass marinated chicken, pickled daikon and carrots, cilantro and lime corriander mayo on a light and crispy roll." dietHighlights={ ['eat well'] }/>
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

			<AppModal title='Chosen Menu' isVisible={mealModalVisible} setVisible={setMealModalVisible}>
				<View style={styles.mealModalContent}>
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
								marginTop: 10,
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
			</AppModal>
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

	mealModalContent: {
		paddingRight: 106,
	}
});
