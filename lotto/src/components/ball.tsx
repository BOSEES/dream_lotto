import React from "react";
import { View, StyleSheet } from "react-native";
import { LottoText } from "./lottoText";
import LinearGradient from 'react-native-linear-gradient';

type Ball = {
    number: number;
    ballColor: string;
    fontColor: string;
    fontSize?: number;
    width?: number;
    height?: number;
    gradient?: boolean
}

export const Ball = ({number, ballColor, fontColor, fontSize = 15, width = 40, height = 40, gradient = false}: Ball) => {
    const styles = StyleSheet.create({
        ballContainer: {
            width: width,
            height: height,
            justifyContent: "center",
            alignItems:"center",
            borderRadius: height,
            margin:5,
            backgroundColor: ballColor,
        },
        number: {
            fontSize: fontSize,
        }
    })
    
    return (
        <>
            {gradient
                ?   <LinearGradient 
                        colors={["#FF2CDF","rgba(99, 44, 255, 0.42)","#FFFFFF"]} 
                        style={styles.ballContainer}
                        start={{ x: 0, y: 0}}
                        end={{ x: 1, y: 1 }}
                        >
                        <LottoText textStyle={styles.number} fontSize={fontSize} fontColor={fontColor} fontWeight={"700"}>
                            {number}
                        </LottoText>
                    </LinearGradient>
                :   <View style={styles.ballContainer}>
                    <LottoText textStyle={styles.number} fontSize={fontSize} fontColor={fontColor} fontWeight={"700"}>
                        {number}
                    </LottoText>
                    </View>
                }
        </>
    )
}