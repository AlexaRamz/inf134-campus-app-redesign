import { StyleSheet, View, Image, Text, TouchableOpacity, ViewStyle, Modal, Animated, Dimensions, Pressable, Platform } from 'react-native';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { globalStyles } from '@/styles/globalStyles';
import ExitX from '@/assets/images/exitX.png';

const { height } = Dimensions.get('window');

interface AppCardProps {
    children: React.ReactNode;
    title: string;
    isVisible: boolean;
    setVisible: (visible: boolean) => void;
    style?: ViewStyle;
}

export default function AppModal({ children, title, isVisible, setVisible, style }: AppCardProps) {
    const [showContent, setShowContent] = useState(false);
    const [modalComponentVisible, setModalComponentVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(height)).current;
    const backdropOpacityAnim = useRef(new Animated.Value(0)).current;

    const handleClose = useCallback(() => {
        Animated.parallel([
            Animated.timing(backdropOpacityAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: height,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setShowContent(false);
            setModalComponentVisible(false);
            slideAnim.setValue(height);
            backdropOpacityAnim.setValue(0);
            setVisible(false);
        });
    }, [slideAnim, backdropOpacityAnim, height, setVisible]);

    useEffect(() => {
        let enterTimer: number;

        if (isVisible) {
            setModalComponentVisible(true);

            Animated.timing(backdropOpacityAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }).start();

            enterTimer = setTimeout(() => {
                setShowContent(true);
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }, 10);
        } else {
            if (modalComponentVisible) {
                handleClose();
            }
        }

        return () => {
            clearTimeout(enterTimer);
        };
    }, [isVisible, slideAnim, backdropOpacityAnim, modalComponentVisible, handleClose]);

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={modalComponentVisible}
            onRequestClose={handleClose}
        >
            <Animated.View
                style={[
                    StyleSheet.absoluteFillObject,
                    styles.customBackdrop,
                    { opacity: backdropOpacityAnim }
                ]}
            >
                <Pressable
                    style={[
                        StyleSheet.absoluteFillObject,
                        Platform.select({ web: { cursor: 'default' as any } }),
                    ]}
                    onPress={handleClose}
                >
                    {showContent && (
                        <Animated.View
                            style={[
                                styles.modalContainer,
                                { transform: [{ translateY: slideAnim }] },
                            ]}
                        >
                            <Pressable
                                style={[
									styles.modalContent, 
									style, 
									Platform.select({ web: { cursor: 'default' as any} }),
								]}
                                onPress={(e) => e.stopPropagation()}
								
                            >
                                <View style={styles.titleContainer}>
                                    <Text style={[globalStyles.sectionHeading, styles.modalTitle]}>{title}</Text>

                                    <TouchableOpacity onPress={handleClose}>
                                        <Image source={ExitX} style={styles.exitIcon} />
                                    </TouchableOpacity>
                                </View>

                                {children}
                            </Pressable>
                        </Animated.View>
                    )}
                </Pressable>
            </Animated.View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customBackdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        maxWidth: '90%',
    },
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