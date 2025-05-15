import { Button, FlatList, View } from "react-native"
import CategoryItemRenderer from "../components/categoryItemRenderer";
import { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext";
import { fetchData } from "../services/main";

const CategoryListScreen = ({route, navigation}) => {
    const [data, setData] = useState([]);
    const {toggle} = useTheme()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button title="Toggle Theme" onPress={toggle} />
        })
    }, [navigation])

    useEffect(() => {
        fetchData('categories').then(setData)
        // fetch('http://192.168.168.61:8082/categories.json')
        //     .then((result) => result.json())
        //     .then((result) => setData(result))
    }, [])

    return (
        <View>
            <FlatList data={data} renderItem={({item}) => <CategoryItemRenderer category={item} key={item.id} />} />
        </View>
    )
}

export default CategoryListScreen;