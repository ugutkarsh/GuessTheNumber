import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';

function generateRandomBetween({ min, max, exclude }: { min: number; max: number; exclude: any; }): any {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return (generateRandomBetween({ min, max, exclude }));
  } else {
    return (rndNum);
  }
}

const renderListItem = (listLength: any, itemData: any) => (
  <View style={styles.listItem}>
    <Text style={{ color: 'purple', textAlign: 'center' }}>
      #{listLength - itemData.index}
    </Text>
    <Text style={{ color: 'purple', textAlign: 'center' }}>
      {itemData.item}
    </Text>
  </View>);
const GameScreen = (props: any) => {

  const intialGuess = generateRandomBetween({ min: 1, max: 100, exclude: props.userChoice });
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  const [pastGuesses, setPastGuesses] = useState([intialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver, pastGuesses.length]);
  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert('Dont Lie!', 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      { min: currentLow.current, max: currentHigh.current, exclude: currentGuess },
    );
    setCurrentGuess(nextNumber);
    //setRounds(curRounds => curRounds + 1);
    setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses]);
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <Text style={{ color: 'purple', textAlign: 'center', fontSize: 25 }}>
          Opponent's Guess
        </Text>
        <Text style={{ color: 'purple', textAlign: 'center', fontSize: 25 }}>{currentGuess}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttontext}><Button
          title="LOWER"
          onPress={nextGuessHandler.bind(this, 'lower')}
        /></View>
        <View style={styles.buttontext}><Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, 'greater')}
        /></View>
      </View>
      <FlatList keyExtractor={(item) => item}
        data={pastGuesses}
        renderItem={renderListItem.bind(this, pastGuesses.length)}
        contentContainerStyle={styles.list} />
    </View>
  );
};

const styles = StyleSheet.create({

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingLeft: 20,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#4f0247',
    textAlign: 'center',
  },
  listItem: {
    backgroundColor: 'white',
    width: 350,
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 10,
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
    marginVertical: 10,
    justifyContent: 'flex-end',
  },
  buttontext: {
    borderWidth: 5,
    borderColor: '#1E90FF',
    marginVertical: 20,
    marginHorizontal: 70,
    borderRadius: 20,
    backgroundColor: '#4169E1',
    overflow: 'hidden',
  },
});

export default GameScreen;
