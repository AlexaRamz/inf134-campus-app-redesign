import { Text, StyleSheet } from 'react-native';
import AppCard from './AppCard';

interface DataBoxProps {
	label: string;
	value: string;
}

const DataBox: React.FC<DataBoxProps> = ({ label, value }) => {
	return (
		<AppCard style={styles.dataBoxCard}>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.number}>{value}</Text>
		</AppCard>
	)
}

const styles = StyleSheet.create({
	dataBoxCard: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
		paddingVertical: 15,
		paddingLeft: 14,
		paddingRight: 31
	},
	label: {
		fontSize: 15,
		fontWeight: 500,
		fontFamily: 'Montserrat_500Medium',
	},
	number: {
		fontSize: 15,
		fontWeight: 500,
		fontFamily: 'Montserrat_500Medium',
	},
})

export default DataBox;
