var blogPost = require("./model")
module.exports = function(router){

router.post("/dateapi",function(req,res){
    console.log(req.query.display)
    res.send(req.query.display)
})

    return router
}
