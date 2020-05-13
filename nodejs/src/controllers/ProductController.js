const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate(
            { /* here it would be queries */ }, { page, limit: 5 }
        );
        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async store(req, res) {
        const newProduct = await Product.create(req.body);
        return res.json(newProduct);
    },

    async update(req, res) {
        // the third param is make the function return the updated object, if not
        // set, it will return the "before update" object
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send(`${req.params.id} successfully deleted...`);
    }
};
