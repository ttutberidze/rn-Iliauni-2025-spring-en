import {TextInput, View, Text, StyleSheet, Button} from 'react-native'
import {Controller, useForm} from 'react-hook-form'

const Form = () => {

    const {control, handleSubmit} = useForm()

    const onSubmit = (values) => {
        console.log("VALID", values)
    }

    const onError = (error) => {
        console.log("ERROR", error)
    }

    return (
        <View>
            <View>
                <Text>Name</Text>
                <Controller
                    control={control}
                    name='firstname'
                    render={({field}) => (
                        <TextInput 
                            style={styles.input}
                            value={field.value}
                            onChangeText={field.onChange}
                        />
                    )}
                    rules={{
                        required: true
                    }}
                />
            </View>
            <View>
                <Text>Lastname</Text>
                <Controller
                    control={control}
                    name='lastname'
                    render={({field}) => (
                        <TextInput 
                            style={styles.input}
                            value={field.value}
                            onChangeText={field.onChange}
                        />
                    )}
                    rules={{
                        required: 'Lastname is mandatory field',
                        minLength: 5
                    }}
                />
            </View>
            <View>
                <Button title='Save' onPress={handleSubmit(onSubmit, onError)} />
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