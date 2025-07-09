import React, { useState } from 'react';
import AppHeader from '@/components/AppHeader';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { globalStyles } from '@/styles/globalStyles';
import FoodCard from '@/components/FoodCard';
import CrowdBarHeader from '@/components/CrowdBarHeader';
import AnteateryBackground from '../assets/images/anteaterybg.png';
import BrandywineBackground from '../assets/images/brandywinebg.png';
import ServiceHoursComponent from '@/components/ServiceHoursHeader';
import AppModal from '@/components/AppModal';
import { mealTimes, menuData } from '@/data/menuData';
import { FoodItem, MenuSection } from '@/types/menuTypes';

const ANTEATERY_KEY = 'anteatery';
const BRANDYWINE_KEY = 'brandywine';

export default function DiningScreen() {
	const [activeTab, setActiveTab] = useState<string>(ANTEATERY_KEY);

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
					<ServiceHoursComponent serviceTitle={selectedMeal} isOpen={true} availabilityText={'Open until 11:00PM'} onPressCallback={() => setMealModalVisible(true)}></ServiceHoursComponent>

					{menuData['Anteatery']?.[selectedMeal.toLowerCase()]?.map((section, sectionIndex) => (
						<View key={sectionIndex}>
						<Text style={globalStyles.sectionSubheading}>{section.heading}</Text>
						{section.foodItems.map((food, foodIndex) => (
							<FoodCard
							key={foodIndex}
							name={food.name}
							calories={food.calories}
							description={food.description}
							dietHighlights={food.dietHighlights}
							/>
						))}
						</View>
					))}
				</View>
			</>
		} else {
			return <>
				<CrowdBarHeader backgroundImage={BrandywineBackground}/>

				<View style={globalStyles.bodyContentContainer}>
					<ServiceHoursComponent serviceTitle={selectedMeal} isOpen={true} availabilityText={'Open until 11:00PM'} onPressCallback={() => setMealModalVisible(true)}></ServiceHoursComponent>

					{menuData['Brandywine']?.[selectedMeal.toLowerCase()]?.map((section, sectionIndex) => (
						<View key={sectionIndex}>
						<Text style={globalStyles.sectionSubheading}>{section.heading}</Text>
						{section.foodItems.map((food, foodIndex) => (
							<FoodCard
							key={foodIndex}
							name={food.name}
							calories={food.calories}
							description={food.description}
							dietHighlights={food.dietHighlights}
							/>
						))}
						</View>
					))}
				</View>
			</>
		}
	};

	return (
		<View style={globalStyles.screenContainer}>
			<AppHeader title="Dining" renderTabs={diningHallTabs}></AppHeader>
			
			<ScrollView style={globalStyles.scrollView}>
				{renderMenuContent()}
			</ScrollView>

			<AppModal title='Chosen Menu' isVisible={mealModalVisible} setVisible={setMealModalVisible}>
				<View style={styles.mealModalContent}>
					{mealTimes.map(meal => (
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
		paddingRight: 96,
	}
});
