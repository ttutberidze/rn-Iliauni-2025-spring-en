import { View, Image, Text, StyleSheet, Alert } from "react-native"
import Button from "../components/Button"
import { useState } from "react"

const diceImages = {
    1: require('../assets/dice/1.png'),
    2: require('../assets/dice/2.png'),
    3: require('../assets/dice/3.png'),
    4: require('../assets/dice/4.png'),
    5: require('../assets/dice/5.png'),
    6: require('../assets/dice/6.png'),
}

const GameScreen = () => {

    const [player1Dice, setPlayer1Dice] = useState(1);
    const [player2Dice, setPlayer2Dice] = useState(1);

    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);

    const rollDice = () => {
        const dice1Value = Math.floor(Math.random() * 6) + 1;
        const dice2Value = Math.floor(Math.random() * 6) + 1;
        setPlayer1Dice(dice1Value)
        setPlayer2Dice(dice2Value)

        if(dice1Value === dice2Value) {
            Alert.alert(
                'Its a draw!', 
                `Both players scored ${dice1Value}`, 
                [{text: 'Understood', style: 'destructive'}]
            )
        } else if(dice1Value > dice2Value) {
            setPlayer1Score(jemali => jemali + 1)
        } else {
            setPlayer2Score(state => state + 1)
        }
    }

    return (
        <View style={{height: '100%'}}>
            <View style={styles.container}>
                <View style={styles.playerWrapper}>
                    <Text style={[styles.text, styles.playerLabel]}>Player 1</Text>
                    <Image 
                        style={styles.image}
                        source={diceImages[player1Dice]} />
                    <Text style={[styles.text, styles.playerLabel]}>{player1Score}</Text>

                </View>
                <View style={styles.playerWrapper}>
                    <Text style={{...styles.text, fontSize: 48}}>VS</Text>
                </View>
                <View style={styles.playerWrapper}>
                    <Text style={[styles.text, styles.playerLabel]}>Player 2</Text>
                    <Image 
                        style={styles.image} 
                        source={diceImages[player2Dice]} />
                    <Text style={[styles.text, styles.playerLabel]}>{player2Score}</Text>
                </View>
            </View>
            <View style={{flex: 1}}>
                <Button onPress={rollDice}>Roll the Dice</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 24,
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playerWrapper: {
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100
    },
    text: {
        fontFamily: 'comic',
    },
    playerLabel: {
        fontSize: 24
    }
})

export default GameScreen;