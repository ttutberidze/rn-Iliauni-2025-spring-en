import { Button, FlatList, View } from "react-native"
import { DATA } from "../data";
import CategoryItemRenderer from "../components/categoryItemRenderer";
import { useEffect } from "react";
import { useTheme } from "../context/themeContext";

const CategoryListScreen = ({route, navigation}) => {
    const {toggle} = useTheme()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button title="Toggle Theme" onPress={toggle} />
        })
    }, [navigation])
    return (
        <View>
            <FlatList data={DATA} renderItem={({item}) => <CategoryItemRenderer category={item} key={item.id} />} />
        </View>
    )
}

export default CategoryListScreen;