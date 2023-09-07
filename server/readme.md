## create a server folder first and initialize the npm (npm init)

1. create a index.js in the server

2. install all the necc pakages:
   npm i express mongoose cors nodemon

3. in your package.json in scripts write this:
   "start": "node index.js",
   "dev": "nodemon index.js"
4. start the server
   npm run dev
5. get the packages like
   const express = require("express");
   const cors = require("cors"); //
   const mongoose = require("mongoose");
6. const app = express();
   app.use(cors());
   app.use(express.json());
7. create a port
   const PORT = process.env.PORT || 8000;
8. create a server and connect connect with the mongoose database
   mongoose
   .connect("mongodb://127.0.0.1:27017/crudoperation")
   .then(() => {
   console.log("connected to database");
   app.listen(PORT, () => {
   console.log("server is running on ");
   }); //check if server is running
   })
   .catch(err => console.log(err));
9. check if server is running and database is connected

10. create a schema and model
    const schemaData = mongoose.Schema(
    {
    name: String,
    email: String,
    mobile: Number
    },
    {
    timestamp: true //when the person is created all the details will be available
    }
    );
    const userModel = mongoose.model("user", schemaData);

11. create a api to read, create, and update and delete

12. once the api part is done move to the present folder and create a react app named client using
    npx create-react-app client

13. create the fronted part and check whether the data in form is log to the console ot not if yes

14. now install axios packagaeg the fetch the data from the frontend to the backend
