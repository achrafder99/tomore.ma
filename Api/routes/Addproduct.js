const express = require("express");
const router = express.Router();
const upload = require("../middleware/images");
const { ProduitModel } = require("../models/Schema");
const {
    getAllProducts,
    addAdmin,
    Connect,
    Categories,
    addCategories,
    NameOfCategoires,
    Details,
    ProduitSimilar
} = require("../controllers/Project");

router.post("/add", upload.single("image"), async(req, res) => {
    // res.json({ body: req.body, image: req.file });
    const { userdata } = JSON.parse(JSON.stringify(req.body))
    console.log(userdata)

    const { filename } = req.file

    const AdddingProduct = new ProduitModel({
        title: JSON.parse(userdata).title,
        price: JSON.parse(userdata).price,
        desc: JSON.parse(userdata).desc,
        categorie: JSON.parse(userdata).categorie,
        imageUrl: filename,
    });
    await AdddingProduct.save();
    const AllProduct = await ProduitModel.find();
    console.log(AllProduct)

    res.status(200).json({ messageSucess: "success", data: AllProduct });

});

router.get("/getAll", getAllProducts);
router.post("/addAdmin", addAdmin);
router.post("/connect", Connect);
router.get("/Categories", Categories);
router.post("/addCtagories", addCategories);
router.post("/NameOfCategoires", NameOfCategoires);
router.get("/market/details/:id", Details);


module.exports = router;