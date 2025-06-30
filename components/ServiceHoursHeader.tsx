import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import { globalStyles } from '@/styles/globalStyles';
import Arrow from '../assets/images/arrow.png';

interface ServiceHoursComponentProps {
	serviceName: string;
	isOpen: boolean;
	availabilityText: string;
	onPressCallback: () => void;
}

export default function ServiceHoursHeader({ serviceName, isOpen, availabilityText, onPressCallback }: ServiceHoursComponentProps) {
	return (
		<TouchableOpacity onPress={onPressCallback}>
			<View style={styles.contentWrapper}>
				<View>
					<Text style={[globalStyles.sectionTitle, styles.serviceName]}>{serviceName}</Text>
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
	serviceName: {
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
