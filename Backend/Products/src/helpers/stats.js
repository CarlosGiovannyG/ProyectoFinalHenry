const Product = require("../models/product");
const Comment = require("../models/comment");

const productsCount = async ()=>{
    return  await Product.countDocuments()    
}

const commentCount = async ()=>{
    return  await Comment.countDocuments()    
}

const viewsCount = async ()=>{
    const arrcont =  await Product.aggregate([{
        $group: {
            _id: "1",
            viewstotal: { $sum: "$views" }
        }
    }])   
    return arrcont[0].viewstotal
}


const ratingCount = async ()=>{
    const arrcont =  await Product.aggregate([{
        $group: {
            _id: "1",
        ratingtotal: { $sum: "$rating" }
        }
    }])   
    return arrcont[0].ratingtotal
}

module.exports = async () => {
  
    const result = await Promise.all([
        productsCount(),
        commentCount(),
        viewsCount(),
        ratingCount(),
    ])
 
    return {
        produts: result[0], 
        comments: result[1], 
        views: result[2],
        rating: result[3]
    }
}