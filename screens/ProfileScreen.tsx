import AppHeader from '@/components/AppHeader';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';

import BarcodeImage from '../assets/images/barcode.png';
import ProfileImage from '../assets/images/profile.png';
import { globalStyles } from '@/styles/globalStyles';
import AppCard from '@/components/AppCard';
import { TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
	return (
		<View style={globalStyles.outerContainer}>
			<AppHeader title="Profile"></AppHeader>
			<View style={styles.screenContainer}>
				<AppCard style={styles.barcodeBox}>
					<View style={styles.profileRow}>

					<Image source={ProfileImage} style={styles.profileImage}/>
					
					<View style={styles.textColumn}>
						<Text style={styles.profileName}>Peter Hill {"\n"}Anteater{"\n"}</Text>
						
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
				</AppCard>
				<TouchableOpacity style={styles.signOutButton} onPress={() => console.log('Button Pressed')}>
  				<Text style={styles.signOutButtonText}>Sign Out</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screenContainer: {
		paddingTop: 25,
	},

/* PROFILE */
	signOutButton: {
		backgroundColor: '#255799',
		paddingVertical: 8,
		paddingHorizontal: 20,
		borderRadius: 10,
		alignSelf: 'center',
		marginTop: 10,
	},

	signOutButtonText: {
		color: 'white',
		fontSize: 14,
		fontFamily: 'Montserrat_500Medium',
		textAlign: 'center',
	},

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
});
