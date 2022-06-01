import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Alert, StyleSheet, ImageBackground, TextInput, BackHandler, TouchableOpacity } from "react-native";
import { MAKER_BLACK, MAKER_PUPPLE, MAKER_WHITE, MAKER_GREY } from "../common/color";
import { LottoText } from "../components/lottoText";
import { useSetRecoilState } from "recoil";
import { DreamState, RandomState } from "../states";


export const Home = ({navigation}) => {
    const [ dream, setDream ] = useState("");
    const [ dataSum, setDateSum ] = useState(0);
    const [ date, getData ] = useState(new Date());
    const setDreamState = useSetRecoilState(DreamState);
    const setRandomState = useSetRecoilState(RandomState);
    
    const sortArray = (array) => {
        return array.sort((a, b) => a - b);
    }

    const randomGenerateLotto = (length) => {
        let randomArray = [];
        for(let i = 0; i < length; i++) {
            let tempArray = [];
            for (let j = 0; j < 6; j++) {
                tempArray.push(parseInt(String(Math.random() * 45 + 1)));
            }
            randomArray.push(setNumberGenerator(tempArray, dataSum));
        }
        return randomArray;
    }

    const setNumberGenerator = (array, sum) => {
        const set = new Set([0]);
        const tempArray = array.slice();
        let count = 0;

        while(count < 6) {
            if (set.has((tempArray[count]) % 46 )) {
                tempArray[count] += sum;
            } else {
                set.add((tempArray[count]) % 46);
                tempArray[count] = (tempArray[count]) % 46;
                count++;
            }
        }

        return sortArray(tempArray);
    }

    const onGenerateLotto = () => {
        const joinText = dream.split(" ").join("");
        let randomArrays = [];
        if(joinText.length <= 0) {
            randomArrays = randomGenerateLotto(5);
            setRandomState(randomArrays);
        } else {
            randomArrays = randomGenerateLotto(4);    
            let total:number = 0;
            let dreamArray = [];
            for (let i = 0; i < dream.length; i++) {
                total+= dream.charCodeAt(i);
            }

            for(let i = 2; i <= 7; i++) {
                dreamArray.push(parseInt(String((total / i) * dataSum)));
            }
            dreamArray = setNumberGenerator(dreamArray, dataSum);

            setDreamState(dreamArray);
            setRandomState(randomArrays);
            // navigation.push("Loader");
            navigation.push("ScreenAdd");
        }
    }

    const backAction = () => {
        Alert.alert("Hold on!", "앱을 종료하시겠습니까?", [
            {
            text: "취소",
            onPress: () => null,
            style: "cancel"
            },
            { text: "확인", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    }
    
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction)
        return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [])

    useEffect(() => {
        const date = new Date();
        let sum = 0;
        sum += date.getFullYear();
        sum += date.getMonth() + 1;
        sum += date.getDate();
        setDateSum(sum);
    }, [])
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.titleContainer}>
                <LottoText fontWeight="bold" fontSize={28} fontColor={MAKER_BLACK} textStyle={{marginBottom: 10}}>
                    어떤 꿈을 꾸셨나요?
                </LottoText>
                <LottoText fontWeight="normal" fontSize={16} fontColor={MAKER_BLACK}>
                    오늘의 꿈을 기록해보세요.
                </LottoText>
                <LottoText fontWeight="normal" fontSize={16} fontColor={MAKER_BLACK}>
                    때로는 꿈이 행운을 가져다 준답니다.🔮
                </LottoText>
                <ImageBackground style={{flex:1, marginTop:35,marginBottom:35, padding: 25}} source={require("../images/background_note.png")}>
                    <LottoText fontSize={25} fontWeight={"100"} fontColor={MAKER_BLACK}>{`${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`}</LottoText>
                    <TextInput
                        style={styles.dreamInput}
                        numberOfLines={100}
                        multiline={true}
                        onChangeText={setDream}
                        value={dream}
                        textAlignVertical={"top"}
                        autoCorrect={false}
                        spellCheck={false}
                        selectionColor={MAKER_PUPPLE}
                        placeholder="자세할수록 행운 확률은 올라갑니다 :)"
                        placeHolderColor={MAKER_GREY}
                    />
                </ImageBackground>
                {dream.length 
                ?   <TouchableOpacity
                        style={styles.trueButton}
                        onPress={onGenerateLotto} 
                    >
                        <LottoText fontSize={16} fontWeight={"700"} fontColor={MAKER_WHITE}>로또 번호 생성하기</LottoText>
                    </TouchableOpacity>
                :   <TouchableOpacity
                        style={styles.falseButton} 
                    >
                    <LottoText fontSize={16} fontWeight={"700"} fontColor={MAKER_PUPPLE}>로또 번호 생성하기</LottoText>
                    </TouchableOpacity>
                }
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
    mainTitle: {
        fontSize: 25
    },
    titleContainer: {
        flex: 1,
        padding: 20,
    },
    dreamInput: {
        margin: 10,
        overflow: "scroll",
        textDecorationLine: 'underline',
        fontSize: 15,
    },
    lottoTitle: {
        fontSize:20,
        margin:10,
    },
    trueButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        backgroundColor: MAKER_PUPPLE,
        borderColor: MAKER_PUPPLE,
        borderRadius: 10,
        color: MAKER_WHITE,
    },
    falseButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        borderWidth: 1,
        borderColor: MAKER_PUPPLE,
        borderRadius: 10,
        color: MAKER_WHITE,
    }
})
