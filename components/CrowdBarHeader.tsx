import { View, StyleSheet, ImageBackground, Image, Text, Dimensions, ImageSourcePropType} from 'react-native';
import { globalStyles } from '@/styles/globalStyles';
import CrowdBar from '../assets/images/crowd_bar.png';

interface AppCardProps {
	backgroundImage: ImageSourcePropType
}

export default function AppCard({ backgroundImage }: AppCardProps) {
	return (
		<View style={styles.imageBackgroundContainer}>
			{/* Image Background Container */}
			<ImageBackground source={backgroundImage} resizeMode='cover' style={styles.imageBackground}>
				{/* Crowd Meter Text View */}
				<View style={styles.overlayTextBackground}>
					<Text style={globalStyles.heading3}>Crowd Meter</Text>
					<Image
						source={CrowdBar}
						style={styles.crowdMeterBar}
					/>
					<Text style={styles.overlayText}>Moderately Busy</Text>
				</View>
			</ImageBackground>
		</View>
	);
}

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
	imageBackgroundContainer: {
		width: '100%',
		height: 180,
		marginTop: 0,
	},

	imageBackground: {
		flex: 1,
		width: '100%',
		height: 'auto',
		justifyContent: 'center',
		alignItems: 'center',
	},

	overlayTextBackground: {
		backgroundColor: 'rgba(37, 87, 153, 0.8)',
		paddingVertical: 8,
		paddingHorizontal: 25,
		borderRadius: 15,
		overflow: 'hidden',
		marginBottom: 10,
	},
	overlayText: {
		color: 'white',
		fontSize: 12,
		fontWeight: 400,
		textAlign: 'center',
		fontFamily: 'Montserrat_400Regular',
	},
	
	crowdMeterBar: {
		width: 190,
		resizeMode: 'contain',
		marginBottom: -14,
		marginTop: -12,
	},
})

{/* Crowd Meter
<View style={styles.crowdContainer}>
	<Text style={styles.crowdTitle}>Crowd Meter</Text>
	<View style={styles.barRow}>
		{Array.from({ length: 10 }, (_, i) => (
			<View
				key={i}
				style={[styles.bar, i < 6 ? styles.barFilled : styles.barEmpty]}
			/>
		))}
	</View>
	<Text style={styles.crowdLevel}>Moderately Busy</Text>
</View> */}

{/* Crowd Meter
<View style={styles.crowdContainer}>
	<Text style={styles.crowdTitle}>Crowd Meter</Text>
	<View style={styles.barRow}>
		{Array.from({ length: 10 }, (_, i) => (
			<View
				key={i}
				style={[styles.bar, i < 6 ? styles.barFilled : styles.barEmpty]}
			/>
		))}
	</View>
	<Text style={styles.crowdLevel}>Moderately Busy</Text>
</View> */}