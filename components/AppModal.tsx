import { StyleSheet, View, Image, Text, TouchableOpacity, Modal, ViewStyle} from 'react-native';
import { globalStyles } from '@/styles/globalStyles';
import ExitX from '../assets/images/exitX.png';

interface AppCardProps {
	children: React.ReactNode;
	title: string;
	isVisible: boolean;
	setVisible: (visible: boolean) => void;
	style?: ViewStyle;
}
export default function AppModal({ children, title, isVisible, setVisible, style}: AppCardProps) {
	return (
		<Modal
			transparent={true}
			visible={isVisible}
			onRequestClose={() => setVisible(false)}
		>
			<View style={styles.modalContainer}>
				<View style={[styles.modalContent, style]}>
					<View style={styles.titleContainer}>
						<Text style={[globalStyles.sectionTitle, styles.modalTitle]}>{title}</Text>

						<TouchableOpacity onPress={() => setVisible(false)}>
							<Image source={ExitX} style={styles.exitIcon} />
						</TouchableOpacity>
					</View>

					{children}
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	modalContainer: {
		position: 'absolute',
		top: 0, left: 0, right: 0, bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		backgroundColor: 'white',
		borderRadius: 12,
		paddingVertical: 20,
		paddingHorizontal: 20,
		position: 'relative',
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	exitIcon: {
		width: 16, 
		height: 16, 
		resizeMode: 'contain',
	},
	modalTitle: {
		textAlign: 'left',
		marginBottom: 16,
	}
});