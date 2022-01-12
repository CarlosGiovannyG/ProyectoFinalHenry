const stats = require("./stats")
const comments = require("./comments")
const productsPopulate = require("./productsPopulate")
const productsViewed = require("./productsViews")

module.exports =async produtEnv => {
    
    const results = await Promise.all([
        stats(),
        comments.newets(),
        productsPopulate.populate(),
        productsViewed.seen()
    ])

    produtEnv.resumen = {
        stats: results[0],
        newComments: results[1],
        productsPopulated: results[2],
        productsViewed: results[3]
    }
    return produtEnv 
}

