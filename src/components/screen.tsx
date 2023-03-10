import React, { useState } from 'react';
import { Alert, Button, Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
//import Entypo from 'react-native-vector-icons/dist/Entypo';

const StartGameScreen = (props: any) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandler = (inputText: any) => {
        setEnteredValue(inputText.replace(/[^0-9]/g));

    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 to 99', [{ text: 'Okay', style: 'destructive', onPress: (resetInputHandler) }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };
    let confirmedOutput;

    if (confirmed) {
        confirmedOutput =
            <View>
                <Text style={styles.text}>You selected:{selectedNumber}</Text>
                <View style={styles.container}>
                    <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
                </View>
            </View>;
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View>
                    <View style={styles.screen}>
                        <Text style={styles.scr}>Start a New Game</Text>
                        <View style={styles.imagecontainer}>
                            <Image
                                fadeDuration={800}
                                //source={require('C:/Users/AJAY/project/photos/maxresdefault.jpg')}
                                source={{ uri: 'https://yt3.ggpht.com/a/AATXAJwYKT7JI1bRlMM6pYZHeEk_0JQDPhBpgMiQhA=s900-c-k-c0xffffffff-no-rj-mo' }}
                                style={styles.image} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Entypo name="rocket" size={30} color="#900" />
                            <Text style={styles.scr}>
                                Select a Number
                            </Text>
                            <TextInput style={styles.box}
                                blurOnSubmit
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType="number-pad"
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}
                            />
                            <View style={styles.buttonContainer}>
                                <View style={styles.button}>
                                    <Button title="Reset"
                                        onPress={resetInputHandler}
                                        color="#c717fc"
                                    />
                                </View>
                                <View style={styles.button}>
                                    <Button title="Confirm"
                                        onPress={confirmInputHandler}
                                        color="#f7287b"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    {confirmedOutput}
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    scr: {
        fontSize: 15,
        marginVertical: 5,
        color: 'black',
        fontFamily: 'PressStart2P-Regular',
    },
    inputContainer: {
        width: 300,
        alignItems: 'center',
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,

    },
    buttonContainer: {
        flexDirection: 'row',
        width: 250,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    button: {
        width: 100,
        borderWidth: 2,
        borderColor: '#8B008B',
        marginHorizontal: 10,
        borderRadius: 15,
        backgroundColor: '#8B008B',
        overflow: 'hidden',
    },
    box: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginVertical: 10,
        width: 100,
        textAlign: 'center',
        color: 'black',
    },
    text: {
        paddingLeft: 150,
        alignItems: 'center',
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    container: {
        borderWidth: 5,
        borderColor: '#1E90FF',
        marginVertical: 20,
        marginHorizontal: 70,
        borderRadius: 15,
        backgroundColor: '#4169E1',
        overflow: 'hidden',
    },
    image:
    {
        width: '100%',
        height: '100%',
    },
    imagecontainer: {
        width: 290,
        height: 290,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#000',
        overflow: 'hidden',
        marginVertical: 30,
    },
});

export default StartGameScreen;