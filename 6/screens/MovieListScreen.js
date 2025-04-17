import { FlatList, View } from "react-native"
import MovieItemRenderer from '../components/movieItemRenderer'
import { DATA } from "../data"
import { useEffect } from "react"

const MovieListScreen = ({route, navigation}) => {
    const categoryData = DATA.find((category) => category.id === route.params.categoryId)
    useEffect(() => {
        navigation.setOptions({
            title: categoryData.name
        })
    }, [navigation, categoryData])

    return (
        <View>
            <FlatList 
                data={categoryData.movies} 
                renderItem={({item}) => <MovieItemRenderer movie={item} categoryId={route.params.categoryId} key={item.id} />} 
            />
        </View>
    )
}

export default MovieListScreen;