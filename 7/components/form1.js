import { useReducer } from 'react'
import {TextInput, View, Text, StyleSheet} from 'react-native'

const reducer = (state, action) => {
    return {
        ...state,
        ...action
    }
}

const Form = () => {

    const [form, dispatch] = useReducer(reducer, {
        name: '',
        lastname: ''
    })

    return (
        <View>
            <View>
                <Text>Name</Text>
                <TextInput 
                    style={styles.input}
                    value={form.name}
                    onChangeText={(value) => dispatch({name: value})}
                />
            </View>
            <View>
                <Text>Lastname</Text>
                <TextInput 
                    style={styles.input}
                    value={form.lastname}
                    onChangeText={(value) => dispatch({lastname: value})}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'lightgreen',
        borderWidth: 1,
    }
})

export default Form