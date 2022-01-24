require("dotenv").config();

module.exports={
  database: process.env.DB_NAME_H , 
  username: process.env.DB_USER_H ,
  password: process.env.DB_PASSWORD_H  ,
  host: process.env.DB_HOST_H ,
  port: 5432,
  logging: false,
  dialect: "postgres",
   dialectOptions: {
      ssl:{ 
        require: true,
        rejectUnauthorized: false,
       }
    },  
}


  