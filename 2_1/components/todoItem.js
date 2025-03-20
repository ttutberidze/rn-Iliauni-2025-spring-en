import { Text } from "react-native"

const TodoItem = ({title, children}) => {
    return (
        <Text>{ title }</Text>
    )
}

// export const TodoItem2 = () => {
//     return (
//         <Text>Go to shop</Text>
//     )
// }

export default TodoItem