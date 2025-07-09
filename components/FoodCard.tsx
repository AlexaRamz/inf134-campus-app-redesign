import { Text, StyleSheet, View, ImageSourcePropType, Image } from 'react-native';
import AppCard from './AppCard';
import { globalStyles } from '@/styles/globalStyles';
import VegetarianIcon from '../assets/icons/VegetarianIcon.png';
import VeganIcon from '../assets/icons/VeganIcon.png';
import GlutenFreeIcon from '../assets/icons/GlutenFreeIcon.png';
import EatWellIcon from '../assets/icons/EatWellIcon.png';
import LowCarbonIcon from '../assets/icons/LowCarbonIcon.png';
import WholeGrainsIcon from '../assets/icons/WholeGrainsIcon.png';
import { DietHighlight, FoodItem } from '@/types/menuTypes';

interface FoodCardProps extends FoodItem {}

const dietHighlightIcons: Record<DietHighlight, ImageSourcePropType> = {
	'vegetarian': VegetarianIcon,
	'vegan': VeganIcon,
	'gluten free': GlutenFreeIcon,
	'eat well': EatWellIcon,
	'low carbon': LowCarbonIcon,
	'whole grains': WholeGrainsIcon,
};

export default function FoodCard({ name, calories, description, dietHighlights}: FoodCardProps) {
	return (
		<AppCard style={styles.card}>
			<View style={styles.titleContainer}>
				<View style={styles.leftContent}>
					<Text style={styles.itemTitle}>{name}</Text>
					<View style={styles.dietIconContainer}>
						{dietHighlights && dietHighlights.map((highlight) => {
							const imageSource = dietHighlightIcons[highlight];
							if (imageSource) {
								return (
									<View key={highlight}>
										<Image
											source={imageSource}
											style={styles.dietIcon}
										/>
									</View>
								);
							}
							return null;
						})}
					</View>
				</View>
				<Text style={styles.cal}>{calories} cal</Text>
			</View>
			<Text style={styles.itemDesc}>{description}</Text>
		</AppCard>
	)
}

const styles = StyleSheet.create({
	card: {
		padding: 14,
		marginBottom: 14,
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 6,
	},
	leftContent: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
		flexShrink: 1,
	},
	dietIconContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 5,
	},

	itemTitle: {
		fontFamily: 'Montserrat_500Medium',
		fontSize: 15,
		marginRight: 8,
	},
	itemDesc: {
		...globalStyles.normalText,
		color: '#434343',
	},
	cal: {
		...globalStyles.normalText,
		color: '#434343',
	},
	dietIcon: {
		width: 26,
		height: 26,
		resizeMode: 'contain',
	},
})
