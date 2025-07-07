import { Platform, StyleSheet } from 'react-native';

export const headingStyles = StyleSheet.create({
	heading1: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 20,
	},
	heading2: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 16,
	},
	heading3: {
		fontSize: 18,
		fontFamily: 'Montserrat_500Medium',
		color: 'white',
		textAlign: 'center',
	},
	heading4: {
		fontFamily: 'Montserrat_500Medium',
		fontSize: 16,
	},
});

const BODY_PADDING_TOP = 25;
const BODY_PADDING_BOTTOM = 14;
const BODY_PADDING_HORIZONTAL = 29;

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
		paddingHorizontal: BODY_PADDING_HORIZONTAL,
		paddingTop: BODY_PADDING_TOP,
		paddingBottom: BODY_PADDING_BOTTOM,
	},
	verticalBodyPadding: {
		paddingTop: BODY_PADDING_TOP,
		paddingBottom: BODY_PADDING_BOTTOM,
	},
	horizontalBodyPadding: {
		paddingHorizontal: BODY_PADDING_HORIZONTAL,
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

	/* TEXT STYLES */
	sectionHeading: {
		...headingStyles.heading1,
		marginBottom: 8,
	},
	sectionSubheading: {
		...headingStyles.heading2,
		marginBottom: 8,
	},
	line: {
		borderBottomWidth: 1,
		borderBottomColor: '#D9D9D9',
		marginBottom: 16,
	},
	normalText: {
		fontSize: 13,
		fontFamily: 'Montserrat_400Regular',
	},
	linkText: {
		fontSize: 12,
		textDecorationStyle: 'solid',
		textDecorationLine: 'underline',
		fontFamily: 'Montserrat_400Regular',
		color: '#255799',
	},

	/* BACK BUTTON */
	backArrow: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  	},
	backButton: {
    padding: 10, 
  	},

	appCardShadow: {
		...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 5,
            },
            android: {
                elevation: 3,
            },
            web: {
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
            },
        }),
	}
});