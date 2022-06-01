import React, {useEffect} from 'react';
import { SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';
import {
    InterstitialAd,
    AdEventType,
    TestIds,
} from '@react-native-firebase/admob';

export const ScreenAdd = ({ navigation }) => {
  // ad
    useEffect(() => {
        const interstitialAd = InterstitialAd.createForAdRequest(
        TestIds.INTERSTITIAL,
        );
        interstitialAd.onAdEvent((type, error) => {
        console.log('New advert event: ', type);
        if (error) {
            navigation.push("Home");
        } else if (type === AdEventType.LOADED) {
            interstitialAd.show();
            console.log('show');
        } else if (type === "closed") {
            navigation.push("Loader");
        }
        });
        interstitialAd.load();
    }, []);
  // ad

    return (
        <SafeAreaView style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#4618A8" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    loaderContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
