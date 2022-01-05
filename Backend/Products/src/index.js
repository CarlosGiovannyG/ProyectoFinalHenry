const {app} = require("./server");


require("./database");
//require("./database");
app.listen(5000,()=>{
    console.log("iniciando servicios ");
} )

