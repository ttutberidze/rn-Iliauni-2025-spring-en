import {View, Text, StyleSheet, TextInput as RnTextInput} from 'react-native'
import { Controller, useFormContext } from 'react-hook-form'

const TextInput = ({name, label, rules = {}}) => {
    const {control} = useFormContext()
    return (
        <View>
            <Text>{label}</Text>
            <Controller
                control={control}
                name={name}
                render={({field, fieldState: {error}}) => {
                    return (
                        <>
                            <RnTextInput 
                                style={styles.input}
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                            {error && <Text style={styles.error}>{error.message}</Text>}
                        </>
                    )
                }}
                rules={rules}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'lightgreen',
        borderWidth: 1,
    },
    error: {
        color: 'red'
    }
})

export default TextInput