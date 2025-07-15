import { StyleSheet, ViewStyle, Modal, Animated, Dimensions, Pressable, Platform } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

const { height } = Dimensions.get('window');

export interface AppModalProps {
    children: React.ReactNode;
    isVisible: boolean;
    setVisible: (visible: boolean) => void;
    contentStyle?: ViewStyle;
    onCloseAnimationEnd?: () => void;
}

/**
 * The base modal component for our app. 
 * Has a white rounded background, sliding transition, and a darkened backdrop with fading transition
 */
export default function AppModal({ children, isVisible, setVisible, contentStyle, onCloseAnimationEnd }: AppModalProps) {
    const [showContent, setShowContent] = useState(false);
    const [modalComponentVisible, setModalComponentVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(height)).current;
    const backdropOpacityAnim = useRef(new Animated.Value(0)).current;

    const handleClose = () => {
        Animated.parallel([
            Animated.timing(backdropOpacityAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: height,
                duration: 400,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setShowContent(false);
            setModalComponentVisible(false);
            slideAnim.setValue(height);
            backdropOpacityAnim.setValue(0);
            onCloseAnimationEnd?.();
        });
    };

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
									contentStyle, 
									Platform.select({ web: { cursor: 'default' as any} }),
								]}
                                onPress={(e) => e.stopPropagation()}
								
                            >
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
});