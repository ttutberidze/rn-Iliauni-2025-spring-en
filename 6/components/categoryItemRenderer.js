import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme } from "../context/themeContext";

const CategoryItemRenderer = ({category}) => {
    const navigation = useNavigation()
    const {theme} = useTheme()

    const onPress = () => {
        navigation.navigate('MovieList', {
            categoryId: category.id
        })
    }

    return (
        <Pressable onPress={onPress} android_ripple={{color: 'darkgrey'}}>
            <View style={[styles.wrapper, theme]}>
                <Text style={styles.text}>{category.name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        borderColor: 'darkgrey',
        borderWidth: 1,
        margin: 10,
        paddingVertical: 40,
        paddingHorizontal: 10
    },
    text: {
        fontSize: 24,
        textAlign: 'center'
    }
})

export default CategoryItemRenderer;