//Initialize express
const express= require("express");
const app=express();

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Sample data
let users = [
    {
      id: 0,
      fname: "Jack",
      lname: "Jones",
    },
    {
      id: 0,
      fname: "Jack",
      lname: "Jones",
    },
    {
      id: 1,
      fname: "John",
      lname: "Doe",
    },
  ];
  

//Routes
app.get("/", (req,res)=>{
    //res.send('Hello World, welcome to Backend 101');
    res.sendFile(__dirname + "/index.html");
});

app.get("/user", (req,res)=>{
    res.json(users);
});

app.post("/user", function (req, res) {
    res.send(req.query); // Send query as a response
  });
  
app.put("/user", function (req, res) {
// Add a User to database operations
res.send("Got a PUT request at /user"); // Send plain text as a response
});

app.delete("/user", function (req, res){
// Delete a user from the database operations
res.send("Got a DELETE request at /user"); // Send plain text as a response
});

app.post("/submitForm", (req, res) => {
    res.json(req.body); // Send body as a response
  });


let PORT=process.env.port || 3000; //can run other port if port 3000 is busy.

app.listen(3000, ()=>{
    console.log("Sever successfully started at port 3000!");
});




