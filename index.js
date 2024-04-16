const express = require("express");
const app = express();




// middleware
app.use(express.urlencoded({extended:false}))

app.use((req,res,next)=>{
console.log("hello from middleware:1")
})
app.get("/", (req, res) => {
    res.send("hello world");
  });

app.listen(8000, () => {
  console.log("server is running ");
});
