import {View, Button} from 'react-native'
import {useForm, FormProvider} from 'react-hook-form'
import TextInput from './textInput'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object({
    firstname: yup.string().required('Firstname is mandatory'),
    lastname: yup.string().required('Lastname is mandatory').min(5, 'Minimum 5 symbols required')
})

const Form = () => {

    const methods = useForm({
        resolver: yupResolver(schema)
    })
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
            />
            <TextInput
                label="Lastname"
                name="lastname"
            />
            <View>
                <Button title='Save' onPress={handleSubmit(onSubmit, onError)} />
            </View>
        </FormProvider>
    )
}

export default Form