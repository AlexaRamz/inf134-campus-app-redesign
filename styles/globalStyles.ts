import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
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