import { View, StyleSheet, ImageBackground, Image, Text, Dimensions, ImageSourcePropType} from 'react-native';
import { globalStyles } from '@/styles/globalStyles';

interface AppCardProps {
	backgroundImage: ImageSourcePropType
	numBarsFilled?: number
}

export default function CrowdBarHeader({ backgroundImage, numBarsFilled = 6 }: AppCardProps) {
	return (
		<View style={styles.imageBackgroundContainer}>
			{/* Image Background Container */}
			<ImageBackground source={backgroundImage} resizeMode='cover' style={styles.imageBackground}>
				{/* Crowd Meter Text View */}
				<View style={styles.crowdMeterContainer}>
					<Text style={styles.crowdMeterTitle}>Crowd Meter</Text>
					<View style={styles.barRow}>
						{Array.from({ length: 10 }, (_, i) => (
							<View
								key={i}
								style={[styles.bar, i < numBarsFilled ? styles.barFilled : styles.barEmpty]}
							/>
						))}
					</View>
					<Text style={styles.crowdLevelText}>Moderately Busy</Text>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	imageBackgroundContainer: {
		width: '100%',
		height: 180,
	},

	imageBackground: {
		flex: 1,
		width: '100%',
		height: 'auto',
		justifyContent: 'center',
		alignItems: 'center',
	},

	crowdMeterContainer: {
		backgroundColor: 'rgba(37, 87, 153, 0.8)',
		paddingTop: 12,
		paddingBottom: 10,
		paddingHorizontal: 29,
		borderRadius: 15,
	},
	crowdLevelText: {
		fontFamily: 'Montserrat_400Regular',
		fontSize: 12,
		color: 'white',
		textAlign: 'center',
	},
	crowdMeterTitle: {
		fontFamily: 'Montserrat_500Medium',
		fontSize: 18,
		color: 'white',
		textAlign: 'center',
	},
	barRow: {
		flexDirection: 'row',
		gap: 4,
		marginVertical: 7,
	},
	bar: {
		width: 16,
		height: 30,
		borderRadius: 4,
	},
	barFilled: {
		backgroundColor: '#FECC07',
	},
	barEmpty: {
		backgroundColor: '#E0E0E0',
	},
})
