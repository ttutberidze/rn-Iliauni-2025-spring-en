import { useNavigation, useRoute } from "@react-navigation/native"
import { Pressable, View, Text, StyleSheet, Image } from "react-native"
import { useTheme } from "../context/themeContext"

const MovieItemRenderer = ({movie}) => {
    const navigation = useNavigation()
    const route = useRoute()
    const {theme} = useTheme()

    const onPress = () => {
        navigation.navigate('Movie', {
            movieId: movie.id,
            categoryId: route.params.categoryId
        })
    }

    return (
        <Pressable onPress={onPress}>
            <View style={[styles.wrapper, theme]}>
                <Image source={{uri: movie.poster_image}} style={styles.image} />
                <Text style={[styles.text, styles.title]}>{movie.title}</Text>
                <Text style={[styles.text, styles.releaseYear]}>{movie.release_year}</Text>
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
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    },
    title: {
        fontSize: 18
    },
    releaseYear: {
        fontSize: 12
    },
    image: {
        width: 100,
        height: 150,
    }
})

export default MovieItemRenderer;