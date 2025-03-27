import {StyleSheet, TextInput, Button} from 'react-native'
import {useState, useRef, useEffect} from 'react'

const Add = ({addTodo}) => {
    const [textInput, setTextInput] = useState('')
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    
    const add = () => {
        addTodo(textInput);
        setTextInput('')
    }
    return (
        <>
            <TextInput 
                ref={inputRef}
                style={styles.input} 
                onChangeText={(value) => setTextInput(value)} 
                value={textInput}
            />
            <Button title='Add Todo' onPress={add} />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: 'lime',
      width: '100%'
    }
});
export default Add;