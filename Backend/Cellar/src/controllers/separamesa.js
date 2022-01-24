
const separamesa = (mesastotal, estamesa, c , fechareservaIn) => {
         
        let  lasmesas = mesastotal ;
        let bandera = false, bandera2 = false ;
   
  if(c.length>0){
    
    for (let i = 0; i < c.length; i++) {
     
      if(c[i].dataValues.fechaIn===fechareservaIn){
         
        lasmesas = c[i].dataValues.mesasLibres ;
        bandera2 = true ;
      }
      
    }
 
  }
       
        let arraymesas = lasmesas.split(",");    
       
        let mesaslibres= arraymesas.map(m => { return m[5] + m[6]  }) ;
              
        let lamesa="";
         for (let i = 0; i < arraymesas.length ; i++) {
            let p= arraymesas[i][5] + arraymesas[i][6]    ;
            p=p*1;
            
            if(p*1 === estamesa*1){
              
              lamesa = arraymesas[i];
               
               bandera=true;
              break
            }
         }                
         
        let tomandomesa= arraymesas.filter(m=>{
          if(m.includes(lamesa)){ lamesa = lamesa }else{ return m  }  
        });

        tomandomesa.sort() ;
        
        tomandomesa=tomandomesa.toString()
        
        return {tomandomesa ,  lamesa, bandera, bandera2 }
}

module.exports = separamesa ;