if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require("express");
const config = require("./Server/Config")

require("./Config/database");

const app = config(express());



app.listen(app.get('port'), () => {
  console.log(`🚀 listen on port, http://localhost:${app.get('port')}`)
})