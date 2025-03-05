# Setting Up an Express.js Project 🚀

This guide helps you set up a basic Express.js project.

## 📌 Steps to Set Up

### 1️⃣ Initialize a Node.js Project

Run the following command to create a `package.json` file:

````bash
npm init


### 2️⃣ Install Dependencies

```bash
npm install express

### 3️⃣ Install Nodemon (for auto-restarting server)

```bash
npm install --save-dev nodemon

### 4️⃣ Create the Entry File
Create an index.js file:

### 5️⃣ Write Basic Express.js Code
Open index.js and add the following:

```bash
const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

### 6️⃣ Update package.json with Scripts

```bash
{
  "scripts": {
    "start": "nodemon index.js"
  }
}

### 7️⃣ Run the Application

```bash
npm start

### 8️⃣ Check the Running Server
Once the server is running, open your browser and go to:

```bash
http://localhost:<port>
Replace <port> with the port number specified in your code.

You should see the message:

```bash
Hello World!

🎉 Congratulations!
Your Express.js project is now set up and running! 🚀

````
