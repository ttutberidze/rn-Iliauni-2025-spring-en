import {baseUrl} from '../config'

export const fetchData = async (fileName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`${baseUrl}/${fileName}.json`)
                .then(result => result.json())
                .then(result => resolve(result))
                .catch(error =>reject(error))
        }, 2000)
    })
}