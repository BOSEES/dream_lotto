import React from "react";
import { SafeAreaView, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { MAKER_BLACK, MAKER_PUPPLE, MAKER_WHITE } from "../common/color";
import { LottoText } from "../components/lottoText";
import { useRecoilValue } from "recoil";
import { DreamState, RandomState } from "../states";
import { Ball } from "../components/ball";

export const Numbers = ({navigation}) => {
    const DreamValue = useRecoilValue(DreamState);
    const RandomValue = useRecoilValue(RandomState);

    const onGoHome = () => {
        navigation.navigate("Home");
    }
    
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.titleContainer}>
                <LottoText fontWeight="bold" fontSize={28} fontColor={MAKER_BLACK} textStyle={{marginBottom: 10}}>
                    당신의 꿈이
                </LottoText>
                <LottoText fontWeight="bold" fontSize={28} fontColor={MAKER_BLACK} textStyle={{marginBottom: 10}}>
                    행운을 가져오길 바래요!
                </LottoText>
            </View>
            <View style={styles.dreamContainer}>
                <ImageBackground style={styles.image} source={require("../images/background_dream_numbers.png")}>
                    <View style={{flex: 1, backgroundColor: 'rgba(17, 1, 64, 0.7)',}} />
                </ImageBackground>
                <View style={styles.dreamNumbersContainer}>
                    <LottoText fontSize={20} fontWeight={"700"} fontColor={MAKER_WHITE}> 꿈자리 로또 번호</LottoText>
                    <View style={styles.ballContainer}>
                        {DreamValue.map((number, index) => {
                            return <Ball 
                                key={index} 
                                number={number}
                                fontColor={MAKER_WHITE}
                                width={45}
                                height={45}
                                fontSize={25}
                                gradient={true}
                                />
                        })}
                    </View>
                </View>
            </View>

            <View style={styles.randomLottoList}>
                <LottoText fontSize={15} fontWeight={"700"} fontColor={MAKER_PUPPLE}> 추천 랜덤 번호 </LottoText>
                {RandomValue.map((list, index)=> {
                    return (
                        <View key={index} style={styles.otherLotto}>
                            {[...list].map((number, index) => {
                                return <Ball key={index} number={number} ballColor={MAKER_WHITE} fontColor={MAKER_PUPPLE}/>
                            })}
                        </View>
                    )
                })}
            </View>
            <View style={{flex:0.5}}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onGoHome}
                >
                    <LottoText fontSize={16} fontWeight={"700"} fontColor={MAKER_WHITE}>번호 다시 추출하기</LottoText>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "white",
        flex: 1,
        paddingTop:44,
        paddingBottom:44,
    },
    titleContainer: {
        padding: 15,
    },
    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    dreamContainer: {
        flex: 1,
    },
    dreamNumbersContainer: {
        flex: 1,
        padding: 14,
    },
    ballContainer: {
        flex:1,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
    },
    randomLottoList:{
        padding:14
    },
    otherLotto: {
        backgroundColor: "#E5E1EE",
        borderRadius: 10,
        padding: 5,
        margin: 5,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        backgroundColor: MAKER_PUPPLE,
        borderColor: MAKER_PUPPLE,
        borderRadius: 10,
        color: MAKER_WHITE,
        margin:14,
    }
})
