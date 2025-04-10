import {View, Image, Text, StyleSheet, Button} from 'react-native'
import { DATA } from '../data'
import { useEffect } from 'react';

const MovieScreen = ({route, navigation}) => {
    const onLike = () => {
        console.log("LIKED")
    }
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button title='Like' onPress={onLike} />
        })
    }, [])
    let movie = null;
    const categoryData = DATA.find((category) => category.id === route.params.categoryId)
    if(categoryData) {
        movie = categoryData.movies.find((movie) => movie.id === route.params.movieId)
    }
    if(!movie) {
        return null;
    }
    return (
        <View style={styles.wrapper}>
            <Image source={{uri: movie.poster_image}} style={styles.image} />
            <Text style={[styles.text, styles.title]}>{movie.title}</Text>
            <Text style={[styles.text, styles.releaseYear]}>{movie.release_year}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
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

export default MovieScreen