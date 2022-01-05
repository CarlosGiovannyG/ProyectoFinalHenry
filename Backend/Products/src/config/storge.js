const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req,file, cb){
    cb(null, "./public/uploads")
  },
  
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname).toLocaleLowerCase());
  }
});

const ImagenesCreate = multer({ storage })

module.exports = ImagenesCreate;