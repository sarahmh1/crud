exports.hello = (req, res, next) => {
    res.render("hello", { title:"Hello Page"})
}