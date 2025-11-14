const express = require('express')
const app = express()
const router = express.Router();   
const Menu=require('../models/Menu') 


 
  
router.post('/', async (req, res) => {
    try {
        const menuData = req.body;

        const newMenuItem = new Menu(menuData);  // ✔ Correct Model

        const response = await newMenuItem.save();

        console.log("Menu Item saved");

        res.status(200).json(response);



    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});




 

router.get('/', async (req, res) => {
    try {
        const menu = await Menu.find();  // ✔ Correct Model

        console.log("Menu fetched");

        res.status(200).json(menu);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


//parameterized url need to on menu done on person sir based on taste


module.exports = router;
