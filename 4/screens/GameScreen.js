import { useState } from 'react';
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native'

const dices = {
    1: require('../assets/dice/1.png'),
    2: require('../assets/dice/2.png'),
    3: require('../assets/dice/3.png'),
    4: require('../assets/dice/4.png'),
    5: require('../assets/dice/5.png'),
    6: require('../assets/dice/6.png'),
}

const GameScreen = () => {
    const [player1Dice, setPlayer1Dice] = useState(1)
    const [player2Dice, setPlayer2Dice] = useState(1)

    const [player1Score, setPlayer1Score] = useState(0)
    const [player2Score, setPlayer2Score] = useState(0)

    const rollDice = () => {
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        setPlayer1Dice(dice1)
        setPlayer2Dice(dice2)
        
        if(dice1 === dice2) {
            Alert.alert(
                'Draw!', 
                'Both users rolled ' + dice1, 
                [{text: 'OK', cancelable: true}]
            )
        } else if(dice1 > dice2) {
            setPlayer1Score((prev) => prev + 1)
        } else {
            setPlayer2Score((prev) => prev + 1)
        }
    }
    
    return (
        <View >
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Player 1</Text>
                    <Image 
                        style={styles.image}
                        source={dices[player1Dice]} 
                    />
                    <Text style={styles.text}>{player1Score}</Text>
                </View>
                <Text style={{...styles.text, fontSize: 40}}>VS</Text>
                <View>
                    <Text style={styles.text}>Player 2</Text>
                    <Image 
                        style={styles.image}
                        source={dices[player2Dice]} 
                    />
                    <Text style={styles.text}>{player2Score}</Text>
                </View>
            </View>
            <Button onPress={rollDice} title='Roll the Dice' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        opacity: 1
    },
    image: {
        width: 100,
        height: 100
    },
    text: {
        fontSize: 20,
        fontFamily: 'comic',
        textAlign: 'center'
    }
})

export default GameScreen