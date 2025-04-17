import { View, FlatList } from "react-native"
import { useSelector } from "react-redux"
import MovieItemRenderer from '../components/movieItemRenderer'

const FavoritesScreen = () => {
    const favoriteMovies = useSelector((state) => state.favorites.movies)
    console.log(favoriteMovies)
    return (
        <View>
            <FlatList 
                data={favoriteMovies} 
                renderItem={({item}) => <MovieItemRenderer movie={item} categoryId={item.categoryId} key={item.id} />} 
            />
        </View>
    )
}

export default FavoritesScreen