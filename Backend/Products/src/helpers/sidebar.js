const stats = require("./stats")
const comments = require("./comments")
const products = require("./products")

module.exports =async produtEnv => {
    
    const results = await Promise.all([
        stats(),
        comments.newets(),
        products.populate()
    ])

    produtEnv.resumen = {
        stats: results[0],
        newComments: results[1],
        productsPopulated: results[2]
    }
    return produtEnv 
}

