const Product = require("../models/product");


module.exports = {
    async populate (){
        const products = await Product.find() 
        .limit(10)
        .sort({rating: -1})

        return products;
    }
}