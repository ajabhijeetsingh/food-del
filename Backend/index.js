import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
// import userRouter from "./routes/userRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"




// app config
const app = express()
const port = 4000


//middleware
app.use(express.json())
app.use(cors(
    {
        origin: ["https://food-del-admin-khaki.vercel.app","https://food-del-front-mu.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
))

//db connection

connectDB();

// api endpoints 

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)



app.get("/", (req, res) => {
    res.send("API is Working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://aj_abhijeetsingh:pulsar150@cluster0.1d8wqln.mongodb.net/?