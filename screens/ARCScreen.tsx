import React, { useState } from 'react';
import { ScrollView, Text, View, ImageBackground, StyleSheet, Dimensions, Image, Linking, TouchableOpacity, Modal } from 'react-native';
import AppHeader from '@/components/AppHeader';
import CrowdBarHeader from '@/components/CrowdBarHeader';
import ArcBackground from '../assets/images/arcbackgroundpic.png'
import AppCard from '@/components/AppCard';
import { globalStyles } from '@/styles/globalStyles';
import F45 from '../assets/images/f45.png';
import Boxing from '../assets/images/boxing.png';
import Basketball from '../assets/images/basketball.png';
import Volleyball from '../assets/images/volleyball.png';
import Pickleball from '../assets/images/pickleball.png';
import Badminton from '../assets/images/badminton.png';
import Arrow from '../assets/images/arrow.png';
import ExitX from '../assets/images/exitX.png';

import mondayChart from '../assets/images/mondaycard.png';
import tuesdayChart from '../assets/images/tuesdaycard.png';
import wednesdayChart from '../assets/images/wednesdaycard.png';
import CourtCard from '@/components/CourtCard';
import ClassCard from '@/components/ClassCard';


//Get screen width calculation to ensure horizontal scrolling for card snaps into place 
const { width: screenWidth } = Dimensions.get('window');
export default function ARCScreen({navigation} : any) {
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
			
			<CrowdBarHeader backgroundImage={ArcBackground}/>

			<View style={globalStyles.bodyContentContainer} >
				{/* ARC Hours Section */}
				<View>
					<View>
							<TouchableOpacity onPress={openModal}>
								<Text style={globalStyles.heading2}>ARC</Text>
							</TouchableOpacity>			

							<View style={styles.hoursContentWrapper}>
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
						style={globalStyles.crowdContainer}
						showsHorizontalScrollIndicator={false}>

						<AppCard style={globalStyles.crowdMeterBox}>
							<Image
								source={mondayChart}
								style={globalStyles.crowdMeterImage}
							/>
						</AppCard>
						<AppCard style={globalStyles.crowdMeterBox}>
							<Image
								source={tuesdayChart}
								style={globalStyles.crowdMeterImage}
							/>
						</AppCard>
						<AppCard style={globalStyles.crowdMeterBox}>
							<Image
								source={wednesdayChart}
								style={globalStyles.crowdMeterImage}
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
					<ClassCard name={'F45'} backgroundImage={F45} navigation={navigation} detailsPage={'ARCDetails'}/>
					<ClassCard name={'Boxing Club'} backgroundImage={Boxing} navigation={navigation} detailsPage={''}/>
			</ScrollView>

			{/*Court Status Section */}
			<View>
				<Text style={globalStyles.heading2}>Court Status</Text>

				<CourtCard name={'Basketball'} location={'Courts 1 & 2'} time={'6:00AM-11:30PM'} icon={Basketball} isOpen={true}/>
				<CourtCard name={'Volleyball'} location={'Court 3'} time={'7:00AM-11:30PM'} icon={Volleyball} isOpen={true}/>
				<CourtCard name={'Badminton'} location={'Back Court'} time={'11:00AM-11:30PM'} icon={Badminton} isOpen={false}/>
				<CourtCard name={'Pickleball'} location={'Pickleball Courts'} time={'12:00PM-5:30PM'} icon={Pickleball} isOpen={false}/>
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

	arrow: {
		width: 16, // increased size
		height: 16,
		resizeMode: 'contain',
		marginTop: -20,
	},

	hourGroup: {
		marginTop: 10,
	},

	openStatusContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: -8,
		marginBottom: 24,
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
	classContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	
	hoursContentWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

