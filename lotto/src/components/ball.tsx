import React from "react";
import {View, Text, StyleSheet} from "react-native";

type Ball = {
    number: number;
}

export const Ball = ({number}: Ball) => {
    return (
        <View style={styles.ballContainer}>
            <Text style ={styles.number}>
                {number}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ballContainer: {
        width:40,
        height:40,
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 40,
        borderWidth: 1,
        margin:5,
    },
    number: {
        fontSize: 20,
    }
})