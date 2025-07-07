import { View, StyleSheet, Text, ImageSourcePropType, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import { globalStyles } from '@/styles/globalStyles';

interface AppCardProps {
	name: string;
	backgroundImage: ImageSourcePropType;
	navigation: any;
	detailsPage: string;
}

export default function ClassCard({ name, backgroundImage, navigation, detailsPage}: AppCardProps) {
	return (
		<View style={styles.classCard}>
			<TouchableOpacity onPress={() => navigation.navigate(detailsPage)} style={{ flex: 1 }}>
				<ImageBackground source={backgroundImage} style={styles.classBackgroundImage} imageStyle={{ borderRadius: 8 }}>
					<View style={styles.classTextContainer}> 
						<Text style={styles.classTitle}>{name}</Text>
					</View>
				</ImageBackground>
			</TouchableOpacity>
		</View>
	);
}

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
	classCard: {
		backgroundColor: '#fff',
		borderRadius: 12,
		overflow: 'hidden',
		width: screenWidth * 0.6,
		height: 120,
		marginRight: 10,

		...globalStyles.appCardShadow
	},
	classBackgroundImage: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},
	classTextContainer: {
		padding: 15,
	},
	classTitle: {
		textAlign: 'left',
		color: 'white',
		fontFamily: 'Montserrat_700Bold',
		fontSize: 18,
	},
})
