import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import { headingStyles } from '@/styles/globalStyles';
import Arrow from '../assets/images/arrow.png';

interface ServiceHoursComponentProps {
	serviceTitle: string;
	isOpen: boolean;
	availabilityText: string;
	onPressCallback: () => void;
}

export default function ServiceHoursHeader({ serviceTitle, isOpen, availabilityText, onPressCallback }: ServiceHoursComponentProps) {
	return (
		<TouchableOpacity onPress={onPressCallback}>
			<View style={styles.contentWrapper}>
				<View>
					<Text style={[headingStyles.heading1, styles.serviceTitle]}>{serviceTitle}</Text>
					<Text style={styles.openText}>● {availabilityText}</Text>
				</View>
				<Image
					source={Arrow}
					style={styles.arrow}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	contentWrapper: {
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'space-between',
		marginBottom: 16,
	},
	serviceTitle: {
		marginBottom: 4,
	},
	openText: {
		fontFamily: 'Montserrat_400Regular',
		color: '#1E8D2F',
	},
	arrow: {
		width: 16,
		height: 16,
		resizeMode: 'contain',
	},
})
