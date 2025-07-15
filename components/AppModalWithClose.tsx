import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '@/styles/globalStyles';
import ExitX from '@/assets/images/exitX.png';
import AppModal, { AppModalProps } from './AppModal';

interface AppModalWithCloseProps extends AppModalProps {
    title: string,
}

/**
 * A variation of our app's modal component that adds a title and a close button
 */
export default function AppModalWithClose({ children, title, isVisible, setVisible, contentStyle, onCloseAnimationEnd }: AppModalWithCloseProps) {
    const handleClose = () => {
        setVisible(false);
    };
    
    return (
        <AppModal isVisible={isVisible} setVisible={setVisible} contentStyle={contentStyle} onCloseAnimationEnd={onCloseAnimationEnd}>
            <View style={styles.titleContainer}>
                <Text style={[globalStyles.sectionHeading, styles.modalTitle]}>{title}</Text>
                <TouchableOpacity onPress={handleClose}>
                    <Image source={ExitX} style={styles.exitIcon} />
                </TouchableOpacity>
            </View>
            {children}
        </AppModal>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    exitIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
		marginTop: 4,
		marginRight: 4,
    },
    modalTitle: {
        textAlign: 'left',
		marginBottom: 16,
    },
});