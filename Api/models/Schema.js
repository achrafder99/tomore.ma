const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Produit = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    oldPrice: {
        type: Number,
        default: ""
    },
    desc: {
        type: String,
        required: true,
    },
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Client = new Schema({
    name: String,
    Phone: String,
    adresse: String,
});

const Commande = new Schema({
    produitID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produit",
    },
    Client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "client",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Admin_ = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const cat = mongoose.model("categories", Category);
const ProduitModel = mongoose.model("products", Produit);
const client = mongoose.model("clients", Client);
const commande = mongoose.model("Commandes", Commande);
const Admin = mongoose.model("Admins", Admin_);

module.exports = {
    cat,
    ProduitModel,
    client,
    commande,
    Admin,
};