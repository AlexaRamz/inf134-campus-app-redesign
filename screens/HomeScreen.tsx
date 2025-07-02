import AppHeader from '@/components/AppHeader';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import BarcodeImage from '../assets/images/barcode.png';
import CrowdMeterImage from '../assets/images/crowd_meter.png'
import AppCard from '@/components/AppCard';
import { globalStyles } from '@/styles/globalStyles';
import DataBox from '@/components/DataBox';

export default function HomeScreen({navigation} : any) {
	return (
		<ScrollView style={globalStyles.scrollView}>
			<AppHeader title="Welcome"></AppHeader>

			<View style={globalStyles.bodyContentContainer}>
				<AppCard style={globalStyles.barcodeBox}>
					<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
					<Image
						source={BarcodeImage}
						style={globalStyles.barcodeImage}
					/>
					<Text style={globalStyles.barcodeLabel}>Anteater, Peter - 12345678</Text>
					</TouchableOpacity>
				</AppCard>

				<View style={globalStyles.line} />

				<Text style={globalStyles.sectionHeading}>Meal Plan</Text>

				<View style={styles.dataBoxesContainer}>
					<DataBox label="Meals" value="30"/>
					<DataBox label="Guest Swipes" value="10"/>
					<DataBox label="Flexdine" value="$65.51"/>
					<DataBox label="ZotBucks" value="$20.01"/>
				</View>

				<View style={globalStyles.line} />

				<Text style={globalStyles.sectionHeading}>ARC Crowd Meter</Text>

				<AppCard style={styles.crowdMeterBox}>
					<Image
						source={CrowdMeterImage}
						style={styles.crowdMeterImage}
					/>
				</AppCard>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screenContainer: {
		paddingHorizontal: 29,
		paddingTop: 25,
		paddingBottom: 14,
	},

/* MEAL PLAN DATA */
	dataBoxesContainer: {
		marginBottom: 10,
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
