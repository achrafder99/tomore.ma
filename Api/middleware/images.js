const multer = require("multer");
const path = require("path");

const checkFileExtension = (originalname) => {
    const EXT = [".png", ".jpg", ".jpeg", ".webp"];
    if (EXT.includes(path.extname(originalname))) return true;
    return false;
};

const storage = multer.diskStorage({
    destination: function(request, file, callback) {
        callback(null, "./public/uploads/");
    },
    filename: function(request, file, callback) {
        if (checkFileExtension(file.originalname)) {
            callback(null, `${Date.now()}_${file.originalname}`);
            console.log(file);
        } else {
            console.log("Pas Checked");
        }
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fields: 5,
        fieldNameSize: 50, // TODO: Check if this size is enough
        fieldSize: 1024 * 1024 * 1, //TODO: Check if this size is enough
        // TODO: Change this line after compression
        fileSize: 15000000, // 150 KB for a 1080x1080 JPG 90
    },
});

module.exports = upload;