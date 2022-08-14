const mongoose = require("mongoose");
const { ProduitModel, Admin, cat } = require("../models/Schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const ObjectId = require('mongodb').ObjectID;


const getAllProducts = async(req, res) => {
    const AllProduct = await ProduitModel.find();
    res.json({ AllProduct });
};

const HashPassword = async(PasswordHashed) => {
    const hash = await bcrypt.hash(PasswordHashed, 10);
    return hash;
};

const addAdmin = async(req, res) => {
    const { fullname, login, password } = req.body;
    const result = await Admin.findOne({ login: login })
        .select("login -_id")
        .lean();
    if (!result) {
        const AddAdmin = new Admin({
            fullname: fullname,
            login,
            password: await HashPassword(password),
        });
        const data = await AddAdmin.save();
        res.status(201).json({ data });
    } else {
        res.status(409).json({ success: false });
    }
};

const CheckPassword = async(password, passHash) => {
    return await bcrypt.compare(password, passHash);
};

const Connect = async(req, res) => {
    const { login, password } = req.body;

    if (login != '' && password != '') {
        console.log(login, password)
        const IsAddmin = await Admin.findOne({ login: login })
        if (IsAddmin && (await CheckPassword(password, IsAddmin.password))) {
            console.log(IsAddmin.id)
            const token = jwt.sign({ user: IsAddmin._id }, process.env.TOKEN_KEY, {
                expiresIn: "2h"
            })
            res.status(201).json({
                token,
                IsAddmin,
                message: "Success"
            })
        }
        //     } else {
        //         console.log("error");
        //     }
    }
};

const Categories = async(req, res) => {
    const AllCategories = await cat.find();
    res.status(200).json(AllCategories);
};

const addCategories = (req, res) => {
    console.log("Add Categories")
}
const NameOfCategoires = async(req, res) => {
    const { _id } = req.body;
    const ProductName = await cat.findById({ _id: _id })
    res.json({ name: ProductName.name })
}

const GetProductsSimilar = async(req, res, categorie) => {
    console.log("Getting Product Similar")
    const GettingProductSimilar = await ProduitModel.find({ categorie })
    return GettingProductSimilar
}

const Details = async(req, res) => {
    const { id } = req.params
    const product = await ProduitModel.findById(id)
    const productSimilar = await GetProductsSimilar(res, res, product.categorie.valueOf())
    console.log(GetProductsSimilar)
    res.status(200).json({ product, productSimilar })
}


module.exports = { getAllProducts, addAdmin, Connect, Categories, addCategories, NameOfCategoires, Details };