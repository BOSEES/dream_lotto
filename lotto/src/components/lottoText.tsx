import React from "react";
import { StyleProp, TextStyle, Text, StyleSheet } from "react-native";

type TextType = {
    children?: string;
    fontSize: number;
    fontWeight: FontWeight;
    fontColor?: string;
    textStyle?: StyleProp<TextStyle>;
};

type FontWeight = 'bold' | 'medium' | 'light';

export const LottoText = ({children, fontColor, fontWeight, fontSize, textStyle}: TextType) => {
    const styles = StyleSheet.create({
        text: {
            ...(textStyle as TextStyle),
            fontSize: fontSize,
            fontWeight: fontWeight,
            color: fontColor,
        },
    });
    return <Text style={styles.text}>{children}</Text>;
}

