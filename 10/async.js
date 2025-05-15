console.log('1')



const printName = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(user.name)
            } catch(error) {
                reject(error.message)
            }
        }, 1000)
    })
}

// printName({name: "James Bond"})
//     .then((result) => {
//         console.log(result)
//         printName({name: "Agent 007"})
//             .then((result) => {
//                 console.log(result)
//             })
//             .catch((errorMessage) => {
//                 console.log(errorMessage)
//             })
//             .finally(() => {
//                 console.log('Finally')
//             })
//     })
//     .catch((errorMessage) => {
//         console.log(errorMessage)
//     })
//     .finally(() => {
//         console.log('Finally')
//     })


const main = async () => {
    const user1 = await printName({name: "James Bond"})
    console.log(user1)
    const user2 = await printName({name: "Agent 007"})
    console.log(user2)
}

main().then(() => console.log("Main was successfull"))

console.log('2')