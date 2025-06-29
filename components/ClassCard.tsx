import { View, StyleSheet, Image, Text, ImageSourcePropType, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';

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
				<ImageBackground source={backgroundImage} style={styles.classCardImageBackground} imageStyle={{ borderRadius: 8 }}>
					<View> 
						<Text style={styles.cardText}>{name}</Text>
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
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
		overflow: 'hidden',
		width: screenWidth * 0.6,
		height: 120,
		marginRight: 10,
	},
	classCardImageBackground: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		padding: 15,
	},

	cardText: {
		textAlign: 'left',
		color: 'white',
		fontFamily: 'Montserrat_700Bold',
		fontSize: 18,
	},
})
