console.log("okookoko")   
 
const express = require('express') ;
const app = express() ;
const mongoose = require('mongoose')
app.use(express.json())

mongoose.connect("mongodb+srv://kamlesh:kamlesh123@cluster0.8pxa26e.mongodb.net/codinggita?appName=Cluster0")
.then(()=>{console.log("connected")})
.catch(()=>{console.log("error")})

const userSchema = new mongoose.Schema({
    
        name : {type : String} ,
        roll : {type : String} ,
        corse : {type : String}
})

const User = mongoose.model("user" , userSchema) ;


app.get("/" , async(req , res)=>{
    let arr = await User.find({})
    res.json(arr) ;
})

app.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    const arr = await User.find({});
    res.json(arr);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





app.listen(3001 , ()=>{
    console.log("server is working")
} )










