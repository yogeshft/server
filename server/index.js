const express = require("express");
const cors = require("cors"); //
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
//port number
const PORT = process.env.PORT || 8000; //means if the port is been already used then use 8000 otherwise use the default port

//create a schema and model
const schemaData = mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: String
  },
  {
    timestamp: true //when the person is created all the details will be available
  }
);

//create a model
const userModel = mongoose.model("user", schemaData);

//create a api

//read
//http://localhost:8000/
app.get("/", async (req, res) => {
  const data = await userModel.find({});
  // res.json({ scuess: true, data: data });
  res.json({ success: true, data: data });
});
//now we will all the api to create,update and delete the record

//create data or save data in mongodb
//http://localhost:8000/create 
/*
{
  name,
  email,
  mobile
}
*/
app.post("/create", async (req, res) => {
  console.log(req.body);
  const data = new userModel(req.body);
  await data.save();
  res.send({ success: true, message: "data saved sucessfully", data: data });
});

//update the data
// http://localhost:8000/update
/*
{
  id: " ",
  name: " "
  ....
}
*/
app.put("/update", async (req, res) => {
  // const id = req.body;
  console.log(req.body);
  const { _id, ...rest } = req.body;
  console.log(rest);
  const data = await userModel.updateOne({ _id: _id }, rest);
  res.send({ success: true, message: " data updated sucessfully", data: data });
});

//delete  api
//http://localhost:8000/delete/id
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await userModel.deleteOne({ _id: id });
  res.send({ success: true, message: " data deleted sucessfully", data: data });
});

//create a server and connect  and connect with the mongoose database
mongoose
  .connect("mongodb://127.0.0.1:27017/crudoperation")
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log("server is running on ");
    }); //check if server is running
  })
  .catch(err => console.log(err));
