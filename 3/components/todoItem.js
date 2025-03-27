import { Pressable, Text, View, StyleSheet } from "react-native"
import { memo } from "react"

const TodoItem = ({title, removeItem, id}) => {
    console.log(title)
    return (
        <Pressable 
            onPress={() => removeItem(id)} 
            style={styles.pressable} 
            android_ripple={{color: 'lightgrey'}}
        >
            <View style={styles.wrapper}>
                <Text>{ title }</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        flexDirection: 'row'
    },
    wrapper: {
        // backgroundColor: 'red', 
        width: '100%', 
        flex: 1,
        marginVertical: 3,
        padding: 10,
        borderWidth: 1
    }
})

export default memo(TodoItem)