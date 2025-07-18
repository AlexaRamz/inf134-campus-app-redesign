import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppCard from '@/components/AppCard';
import { globalStyles, headingStyles } from '@/styles/globalStyles';
import AppHeaderWithBack from '@/components/AppHeaderWithBack';
import PriceTag from '../assets/images/pricetag.png';
import LocationPin from '../assets/images/locationpin.png';
import AppModal from '@/components/AppModal';

export default function ARCDetailsScreen() {
    type ClassId = '630' | '800' | '930' | '100';

    const [bookings, setBookings] = useState<Record<ClassId, boolean>>({
        '630': false,
        '800': false,
        '930': false,
        '100': false,
    });

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedClass, setSelectedClass] = useState<ClassId | null>(null);
    const [classIsBooked, setClassIsBooked] = useState<boolean>(false);

    // Always open modal when button pressed
    const handleBookingPress = (classId: ClassId) => {
        setSelectedClass(classId);
        setModalVisible(true);
        setClassIsBooked(bookings[classId])
    };

    const onModalCloseEnd = () => {
        setSelectedClass(null)
    }

    return (
        <View style={{ flex: 1 }}>
            <AppHeaderWithBack title="F45" />
            <ScrollView showsVerticalScrollIndicator={true} style={globalStyles.scrollView}>

                <View style={globalStyles.bodyContentContainer}>
                    {/* Class Description */}
                    <View>
                        <Text style={globalStyles.sectionHeading}>Class Description</Text>

                        <View style={styles.classLocationAndSpots}>
                            <Image source={PriceTag} style={styles.priceTag} />
                            <Text style={styles.subheading}>$0.00</Text>
                        </View>

                        <Text style={globalStyles.normalText}>
                            This 45 minute class is fast-paced, efficient, and fun. Each workout is a complete calorie killer that will keep you motivated to move more. 
                            F-45 is a fun HIIT (high intensity interval training) workout that uses functional exercise equipment like battling ropes, sleds, bikes, rowers, medicine balls, and more 
                            – with exercises that are demonstrated on televisions. The workouts are wild – more than 10 completely different protocols, changing every single day. 
                            F45 Pass or All Access Pass required for registration. Registration opens 48 hours in advance.
                        </Text>
                    </View>

                    {/* Class Times */}
                    <View style={styles.classTimeContainer}>
                        <Text style={[globalStyles.sectionHeading, { marginTop: 16 }]}>Class Times</Text>

                        {['630', '800', '930', '100'].map(classId => (
                            <AppCard style={styles.classCard} key={classId}>
                                <View style={styles.leftSide}>
                                    <Text style={headingStyles.heading2}>
                                        {{
                                            '630': '6:30-7:15AM',
                                            '800': '8:00-8:45AM',
                                            '930': '9:30-10:15AM',
                                            '100': '1:00-1:45PM',
                                        }[classId as ClassId]}
                                    </Text>

                                    <View style={styles.locationRow}>
                                        <Image source={LocationPin} style={styles.locationPin} />
                                        <Text style={globalStyles.normalText}>F45 Studio</Text>
                                    </View>

                                    <Text style={styles.openClassText}>
                                        {{
                                            '630': '23 Spots Left',
                                            '800': '14 Spots Left',
                                            '930': '1 Spot Left',
                                            '100': '8 Spots Left',
                                        }[classId as ClassId]}
                                    </Text>
                                </View>

                                <View style={styles.rightSide}>
                                    <TouchableOpacity
                                        style={[
                                            styles.bookButton,
                                            bookings[classId as ClassId] && styles.cancelButton,
                                        ]}
                                        onPress={() => handleBookingPress(classId as ClassId)}
                                    >
                                        <Text style={styles.bookButtonText}>
                                            {bookings[classId as ClassId] ? 'Remove Booking' : 'Book Now'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </AppCard>
                        ))}
                    </View>
                </View>
            </ScrollView>

            {/* Booking/Cancel Modal */}
            <AppModal isVisible={modalVisible} setVisible={setModalVisible} contentStyle={styles.modalContent} onCloseAnimationEnd={onModalCloseEnd}>
                <Text style={styles.modalTitle}>
                    {classIsBooked 
                        ? 'Remove booking for this class?' 
                        : 'Add booking for this class?'
                    }
                </Text>

                <View style={styles.modalButtonRow}>
                    <TouchableOpacity
                        style={styles.confirmButton}
                        onPress={() => {
                            if (selectedClass) {
                                setBookings(prev => ({
                                    ...prev,
                                    [selectedClass]: !prev[selectedClass], // toggle booking
                                }));
                                setModalVisible(false);
                            }
                        }}
                    >
                        <Text style={styles.modalButtonText}>Confirm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cancelButtonModal}
                        onPress={() => {
                            setModalVisible(false);
                        }}
                    >
                        <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </AppModal>
        </View>
    );
}

// Stylesheet 
    const styles = StyleSheet.create({
    classLocationAndSpots: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subheading: {
        ...headingStyles.heading4,
        marginBottom: 8,
    },

    priceTag: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
        marginRight: 5,
    },

    classTimeContainer: {
        marginTop: 10,
        paddingVertical: 5,
    },

    classCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginVertical: 5,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    leftSide: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    rightSide: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 4,
    },

    locationPin: {
        marginRight: 4,
        width: 10,
        height: 10,
        resizeMode: 'contain',
    },

    openClassText: {
        ...globalStyles.normalText,
        color: '#1E8D2F',
    },

    fullClassText: {
        ...globalStyles.normalText,
        color: '#FF0000',
    },

    bookButton: {
        backgroundColor: '#255799',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 10,
    },

    cancelButton: {
        backgroundColor: '#8B0000', // dark red
    },

    bookButtonText: {
        ...globalStyles.normalText,
        color: 'white',
    },

    modalContent: {
        width: 300,
        alignItems: 'center',
    },

    modalTitle: {
        fontSize: 18,
        fontFamily: 'Montserrat_700Bold',
        color: 'black',
        marginBottom: 16,
        textAlign: 'center',
        marginHorizontal: 10,
    },

    modalButtonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
        marginTop: 20,
    },

    confirmButton: {
        backgroundColor: '#255799',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        alignItems: 'center',
    },

    cancelButtonModal: {
        backgroundColor: '#FF0000',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        alignItems: 'center',
    },

    modalButtonText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'center',
    },
});

