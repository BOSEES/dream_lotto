import React, { useEffect } from "react";
import { View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {PASTEL_PUPPLE, PASTEL_YELLOW, PASTEL_PINK} from "../common/color";

export const Splash = ({navigation}) => {

    const nextScreen = () => {
        setTimeout(() => {
            navigation.navigate("Home");
        }, 1000);
    }

    useEffect(() => {
        nextScreen();
    })
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.splashContainer}>
                <Text style={styles.subTitle}>
                    꿈자리 로또번호 추출기
                </Text>
                <Text style={styles.mainTitle}>
                    드림로또
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        // backgroundColor: PASTEL_PUPPLE,
    },
    mainTitle: {
        fontSize: 40,
        color: PASTEL_PINK
    },
    subTitle: {

    }
})