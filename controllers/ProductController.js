exports.getProducts = async(req,res)=>{
    res.send("Products Page")
}
exports.getDetails = async(req,res)=>{
    res.send("Detail Page")
}
exports.addProduct = async(req,res)=>{
    res.redirect("/checkout")
}
exports.deleteProduct = async(req,res)=>{
    res.redirect("/checkout")
}
exports.getCheckoutList = async(req,res)=>{
    res.send("Checkout Page")
}

