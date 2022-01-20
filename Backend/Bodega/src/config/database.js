require("dotenv").config();

const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
  } = process.env;

module.exports={
  database: process.env.DB_NAME_H || "d2iaghkfdskics" , 
  username: process.env.DB_USER_H || "fzsbgeapftoygq",
  password: process.env.DB_PASSWORD_H || "382fd87ac13ee47830f3933a9bec01f35f501116fe0783769c3fd6b0b424595a" ,
  host: process.env.DB_HOST_H || "ec2-34-233-214-228.compute-1.amazonaws.com" ,
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


  