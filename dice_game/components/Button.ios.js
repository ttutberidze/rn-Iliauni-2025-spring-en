import { Pressable, View, Text, StyleSheet } from "react-native"

const Button = ({onPress, children, ...rest}) => {
    return (
        <View {...rest} style={styles.wrapper}>
            <Pressable 
                android_ripple={{color: 'lime'}} 
                onPress={onPress} style={styles.pressable}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    pressable: {
        // borderWidth: Platform.select({android: 5, ios: 0}),
        borderWidth: 0,
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    text: {
        fontFamily: 'comic',
        fontSize: 24
    }
})

export default Button;