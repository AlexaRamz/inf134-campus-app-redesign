import AppHeader from '@/components/AppHeader';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';

import BarcodeImage from '../assets/images/barcode.png';
import CrowdMeterImage from '../assets/images/crowd_meter.png';

export default function HomeScreen() {
	return (
		<View style={styles.outerContainer}>
			<AppHeader title="Welcome"></AppHeader>
			<ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollView}>
				<View style={[styles.cardStyle, styles.barcodeBox]}>
					<Image
						source={BarcodeImage}
						style={styles.barcodeImage}
					/>
					<Text style={styles.barcodeLabel}>Anteater, Peter - 12345678</Text>
				</View>

				<View style={styles.line} />

				<Text style={styles.heading}>Meal Plan</Text>

				<View style={styles.dataBoxesContainer}>

                <View style={[styles.cardStyle, styles.dataBox]}> {/* Use array for styles */}
                    <Text style={styles.dataLabel}>Meals</Text>
                    <Text style={styles.dataNumber}>30</Text>
                </View>

                <View style={[styles.cardStyle, styles.dataBox]}>
                    <Text style={styles.dataLabel}>Guest Swipes</Text>
                    <Text style={styles.dataNumber}>10</Text>
                </View>

                <View style={[styles.cardStyle, styles.dataBox]}>
                    <Text style={styles.dataLabel}>Flexdine</Text>
                    <Text style={styles.dataNumber}>$65.51</Text>
                </View>

                <View style={[styles.cardStyle, styles.dataBox]}>
                    <Text style={styles.dataLabel}>ZotBucks</Text>
                    <Text style={styles.dataNumber}>$20.01</Text>
                </View>
            </View>

				<View style={styles.line} />

				<Text style={styles.heading}>ARC Crowd Meter</Text>

				<View style={[styles.cardStyle, styles.crowdMeterBox]}>
					<Image
						source={CrowdMeterImage}
						style={styles.crowdMeterImage}
					/>
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

	/* MEAL PLAN DATA */
	dataBoxesContainer: {
		marginBottom: 10,
	},
	dataBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
		paddingVertical: 15,
		paddingLeft: 14,
		paddingRight: 31
	},
	dataLabel: {
		fontSize: 15,
		fontWeight: 500,
		fontFamily: 'Montserrat_500Medium',
	},
	dataNumber: {
		fontSize: 15,
		fontWeight: 500,
		fontFamily: 'Montserrat_500Medium',
	},

	/* ARC CROWD METER */
	crowdMeterBox: {
		paddingHorizontal: 20,
		paddingTop: 14,
		paddingBottom: 4,
	},
	crowdMeterImage: {
		width: '100%',
		resizeMode: 'contain',
	}
});
