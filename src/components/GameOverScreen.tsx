import React from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const GameOverScreen = (props: any) => {
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Text style={styles.titletext}>Game Over</Text>
                <View style={styles.imagecontainer}>
                    <Image
                        fadeDuration={800}
                        //source={require('C:/Users/AJAY/project/photos/maxresdefault.jpg')}
                        source={{ uri: 'https://th.bing.com/th/id/OIP.Q7JxtHEXnLE4-G0ejzaKAAHaHa?pid=ImgDet&w=626&h=626&rs=1' }}
                        style={styles.image} />
                </View>
                <Text style={styles.colourtext}>Your phone needed<Text style={styles.insidetext}> {props.roundsNumber} </Text>
                    rounds to guess the number<Text style={styles.insidetext}> {props.userNumber}</Text> </Text>
                <View style={styles.newbutton}>
                    <Button title="START NEW GAME" onPress={props.onRestart} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    titletext: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginVertical: 20,
    },
    colourtext: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginHorizontal: 30,
    },
    imagecontainer: {
        width: 300,
        height: 300,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#000',
        overflow: 'hidden',
        marginVertical: 30,
    },
    image:
    {
        width: '100%',
        height: '100%',
    },
    insidetext: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF0000',
    },
    newbutton:
    {
        borderWidth: 5,
        borderColor: '#1E90FF',
        marginVertical: 20,
        marginHorizontal: 30,
        borderRadius: 20,
        backgroundColor: '#4169E1',
        overflow: 'hidden',
    },

});

export default GameOverScreen;
