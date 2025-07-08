import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
    title: string;
    renderTabs?: () => React.ReactNode;
}

const DESIRED_TOTAL_TOP_SPACE = 70;

export default function AppHeader({ title, renderTabs }: HeaderProps) {
    const insets = useSafeAreaInsets();

    const calculatedPaddingTop = Math.max(0, DESIRED_TOTAL_TOP_SPACE - insets.top);

    return (
        <SafeAreaView
            style={styles.safeArea}
            edges={['top', 'left', 'right']}
        >
            <View
                style={[styles.headerContentWrapper, { paddingTop: calculatedPaddingTop }]}
            >
                <Text style={[styles.headerText, renderTabs && styles.tabsHeaderText]}>
                    {title}
                </Text>
                {renderTabs && (
                    <View>
                        {renderTabs()}
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#255799',
    },
    headerContentWrapper: {
        justifyContent: 'flex-end',
    },
    headerText: {
        color: 'white',
        fontSize: 32,
        fontFamily: 'Montserrat_700Bold',
        marginBottom: 24,
        alignSelf: 'center',
    },
    tabsHeaderText: {
        marginBottom: 8,
    },
    backArrow: {
        width: 24,
        height: 24,
        marginRight: 10,
        resizeMode: 'contain',
    },
    backButton: {
        padding: 10,
    },
});