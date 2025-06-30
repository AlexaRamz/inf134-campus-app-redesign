import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: 'white',
	},
	scrollView: {
		flex: 1,
		backgroundColor: 'white',
	},
	bodyContentContainer: {
		paddingHorizontal: 29,
		paddingTop: 25,
		paddingBottom: 14,
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
	heading2: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 4,
		marginBottom: 8,
	},
	heading3: {
		fontSize: 18,
		fontFamily: 'Montserrat_500Medium',
		color: 'white',
		textAlign: 'center',
	},

	heading4: {
		fontSize: 16,
		fontFamily: 'Montserrat_500Medium',
		color: 'black',
	
	},
	sectionTitle: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 20,
	},
	paragraphText: {
		fontSize: 12,
		fontFamily: 'Montserrat_400Regular',
		color: 'black',
	},

	linkText: {
		fontSize: 12,
		textDecorationStyle: 'solid',
		textDecorationLine: 'underline',
		fontFamily: 'Montserrat_400Regular',
		color: '#255799',
	},

	backArrow: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  	},

	backButton: {
    padding: 10, 
  	},
	
	crowdContainer: {
		marginBottom: 20,
	},
	crowdMeterBox: {
		width: screenWidth * 0.7,
		height: 140,
		marginRight: 10,
		padding: 5,
	},
	crowdMeterImage: {
		width: '100%',
		height: 130,
		padding: 0,
		resizeMode: 'contain',
		overflow: 'hidden',
	},
});