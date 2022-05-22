import React, { useEffect } from "react";
import { View, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { MAKER_PUPPLE, MAKER_WHITE } from "../common/color";
import { LottoText } from "../components/lottoText";

export const Splash = ({navigation}) => {

    const nextScreen = () => {
        setTimeout(() => {
            navigation.push("Home");
        }, 1500);
    }

    useEffect(() => {
        nextScreen();
    })
    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground style={styles.image} source={require("../images/background_splash.png")}>
                <View style={{flex: 1, backgroundColor: 'rgba(38, 1, 145, 0.3)',}}></View>
            </ImageBackground>
            <View style={styles.splashContainer}>
                <LottoText fontColor={MAKER_WHITE} fontSize={28} fontWeight={"bold"} textStyle={{margin:20}}>
                    좋은 꿈, 꾸셨어요?
                </LottoText>
                <View style={styles.titleContainer}>
                    <LottoText fontColor={MAKER_WHITE} fontSize={21} fontWeight={"bold"}>
                    꿈을 담는 로또 번호 추첨앱
                    </LottoText>
                    <LottoText fontColor={MAKER_WHITE} fontSize={34} fontWeight={"bold"} textStyle={{opacity: 0.5}}>
                        Dream Lotto
                    </LottoText>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    titleContainer: {
        width: "70%",
        height:"50%",
        padding:16,
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.3)"
    },
})
