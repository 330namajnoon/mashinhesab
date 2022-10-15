const http = require("http");
const path = require("path");
const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const pdp = path.join(__dirname,"./public");
app.use(express.static(pdp));
const server = http.createServer(app);

server.listen(port,()=> {
    console.log(`server is up un ${port}!`);
})