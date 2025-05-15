import { FlatList, View, ActivityIndicator } from "react-native"
import MovieItemRenderer from '../components/movieItemRenderer'
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchData } from "../services/main"

const MovieListScreen = ({route, navigation}) => {

    const {data: categoryData, isLoading} = useQuery({
        queryKey: ['movies', route.params.categoryId],
        queryFn: () => fetchData(route.params.categoryId),
        initialData: {}
    })

    useEffect(() => {
        navigation.setOptions({
            title: categoryData.name
        })
    }, [navigation, categoryData])

    if(isLoading) {
        return <ActivityIndicator />
    }

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