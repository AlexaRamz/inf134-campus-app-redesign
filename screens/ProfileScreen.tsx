import AppHeader from '@/components/AppHeader';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import BarcodeImage from '../assets/images/barcode.png';
import ProfileImage from '../assets/images/profile.png';
import { globalStyles } from '@/styles/globalStyles';
import AppCard from '@/components/AppCard';

export default function ProfileScreen() {
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState('Peter Hill\nAnteater');

  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [schoolInfo, setSchoolInfo] = useState(
    'First Year\nPaul Merage\nSchool of Business'
  );

  return (
    <View style={globalStyles.screenContainer}>
      <AppHeader title="Profile" />
      <View style={styles.screenContainer}>
        <AppCard style={styles.barcodeBox}>
          <View style={styles.profileRow}>
            <Image source={ProfileImage} style={styles.profileImage} />

            <View style={styles.textColumn}>
              {isEditingName ? (
                <TextInput
                  style={[styles.profileName, { borderWidth: 1, padding: 4 }]}
                  multiline
                  value={name}
                  onChangeText={setName}
                  onBlur={() => setIsEditingName(false)}
                  autoFocus
                />
              ) : (
                <TouchableOpacity onPress={() => setIsEditingName(true)}>
                  <Text style={styles.profileName}>{name}</Text>
                </TouchableOpacity>
              )}

              {isEditingInfo ? (
                <TextInput
                  style={[styles.profileDetails, { borderWidth: 1, padding: 4 }]}
                  multiline
                  value={schoolInfo}
                  onChangeText={setSchoolInfo}
                  onBlur={() => setIsEditingInfo(false)}
                  autoFocus
                />
              ) : (
                <TouchableOpacity onPress={() => setIsEditingInfo(true)}>
                  <Text style={styles.profileDetails}>{schoolInfo}</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={styles.barcodeBox}>
            <Image source={BarcodeImage} style={styles.barcodeImage} />
			<Text style={styles.barcodeLabel}>
			{name.replace(/\n/g, ' ')} - 12345678
			</Text>          
			</View>
        </AppCard>

        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => console.log('Sign Out pressed')}
        >
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
	screenContainer: {
		paddingTop: 25,
		paddingHorizontal: 25,
	},

/* PROFILE */
	signOutButton: {
		backgroundColor: '#255799',
		paddingVertical: 8,
		paddingHorizontal: 20,
		borderRadius: 10,
		alignSelf: 'center',
		marginTop: 10,
	},

	signOutButtonText: {
		color: 'white',
		fontSize: 14,
		fontFamily: 'Montserrat_500Medium',
		textAlign: 'center',
	},

	profileBox: {
		alignItems: 'flex-start',
		alignSelf: 'center',
		paddingHorizontal: 44,
		paddingTop: 24,
		paddingBottom: 8,
		marginBottom: 21,
	},
	
	profileName: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 16,
		marginBottom: 4,
	},

	profileDetails: {
		fontFamily: 'Montserrat_400Regular',
		fontSize: 12,
		color: '#333',
	},

	profileImage: {
		width: 150,
		height: 150,
		marginBottom: 4,
		borderRadius: 12,
	},

	profileRow: {
		flexDirection: 'row',
		alignItems: 'flex-start',
	},

	textColumn: {
		flexDirection: 'column',
		marginLeft: 16,
		justifyContent: 'flex-start',
	},

/* BARCODE */
	barcodeBox: {
		alignItems: 'center',
		alignSelf: 'center',
		paddingHorizontal: 24,
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
});
