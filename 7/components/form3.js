import {View, Button} from 'react-native'
import {useForm, FormProvider} from 'react-hook-form'
import TextInput from './textInput'

const Form = () => {

    const methods = useForm()
    const {handleSubmit} = methods

    const onSubmit = (values) => {
        console.log("VALID", values)
    }

    const onError = (error) => {
        console.log("ERROR", error)
    }

    return (
        <FormProvider {...methods}>
            <TextInput
                label="Name"
                name="firstname"
                rules={{
                    required: true
                }}
            />
            <TextInput
                label="Lastname"
                name="lastname"
                rules={{
                    required: true,
                    minLength: 5
                }}
            />
            <View>
                <Button title='Save' onPress={handleSubmit(onSubmit, onError)} />
            </View>
        </FormProvider>
    )
}

export default Form