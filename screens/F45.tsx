import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { ScrollView, Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, Modal } from 'react-native';
import AppHeader from '@/components/AppHeader';
import AppCard from '@/components/AppCard';
import { globalStyles } from '@/styles/globalStyles';
import AppHeaderWithBack from '@/components/AppHeaderWithBack';
import Arrow from '../assets/images/backarrow.png';
import PriceTag from '../assets/images/pricetag.png';
import LocationPin from '../assets/images/locationpin.png';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//Get screen width calculation to ensure horizontal scrolling for card snaps into place 
const { width: screenWidth } = Dimensions.get('window');
export default function F45Screen({title} : any) {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <ScrollView showsVerticalScrollIndicator={true} style={globalStyles.scrollView}>
            <AppHeaderWithBack title="F45"/>

            <View style={globalStyles.scrollContentContainer}>
                {/* Descrption Container */}
                <View>
                    <Text style={globalStyles.heading2}>Class Description</Text>
                    <View style={styles.classLocationAndSpots}>
                        <Image
                            source={PriceTag}
                            style={styles.priceTag}
                        />
                        <Text style={globalStyles.heading4}>$0.00</Text>

                    </View>
                    <Text style={globalStyles.paragraphText}>This 45 minute class is fast-paced, efficient, and fun. Each workout is a complete
                        Calorie killer that will keep you motivated to move more. F-45 is a fun HIIT (high intensity interval training)
                        workout that uses functional exercise equipment like battling ropes, sleds, bikes, rowers, medicine balls, and more
                        – with exercises that are demonstrated on televisions. The workouts are wild – more than 10 completely different protocols,
                        changing every single day. F45 Pass or All Access Pass required for registration. Registration opens 48 hours in advance.</Text>
                </View>

                {/* Class Time Container */}
                <View style={styles.classTimeContainer}>
                    <Text style={styles.heading2}>Class Times</Text>
                    <AppCard style={styles.classCard}>
                        <View style={styles.leftSide}>
                            <Text style={styles.classTime}>6:30-7:15AM</Text>
                            <View style={styles.locationRow}>
                                <Image
                                    source={LocationPin}
                                    style={styles.locationPin}
                                />
                                <Text style={globalStyles.paragraphText}>F45 Studio</Text>

                            </View>
                            <Text style={styles.openClassText}>23 Spots Left</Text>
                        </View>

                        <View style={styles.rightSide}>
                            <TouchableOpacity style={styles.bookButton} onPress={openModal}>
                                <Text style={styles.bookButtonText}>Book Now</Text>
                            </TouchableOpacity>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={showModal}
                                onRequestClose={closeModal}
                            >
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        <Text style={styles.heading2}>Book class from{"\n"}1:00 - 1:45PM?</Text>

                                        <View style={styles.modalBtn}>
                                            <TouchableOpacity style={styles.closeBtn} onPress={closeModal} >
                                                <Text style={styles.modalBtnText}>Confirm</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.modalCancelBtn} onPress={closeModal}>
                                                <Text style={styles.modalCancelBtnText}>Cancel</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </AppCard>

                    <AppCard style={styles.classCard}>
                        <View style={styles.leftSide}>
                            <Text style={styles.classTime}>8:00-8:45AM</Text>
                            <View style={styles.locationRow}>
                                <Image
                                    source={LocationPin}
                                    style={styles.locationPin}
                                />
                                <Text style={globalStyles.paragraphText}>F45 Studio</Text>

                            </View>
                            <Text style={styles.openClassText}>14 Spots Left</Text>
                        </View>

                         <View style={styles.rightSide}>
                            <TouchableOpacity style={styles.bookButton} onPress={openModal}>
                                <Text style={styles.bookButtonText}>Book Now</Text>
                            </TouchableOpacity>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={showModal}
                                onRequestClose={closeModal}
                            >
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        <Text style={styles.heading2}>Book class from{"\n"}1:00 - 1:45PM?</Text>

                                        <View style={styles.modalBtn}>
                                            <TouchableOpacity style={styles.closeBtn} onPress={closeModal}>
                                                <Text style={styles.modalBtnText}>Confirm</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.modalCancelBtn} onPress={closeModal}>
                                                <Text style={styles.modalCancelBtnText}>Cancel</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </AppCard>

                    <AppCard style={styles.classCard}>
                        <View style={styles.leftSide}>
                            <Text style={styles.classTime}>9:30-10:15AM</Text>
                            <View style={styles.locationRow}>
                                <Image
                                    source={LocationPin}
                                    style={styles.locationPin}
                                />
                                <Text style={globalStyles.paragraphText}>F45 Studio</Text>

                            </View>
                            <Text style={styles.fullClassText}>1 spot left</Text>
                        </View>

                         <View style={styles.rightSide}>
                            <TouchableOpacity style={styles.bookButton} onPress={openModal}>
                                <Text style={styles.bookButtonText}>Book Now</Text>
                            </TouchableOpacity>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={showModal}
                                onRequestClose={closeModal}
                            >
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        <Text style={styles.heading2}>Book class from{"\n"}1:00 - 1:45PM?</Text>

                                        <View style={styles.modalBtn}>
                                            <TouchableOpacity style={styles.closeBtn} >
                                                <Text style={styles.modalBtnText} onPress={closeModal}>Confirm</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.modalCancelBtn} onPress={closeModal}>
                                                <Text style={styles.modalCancelBtnText}>Cancel</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </AppCard>
                    <AppCard style={styles.classCard}>
                        <View style={styles.leftSide}>
                            <Text style={styles.classTime}>1:00-1:45PM</Text>
                            <View style={styles.locationRow}>
                                <Image
                                    source={LocationPin}
                                    style={styles.locationPin}
                                />
                                <Text style={globalStyles.paragraphText}>F45 Studio</Text>

                            </View>
                            <Text style={styles.openClassText}>8 Spots Left</Text>
                        </View>
                      

                        <View style={styles.rightSide}>
                            <TouchableOpacity style={styles.bookButton} onPress={openModal}>
                                <Text style={styles.bookButtonText}>Book Now</Text>
                            </TouchableOpacity>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={showModal}
                                onRequestClose={closeModal}
                            >
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        <Text style={styles.heading2}>Book class from{"\n"}1:00 - 1:45PM?</Text>

                                        <View style={styles.modalBtn}>
                                            <TouchableOpacity style={styles.closeBtn} onPress={closeModal} >
                                                <Text style={styles.modalBtnText}>Confirm</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.modalCancelBtn} onPress={closeModal}>
                                                <Text style={styles.modalCancelBtnText}>Cancel</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
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
    heading2: {

        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 4,
        marginBottom: 8,
        color: 'black',
        textAlign: 'center',

    },
    classLocationAndSpots: {
        display: 'flex',
        flexDirection: 'row',
        height: 180,
        marginTop: -6,
        marginBottom: '-45%',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceTag: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
        marginTop: 3,
        marginRight: 5,
    },
    classTimeContainer: {
        marginTop: 10,
        paddingVertical: 5,

    },

    leftSide: {
        flexDirection: 'column',
    },
    rightSide: {

    },
    classInfo: {
        display: 'flex',
        flexDirection: 'row',
        height: 180,
        marginTop: 0,
        marginBottom: 0,
    },
    classTime: {
        fontSize: 16,
        fontFamily: 'Montserrat_700Bold',
        color: 'black'
    },
    locationPin: {
        marginTop: 1,
        marginRight: 4,
        width: 10,
        height: 10,
        resizeMode: 'contain',
    },
    openClassText: {
        color: '#1E8D2F',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        marginTop: 0,
    },
    fullClassText: {
        color: '#FF0000',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        marginTop: 0,
    },
    classCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginVertical: 5,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 0,
    },

    bookButton: {

        backgroundColor: '#255799',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 10,
    },
    bookButtonText: {
        fontSize: 12,
        fontFamily: 'Montserrat_400Regular',
        color: 'white',
    },

    //MODAL STYLING
    modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.22)',
  },
  modalContent: {
    width: 290,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 100,
  },
  modalBtn:{
      flexDirection:'column',
      justifyContent:'center',
  },
  closeBtn: {
    backgroundColor: '#255799',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
    width: '85%',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    marginTop: 5,
  },
  modelText:{
    padding:10,
    textAlign:'center',
  },
  modalBtnText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
  },
  modalCancelBtn: {
    backgroundColor: '#white',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 8,
    width: '85%',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
  },
  modalCancelBtnText: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    padding: 10, // good tap area
  },
  backArrow: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700Bold',
    color: 'black',
    marginLeft: 10,
  },
})
