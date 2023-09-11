const fs = require('fs')
const products = [
    {
        name: 'Iphone',
        price: 500,
        stcok: 25
    },
    {
        name: 'Ipad',
        price: 200,
        stcok: 35
    },
    {
        name: 'TV',
        price: 1500,
        stcok: 15
    },
    {
        name: 'Galaxy',
        price: 400,
        stcok: 4
    }
]

fs.promises.readFile('products.json','utf-8')
.then(info=>console.log(JSON.parse(info)))
.catch(error=>console.log(error))