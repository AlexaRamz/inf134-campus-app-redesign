import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import AppHeader from '@/components/AppHeader';
import CrowdBarHeader from '@/components/CrowdBarHeader';
import ArcBackground from '../assets/images/arcbackgroundpic.png'
import { globalStyles } from '@/styles/globalStyles';
import F45 from '../assets/images/f45.png';
import Boxing from '../assets/images/boxing.png';
import Basketball from '../assets/images/basketball.png';
import Volleyball from '../assets/images/volleyball.png';
import Pickleball from '../assets/images/pickleball.png';
import Badminton from '../assets/images/badminton.png';

import MondayChart from '../assets/images/mondaycard.png';
import TuesdayChart from '../assets/images/tuesdaycard.png';
import WednesdayChart from '../assets/images/wednesdaycard.png';
import CourtCard from '@/components/CourtCard';
import ClassCard from '@/components/ClassCard';
import ServiceHoursHeader from '@/components/ServiceHoursHeader';
import AppModal from '@/components/AppModal';
import CrowdHistoryCard from '@/components/CrowdHistoryCard';


export default function ARCScreen({navigation} : any) {
	const [showModal, setShowModal] = useState(false);

	return (
		<ScrollView showsVerticalScrollIndicator={true} style={globalStyles.scrollView}>
			<AppHeader title="ARC"></AppHeader>
			
			<CrowdBarHeader backgroundImage={ArcBackground}/>

			<View style={globalStyles.bodyContentContainer} >
				{/* ARC Hours Section */}
				<ServiceHoursHeader serviceName={'ARC'} isOpen={true} availabilityText={'Open until 12:00AM'} onPressCallback={() => setShowModal(true)}></ServiceHoursHeader>
						
				<AppModal title='Hours' isVisible={showModal} setVisible={setShowModal} style={styles.hoursModal}>
					<View style={styles.hoursModalContent}>
						<Text style={globalStyles.heading2}>ARC</Text>
						<Text style={styles.modalBodyText}>Monday - Friday: 6:00am - 12:00am</Text>
						<Text style={styles.modalBodyText}>Saturday: 8:00am - 9:00pm</Text>
						<Text style={styles.modalBodyText}>Sunday: 8:00am - 12:00am</Text>

						<Text style={globalStyles.heading2}>Pool</Text>
						<Text style={styles.modalBodyText}>Monday - Friday: 6:30am - 12:00am</Text>
						<Text style={styles.modalBodyText}>Saturday: 8:30am - 9:00pm</Text>
						<Text style={styles.modalBodyText}>Sunday: 8:30am - 12:00am</Text>

						<Text style={globalStyles.heading2}>Field</Text>
						<Text style={styles.modalBodyText}>Monday - Friday: 7:00am - 9:00pm</Text>
						<Text style={styles.modalBodyText}>Saturday: 8:00am - 8:00pm</Text>
						<Text style={styles.modalBodyText}>Sunday: 8:00am - 10:00pm</Text>
					</View>
				</AppModal>

				{/* Crowd History */}
				<Text style={globalStyles.heading2}>Crowd History</Text>
				<ScrollView
					horizontal={true}
					style={[styles.crowdScrollContainer]}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.crowdScrollContent}
				>
					<CrowdHistoryCard dayChartImage={MondayChart}/>
					<CrowdHistoryCard dayChartImage={TuesdayChart}/>
					<CrowdHistoryCard dayChartImage={WednesdayChart}/>
				</ScrollView>

				{/* Classes */}
				<View style={styles.classHeading}>
					<Text style={globalStyles.heading2}>Today's Classes</Text>
					<Text style={globalStyles.linkText}>See All →</Text>
				</View>

				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.classesScrollContent}
					style={[styles.classScrollContainer]}
				>
					<ClassCard name={'F45'} backgroundImage={F45} navigation={navigation} detailsPage={'ARCDetails'}/>
					<ClassCard name={'Boxing Club'} backgroundImage={Boxing} navigation={navigation} detailsPage={''}/>
				</ScrollView>

				{/* Court Status Section */}
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

const styles = StyleSheet.create({
	modalBodyText: {
		fontSize: 15,
		fontFamily: 'Montserrat_400Regular',
		color: '#434343',
		lineHeight: 24,
	},
	hoursModalContent: {
		minWidth: 300,
	},
	hoursModal: {
		paddingHorizontal: 25,
		paddingVertical: 25,
	},
	classHeading: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	crowdScrollContainer: {
		marginHorizontal: -29,
		paddingLeft: 29,
		paddingRight: 6,
		marginBottom: 10,
	},
	crowdScrollContent: {
		overflow: 'visible',
		paddingBottom: 10,
	},
	classScrollContainer: {
		marginHorizontal: -29,
		paddingLeft: 29,
		paddingRight: 6,
		marginBottom: 25,
	},
	classesScrollContent: {
		overflow: 'visible',
	},
});
