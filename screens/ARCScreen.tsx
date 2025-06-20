import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { ScrollView, Text, View, ImageBackground, StyleSheet, Dimensions, Image, Linking, TouchableOpacity, Modal } from 'react-native';
import AppHeader from '@/components/AppHeader';
import arcBackground from '../assets/images/arcbackgroundpic.png'
import AppCard from '@/components/AppCard';
import CrowdMeterImage from '../assets/images/mondaycard.png';
import CrowdBar from '../assets/images/crowd_bar.png';
import { globalStyles } from '@/styles/globalStyles';
import OpenCircle from '../assets/images/opencircle.png';
import ClosedCircle from '../assets/images/closedcircle.png';
import F45 from '../assets/images/f45.png';
import Boxing from '../assets/images/boxing.png';
import Basketball from '../assets/images/basketball.png';
import Volleyball from '../assets/images/volleyball.png';
import Pickleball from '../assets/images/pickleball.png';
import Badminton from '../assets/images/badminton.png';
import Arrow from '../assets/images/arrow.png';
import ExitX from '../assets/images/exitX.png';


import mondayChart from '../assets/images/profile.png';
import tuesdayChart from '../assets/images/tuesdaycard.png';
import wednesdayChart from '../assets/images/wednesdaycard.png';



//Get screen width calculation to ensure horizontal scrolling for card snaps into place 
const { width: screenWidth } = Dimensions.get('window');
export default function ARCScreen({navigation} : any) {
	const image = { arcBackground };
	const monday = { mondayChart };
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<ScrollView showsVerticalScrollIndicator={true} style={globalStyles.scrollView}>
			<AppHeader title="ARC"></AppHeader>
			{/* Top Crowd Meter Container */}
			<View style={styles.imageBackgroundContainer}>
				{/* Image Background Container */}
				<ImageBackground source={arcBackground} resizeMode='cover' style={styles.imageBackground}>
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
			<View style={globalStyles.scrollContentContainer} >



				{/* ARC Hours Section */}
				<View>
					<View>
							<TouchableOpacity onPress={openModal}>
								<Text style={globalStyles.heading2}>ARC</Text>
							</TouchableOpacity>			

							<View style={styles.courtContentWrapper}>
								<View style={styles.openStatusContainer}>
									<Text style={styles.openText}>● Open until 12:00AM</Text>
								</View>
							<View>
								<TouchableOpacity onPress={openModal}>
									<Image
										source={Arrow}
										style={styles.arrow}
									/>
								</TouchableOpacity>

								<Modal
								transparent={true}
								visible={showModal}
								onRequestClose={closeModal}
								>
								<View style={styles.modalContainer}>
									<View style={styles.modalContent}>

										{/* Close X button */}
										<TouchableOpacity
											onPress={closeModal}
											style={styles.closeButtonAbsolute}
											accessibilityLabel="Close Hours Modal"
											accessibilityRole="button"
										>
											<Image source={ExitX} style={styles.exitX} />
										</TouchableOpacity>

										{/* Modal Title */}
										<Text style={globalStyles.heading2}>Hours</Text>

										{/* Modal Hours */}
										<View style={styles.modalHours}>
											<View style={styles.hourGroup}>
												<Text style={globalStyles.heading4}>ARC</Text>
												<Text style={styles.modalBodyText}>Monday - Friday: 6:00am - 12:00am</Text>
												<Text style={styles.modalBodyText}>Saturday: 8:00am - 9:00pm</Text>
												<Text style={styles.modalBodyText}>Sunday: 8:00am - 12:00am</Text>

												<Text style={styles.modalBodyText}>Pool</Text>
												<Text style={styles.modalBodyText}>Monday - Friday: 6:30am - 12:00am</Text>
												<Text style={styles.modalBodyText}>Saturday: 8:30am - 9:00pm</Text>
												<Text style={styles.modalBodyText}>Sunday: 8:30am - 12:00am</Text>

												<Text style={styles.modalBodyText}>Field</Text>
												<Text style={styles.modalBodyText}>Monday - Friday: 7:00am - 9:00pm</Text>
												<Text style={styles.modalBodyText}>Saturday: 8:00am - 8:00pm</Text>
												<Text style={styles.modalBodyText}>Sunday: 8:00am - 10:00pm</Text>
											</View>
										</View>

										</View>
									</View>
								</Modal>

							</View>
						</View>
					</View>

					<Text style={globalStyles.heading2}>Crowd History</Text>
					<ScrollView
						horizontal={true}
						style={styles.crowdContainer}
						showsHorizontalScrollIndicator={false}>

						<AppCard style={styles.crowdMeterBox}>
							<Image
								source={CrowdMeterImage}
								style={styles.crowdMeterImage}
							/>
						</AppCard>
						<AppCard style={styles.crowdMeterBox}>
							<Image
								source={tuesdayChart}
								style={styles.crowdMeterImage}
							/>
						</AppCard>
						<AppCard style={styles.crowdMeterBox}>
							<Image
								source={wednesdayChart}
								style={styles.crowdMeterImage}
							/>
						</AppCard>
					</ScrollView>


				</View>

				{/* Class Container */}
				<View style={styles.classContainer}>
					<Text style={globalStyles.heading2}>Today's Classes</Text>
					<Text style={globalStyles.linkText}>See All →</Text>
				</View>

				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.classesCarouselContent}
				>

					<AppCard style={styles.classCard}>
						<TouchableOpacity
							onPress={() => navigation.navigate('ARCDetails')}
							style={{ flex: 1 }}
						>
							<ImageBackground
								source={F45}
								style={styles.classCardImageBackground}
								imageStyle={{ borderRadius: 8 }}
							>
								<View> 
									<Text style={styles.cardText}>F45</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>
					</AppCard>

					<AppCard style={styles.classCard}>
						<ImageBackground source={Boxing} resizeMode='cover' style={styles.classCardImageBackground}>
							<View>
								<Text style={styles.cardText}>Boxing Club</Text>
							</View>
						</ImageBackground>
					</AppCard>

				</ScrollView>

				{/*Court Status Section */}
				<View>
					<Text style={globalStyles.heading2}>Court Status</Text>
					<AppCard style={styles.courtCard}>
						<View style={styles.courtContentWrapper}>
							<Image source={Basketball} resizeMode='cover' style={styles.courtIcon} />
							<View style={styles.courtTextContainer}>
								<Text style={globalStyles.heading4}>Basketball</Text>
								<Text style={globalStyles.paragraphText}>Courts 1 & 2</Text>
								<Text style={globalStyles.paragraphText}>6:00AM-11:30PM</Text>
							</View>
							<Image
								source={OpenCircle}
								style={styles.openCircleImage}
							/>
						</View>
					</AppCard>
					<AppCard style={styles.courtCard}>
						<View style={styles.courtContentWrapper}>
							<Image source={Volleyball} resizeMode='cover' style={styles.courtIcon} />
							<View style={styles.courtTextContainer}>
								<Text style={globalStyles.heading4}>Volleyball</Text>
								<Text style={globalStyles.paragraphText}>Court 3</Text>
								<Text style={globalStyles.paragraphText}>7:00AM-11:30PM</Text>
							</View>
							<Image
								source={OpenCircle}
								style={styles.openCircleImage}
							/>
						</View>
					</AppCard>
					<AppCard style={styles.courtCard}>
						<View style={styles.courtContentWrapper}>
							<Image source={Badminton} resizeMode='cover' style={styles.courtIcon} />
							<View style={styles.courtTextContainer}>
								<Text style={globalStyles.heading4}>Badminton</Text>
								<Text style={globalStyles.paragraphText}>Back Court</Text>
								<Text style={globalStyles.paragraphText}>11:00AM-11:30PM</Text>
							</View>
							<Image
								source={ClosedCircle}
								style={styles.openCircleImage}
							/>
						</View>
					</AppCard>
					<AppCard style={styles.courtCard}>
						<View style={styles.courtContentWrapper}>
							<Image source={Pickleball} resizeMode='cover' style={styles.courtIcon} />
							<View style={styles.courtTextContainer}>
								<Text style={globalStyles.heading4}>Pickleball</Text>
								<Text style={globalStyles.paragraphText}>Pickleball Courts</Text>
								<Text style={globalStyles.paragraphText}>12:00PM-5:30PM</Text>
							</View>
							<Image
								source={ClosedCircle}
								style={styles.openCircleImage}
							/>
						</View>
					</AppCard>

				</View>



			</View>
		</ScrollView>
	);

};

// Stylesheet 
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f2f5',
	},
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

	arrow: {
		width: 16, // increased size
		height: 16,
		resizeMode: 'contain',
		marginTop: -20,
	},

	hourGroup: {
		marginTop: 10,
	},

	/* ARC CROWD METER */
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
	crowdMeterBar: {
		width: 190,
		resizeMode: 'contain',
		marginBottom: -14,
		marginTop: -12,
	},
	openStatusContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: -8,
		marginBottom: 24,
	},
	openCircleImage: {
		width: 10,
		height: 10,
		resizeMode: 'contain',
		marginRight: 3,
	},
	openText: {
		fontSize: 14,
		fontFamily: 'Montserrat_400Regular',
		color: '#1E8D2F',
	},

	// MODAL — IMPROVED
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		width: '90%', // responsive
		maxWidth: 400, // max size
		backgroundColor: 'white',
		borderRadius: 16, // more modern look
		paddingVertical: 30,
		paddingHorizontal: 24,
		alignItems: 'center',
	},
	modalBodyText: {
    fontSize: 16, // increase to 16px or 17px for mobile-friendly
    fontFamily: 'Montserrat_400Regular',
    color: 'black',
    marginBottom: 6,
    textAlign: 'left',
    lineHeight: 24, // add line height for spacing between lines
},
	modalBtn: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	modalBtnText: {
		fontSize: 16, // increased font size
		color: 'black',
		textAlign: 'center',
		fontFamily: 'Montserrat_400Regular',
	},
	confirmBtn: {
		backgroundColor: '#255799',
		paddingVertical: 14, // increased button height
		paddingHorizontal: 20,
		borderRadius: 10,
		marginTop: 20,
		width: 180, // bigger width
		alignItems: 'center',
	},
	closeBtn: {
		backgroundColor: 'white',
		paddingVertical: 14,
		paddingHorizontal: 20,
		borderRadius: 10,
		marginTop: 20,
		width: 180,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#ccc',
	},
	modelText: {
		padding: 10,
		fontFamily: 'Montserrat_700Bold',
		fontSize: 22, // larger title
		color: 'black',
		textAlign: 'center',
	},

	hourTitle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 0,
	},
	modalHours: {},

	closeButtonAbsolute: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
	},

	exitX: {
    width: 24,         // actual image size — smaller inside big click area
    height: 24,
    resizeMode: 'contain',
	},



	/* CLASS CARDS */
	classesCarouselContent: {
		marginTop: 0,
		marginBottom: 30,
		paddingRight: 10,
	},
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

	classContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	courtCard: {
		backgroundColor: '#fff',
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
		width: '100%',
		minHeight: 80,
		marginBottom: 12,
		paddingHorizontal: 15,
		paddingVertical: 6,
		justifyContent: 'center',
	},
	courtContentWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	courtIcon: {
		width: 40,
		height: 40,
		resizeMode: 'contain',
		marginRight: 15,
	},
	courtTextContainer: {
		flex: 1,
		justifyContent: 'center',
	},
});

