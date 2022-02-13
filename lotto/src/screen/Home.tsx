import React, { useState, useEffect } from "react";
import {SafeAreaView, View, Alert, Text, StyleSheet, TextInput, Button, BackHandler} from "react-native";
import {PASTEL_PUPPLE, PASTEL_YELLOW, PASTEL_PINK, PASTEL_GREEN} from "../common/color";
import { Ball } from "../components/ball";

export const Home = () => {
    const [ dream, setDream ] = useState("");
    const [ flag, setFlag ] = useState(false);
    const [ lotto, setLotto ] = useState([]);
    const [ random, setRandom ] = useState([]);
    const [ dataSum, setDateSum ] = useState(0);
    
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
            setFlag(false);
            setRandom(randomArrays);
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

            setLotto(dreamArray);
            setRandom(randomArrays);
            setFlag(true);
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
                <Text style={styles.mainTitle}>
                    어떤 꿈을 꾸셨나요?
                </Text>
                <TextInput
                    style={styles.dreamInput}
                    onChangeText={setDream}
                    value={dream}
                    placeholder="자세할수록 확률이 올라갑니다."
                />
                <Button 
                    color={PASTEL_PUPPLE}
                    title="추출하기"
                    onPress={onGenerateLotto} 
                />
                {flag ?
                <View>
                    <Text style={styles.lottoTitle}> 꿈자리 로또 번호</Text>
                    <View style={styles.dreamLotto}>
                        {lotto.map((number, index) => {
                            return <Ball key={index} number={number}/>
                        })}
                    </View>
                    <Text style={styles.lottoTitle} >랜덤 번호</Text>
                    <View style={styles.otherLottoList}>
                        {random.map((list, index)=> {
                            return (
                                <View key={index} style={styles.otherLotto}>
                                    {[...list].map((number, index) => {
                                        return <Ball key={index} number={number} />
                                    })}
                                </View>
                            )
                        })}
                    </View>
                </View>    
                :
                <>
                    {random.length ? <Text style={styles.lottoTitle} >랜덤 번호</Text>: <></>}
                    <View style={styles.otherLottoList}>
                        {random.map((list, index)=> {
                            return (
                                <View key={index} style={styles.otherLotto}>
                                    {[...list].map((number, index) => {
                                        return <Ball key={index} number={number} />
                                    })}
                                </View>
                            )
                        })}
                    </View>
                </>
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    mainTitle: {
        fontSize: 25
    },
    titleContainer: {
        flex: 1,
        padding: 20,
    },
    dreamInput: {
        borderColor: "black",
        borderRadius:10,
        borderWidth: 1,
        margin: 10,
    },
    dreamLotto: {
        backgroundColor: PASTEL_YELLOW,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 20,
    },
    otherLottoList: {
        backgroundColor: PASTEL_PINK,
        borderRadius: 20,
    },
    otherLotto: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
    },
    lottoTitle: {
        fontSize:20,
        margin:10,
    }
})
