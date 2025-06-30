import { Text, StyleSheet, View, ImageSourcePropType, Image } from 'react-native';
import AppCard from './AppCard';
import VegetarianIcon from '../assets/icons/VegetarianIcon.png';
import VeganIcon from '../assets/icons/VeganIcon.png';
import GlutenFreeIcon from '../assets/icons/GlutenFreeIcon.png';
import EatWellIcon from '../assets/icons/EatWellIcon.png';

type DietHighlight = 'vegetarian' | 'vegan' | 'gluten free' | 'eat well';

interface FoodCardProps {
	name: string;
	calories: number;
	description: string;
	dietHighlights?: DietHighlight[];
}

const dietHighlightIcons: Record<DietHighlight, ImageSourcePropType> = {
	'vegetarian': VegetarianIcon,
	'vegan': VeganIcon,
	'gluten free': GlutenFreeIcon,
	'eat well': EatWellIcon,
};

export default function FoodCard({ name, calories, description, dietHighlights}: FoodCardProps) {
	return (
		<AppCard style={styles.card}>
			<View style={styles.titleContainer}>
				<View style={styles.leftContent}>
					<Text style={styles.itemTitle}>{name}</Text>
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
	},

	itemTitle: {
		fontFamily: 'Montserrat_500Medium',
		fontSize: 15,
		marginRight: 8,
	},
	itemDesc: {
		fontFamily: 'Montserrat_400Regular',
		fontSize: 13,
		color: '#434343',
	},
	cal: {
		fontFamily: 'Montserrat_400Regular',
		color: '#434343',
		fontSize: 13,
	},
	dietIcon: {
		width: 26,
		height: 26,
		resizeMode: 'contain',
		marginRight: 5,
	},
})
