import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"


const foodRouter = express.Router();

// Image Storage Engine

// const storage = multer.diskStorage({
//     // destination: "uploads",
//     destination: function (req, file, cb) {
//         cb(null, './uploads'); // Assuming 'uploads' directory exists and is writable
//     },
//     filename:(req,file,cb) =>{
//         return cb(null,`${Date.now()}${file.originalname}`)
//     }
// })

// const upload = multer({storage: storage})

// foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)






export default foodRouter;
