import AppHeader from '@/components/AppHeader';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';

import BarcodeImage from '../assets/images/barcode.png';
import ProfileImage from '../assets/images/profile.png';

export default function ProfileScreen() {
	return (
		<View>
			<AppHeader title="Profile"></AppHeader>
			<ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollView}>
				<View style={[styles.cardStyle, styles.barcodeBox]}>
					<View style={styles.profileRow}>

					<Image source={ProfileImage} style={styles.profileImage}/>
					
					<View style={styles.textColumn}>
						<Text style={styles.profileName}>Anteater, Peter</Text>
						
						<Text style={styles.profileDetails}>
							First Year{"\n"}Paul Merage{"\n"}School of Business
						</Text>
					</View>
				
					</View>

					<View style={styles.barcodeBox}>
						<Image
						source={BarcodeImage}
						style={styles.barcodeImage}/>

						<Text style={styles.barcodeLabel}>Anteater, Peter - 12345678</Text>
					</View>

				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: 'white',
	},
	scrollView: {
		flex: 1
	},
	scrollContentContainer: {
		paddingHorizontal: 29,
		paddingTop: 25,
		paddingBottom: 14,
	},
	cardStyle: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#D9D9D9',

		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 10,
		elevation: 3,
	},

/* PROFILE */
	profileBox: {
		alignItems: 'flex-start',
		alignSelf: 'center',
		paddingHorizontal: 44,
		paddingTop: 24,
		paddingBottom: 8,
		marginBottom: 21,
	},
	
	profileName: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 16,
		marginBottom: 4,
	},

	profileDetails: {
		fontFamily: 'Montserrat_400Regular',
		fontSize: 12,
		color: '#333',
	},

	profileImage: {
		width: 150,
		height: 150,
		marginBottom: 4,
	},

	profileRow: {
		flexDirection: 'row',
		alignItems: 'flex-start',
	},

	textColumn: {
		flexDirection: 'column',
		marginLeft: 16,
		justifyContent: 'flex-start',
	},

/* BARCODE */
	barcodeBox: {
		alignItems: 'center',
		alignSelf: 'center',
		paddingHorizontal: 44,
		paddingTop: 24,
		paddingBottom: 8,
		marginBottom: 21,
	},
	barcodeImage: {
		width: 166,
		height: 103,
		marginBottom: 6,
	},
	barcodeLabel: {
		fontFamily: 'Montserrat_400Regular',
		fontSize: 12,
	},

	
	line: {
		borderBottomWidth: 1,
		borderBottomColor: '#D9D9D9',
		marginBottom: 16,
	},
	heading: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 8,
	},
});
