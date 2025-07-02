import { View, StyleSheet, Image, ImageSourcePropType, Dimensions } from 'react-native';
import AppCard from './AppCard';

interface CrowdHistoryCardProps {
	dayChartImage: ImageSourcePropType;
}

export default function CrowdHistoryCard({ dayChartImage }: CrowdHistoryCardProps) {
	return (
		<AppCard style={styles.crowdMeterBox}>
			<Image
				source={dayChartImage}
				style={styles.crowdMeterImage}
			/>
		</AppCard>
	);
}

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
	crowdMeterBox: {
		width: screenWidth * 0.7,
		height: 140,
		marginRight: 10,
		paddingTop: 4,
		paddingHorizontal: 15,
	},
	crowdMeterImage: {
		width: '100%',
		height: 130,
		padding: 0,
		resizeMode: 'contain',
		overflow: 'hidden',
	},
})
