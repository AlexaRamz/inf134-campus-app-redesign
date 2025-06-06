import { Text, StyleSheet } from 'react-native';
import AppCard from './AppCard';

interface FoodCardProps {
	name: string;
	calories: number;
	description: string
}

const FoodCard: React.FC<FoodCardProps> = ({ name, calories, description }) => {
	return (
		<AppCard style={styles.card}>
			<Text style={styles.itemTitle}>{name} <Text style={styles.cal}>{calories} cal</Text></Text>
			<Text style={styles.itemDesc}>{description}</Text>
		</AppCard>
	)
}

const styles = StyleSheet.create({
	card: {
		padding: 12,
		marginBottom: 12,
	},

	itemTitle: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 15,
		marginRight: 40,
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
})

export default FoodCard;
