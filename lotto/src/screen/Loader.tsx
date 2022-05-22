import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import { MAKER_BLACK } from "../common/color";
import { LottoText } from "../components/lottoText";

export const Loader = ({navigation}) => {

    const nextScreen = () => {
        setTimeout(() => {
            navigation.push("Numbers");
        }, 2000);
    }

    useEffect(() => {
        nextScreen();
    })
    return (
        <SafeAreaView style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#4618A8" />
            <LottoText fontSize={13} fontColor={MAKER_BLACK} fontWeight={"300"} textStyle={{margin:10}}>행운을 추출하고 있어요</LottoText>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
