let Express = require("express");
let App = Express();
let cors = require("cors");

let Mongoose = require("mongoose");


// DB Integration

Mongoose.connect("mongodb+srv://fathimanr7:mah%40fat11@projectmern.polrm8z.mongodb.net/cakemern?retryWrites=true&w=majority")
    .then(() => {
        console.log("DB Connected!");
    })
    .catch((err) => {
        console.error("DB Connection Failed!", err);
    });


// Middleware
App.use(cors());
App.use(Express.json());

// Handlers Section
const AddProduct = require("./Controllers/AddProduct");
const GetAllCategories = require("./Controllers/GetAllCategories");
const CategoryVice = require("./Controllers/CategoryVice");
const SingleProduct = require("./Controllers/SingleProduct");
const Card = require("./Controllers/Card");
const GetCart = require("./Controllers/GetCart");
const DeleteCard = require("./Controllers/DeleteCard");
const ASC = require("./Controllers/ASC");
const OrderDetails=require("./Controllers/OrderDetails")





// Establishing Routing Section
App.post("/AddProduct",AddProduct);
App.get("/GetAllCategories",GetAllCategories)
App.get("/CategoryVice/:category",CategoryVice)
App.get("/SingleProduct/:id",SingleProduct)
App.post("/Addtocart",Card)
App.get("/Cart",GetCart);
App.delete("/deletecard",DeleteCard)
App.post("/AddProduct/Subcategory",ASC)
App.post("/orderdetails",OrderDetails)


// Start Server
App.listen(8000, () => {
    console.log("Server is running at http://localhost:8000");
});
