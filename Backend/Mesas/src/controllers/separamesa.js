
const separamesa = (mesasstring, numero ) => {
        //si existe la fecha entrada, se calcula si la 
        //realizacion de la reservación es posible
        let bandera= false;
        console.log( "se calcula si la  realizacion de la reservación es posible :");
        console.log( mesasstring);
        let arraymesas = mesasstring.split(","); // strign a arry
        console.log( arraymesas );
        
        //toma el numero de mesa y forma un arry de mesas con su cupo de sillas
        let mesaslibres= arraymesas.map(m => { return m[5] + m[6]  }) ;
        console.log( "Estas son las mesas libre en string , se deben pasar a numeros" ,mesaslibres);
        //toma el numero de mesa y forma un arry de numeros
        let sillaslibres= arraymesas.map(m => { return m[8]}) ;
        console.log( "sillaslibres" ,sillaslibres);
        //suma todas las sillas disponibles 
        let sumasillas=0;
        for (let i = 0; i < sillaslibres.length; i++) {
          sumasillas= sillaslibres[i]*1 + sumasillas         
        }
        console.log( "suma de sillas =" ,  sumasillas);

        //se busca la mesa libre con sillas suficientes   
         
        let lamesa="";
         for (let i = 0; i < arraymesas.length ; i++) {
            let p= arraymesas[i][8]  ;
            p=p*1;
            console.log("estoy buscando una mesa:  ", p);
            if(p*1>=numero){
              console.log( "encontre esta mesa:  " , arraymesas[i] );
              lamesa = arraymesas[i]
               //la bandera de la mesa
               bandera=true;
              break
            }
         }
         console.log( "encontre esta mesa:  ", lamesa);         
        //si la reservación no es posible por mesas insuficientes, informa
        if(sumasillas===0 || !bandera || lamesa.length<2)return   { tomandomesa:"",   libres: false } ;         
        //si la reservación es posible actualiza la base de datos
        console.log("si la reservación es posible actualiza la base de datos :")

        console.log( arraymesas );        
        
        let tomandomesa= arraymesas.filter(m=>{
          if(m.includes(lamesa)){ console.log(m) }else{ return m  }  
        });

        let tomandosilla = sumasillas - lamesa[8]*1;
        
        
        tomandomesa=tomandomesa.toString()
        console.log( "tomandomesa y la silla  : ", tomandomesa, tomandosilla );
        return {tomandomesa , libres: true, tomandosilla , lamesa}
}

module.exports = separamesa ;