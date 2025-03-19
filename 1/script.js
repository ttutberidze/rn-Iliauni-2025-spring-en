// const age = 50
// age = 60; // Error

// let name = "James Bond"
// name = "Agent 007"
// console.log(name)
// console.log(name)
// let name = 10;
// console.log(username)
// var username = "007"
// username = "008"

String
Number
Boolean
Symbol
BigInt
null
undefined

Object

// const age = 50;

// const user = {
//     name: 'James Bond',
//     age: 50
// }

// const user2 = user
// user2.name = '007'

// const user = {
//     name: 'James Bond',
//     age: 50,
//     address: {
//         city: "Tbilisi"
//     }
// }

// const user2 = {
//     ...user,
//     address: {
//         ...user.address,
//     }
// }

// user2.address.city = 'LA'

// console.log(user.address.city)

// const arr = ['james', 40, user, [user]]
// const arr2 = arr;

// const name = arr[0]
// const age = arr[1]
// const someUser = arr[2]
// const newArr = arr[3]

// const [, , , [newUser]] = arr;

// newUser.name = "007"

// const {address: {city}} = newUser;
// console.log(arr, city)


// function sum(a, b) {
//     return a + b
// }

// const sum2 = function(a, b) {
//     return a + b
// }

// const sum3 = (a, b) => {
//     if(a === b) {
//         return a + b
//     }
// }

// function func(bool) {
//     if(bool) {
//         const age = 10
//         console.log(age)
//     }
// }

// const printCity = ({address: {city}}) => {
//     console.log(city)
// }

// printCity({
//     name: "James bond",
//     address: {
//         city: "Tbilisi"
//     }
// })

const user = {
    name: 'James Bond',
    age: 50,
    address: {
        city: "Tbilisi",
        address2: {
            address3: {
                addresses: [
                    {
                        
                    }
                ]
            }
        }
    },
    skills: ['JS']
}
const user2 = {
    ...user,
    address: {
        ...user.address
    }
}

const arr = [1, 2, 3, {name: 'James'}]

for (item of arr) {
    console.log(item)
}

for (field in user) {
    console.log(field, user[field])
}

const deepCopy = (obj) => {
    return {
        ...obj
    }
}