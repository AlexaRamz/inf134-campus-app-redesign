import { View, StyleSheet, Image, Text, ImageSourcePropType} from 'react-native';
import { globalStyles, headingStyles } from '@/styles/globalStyles';
import ClosedCircle from '../assets/images/closedcircle.png';
import OpenCircle from '../assets/images/opencircle.png';
import AppCard from './AppCard';

interface AppCardProps {
	name: string;
	location: string;
	time: string;
	icon: ImageSourcePropType;
	isOpen: boolean;
}

export default function CourtCard({ name, location, time, icon, isOpen}: AppCardProps) {
	return (
		<AppCard style={styles.courtCard}>
			<View style={styles.courtContentWrapper}>
				<Image source={icon} resizeMode='cover' style={styles.courtIcon} />
				<View style={styles.courtTextContainer}>
					<Text style={headingStyles.heading4}>{name}</Text>
					<Text style={globalStyles.normalText}>{location}</Text>
					<Text style={globalStyles.normalText }>{time}</Text>
				</View>
				<Image
					source={isOpen ? OpenCircle : ClosedCircle}
					style={styles.openCircleImage}
				/>
			</View>
		</AppCard>
	);
}

const styles = StyleSheet.create({
	courtCard: {
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
		width: '100%',
		minHeight: 80,
		marginBottom: 12,
		paddingHorizontal: 15,
		paddingVertical: 6,
		justifyContent: 'center',
	},
	courtContentWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	courtIcon: {
		width: 40,
		height: 40,
		resizeMode: 'contain',
		marginRight: 15,
	},
	courtTextContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	openCircleImage: {
		width: 10,
		height: 10,
		resizeMode: 'contain',
		marginRight: 3,
	},
})
