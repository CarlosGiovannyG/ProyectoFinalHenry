<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Countries

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## Rutas disponibles



Rutas disponible 


Para mostrar las mesas     :     get     http://localhost:5009/mesas.


Para ingresar una mesa     :
    post     http://localhost:5009/mesas.
con el número de dos dígitos entre 10 y 99 y la capacidad de un dígito entre 1 y 9 
ejemplo
{
 "numero" : 11,
 "capacidad": 2
}



Para consultar una mesas por su número por parámetros    : 
get       http://localhost:5009/mesas/id/:numero.
Ó
por body    get    http://localhost:5009/mesas/id
con :
{ 
   "numero": 12 
}
en el body.



Para mostrar todas las fechas reservadas 
  get    http://localhost:5009/mesas/schedule



Para mostrar en una fecha las reservas disponibles ingresando la fecha con el siguiente formato 2022-01-25T16:40 por parámetro 
get    http://localhost:5009/mesas/schedule/:fecha
get    http://localhost:5009/mesas/schedule/:2022-01-25T16:40
   Ó
por body
get    http://localhost:5009/mesas/schedule/fecha
con
 { 
 "fecha": "2022-01-25T16:40"   
}


Para ingresar y guardar una nueva reservación
 post     http://localhost:5009/mesas/schedule 
con la fecha , el número de sillas y el id del cliente por body

{ 
 "fecha": "2022-01-25T10:40" ,
  "numero": 4 ,
  "idclient":"bero"
}


Para mostrar todas las reservaciones realizadas y las mesas relacionadas
get    http://localhost:5009/mesas/usertable




El archivo .env tiene ::::

PORT=5009

DB_USER=postgres
DB_PASSWORD=windows
DB_HOST=localhost
DB_NAME=datamesas

DB_USER_H=fzsbgeapftoygq
DB_PASSWORD_H=382fd87ac13ee47830f3933a9bec01f35f501116fe0783769c3fd6b0b424595a
DB_HOST_H=ec2-34-233-214-228.compute-1.amazonaws.com
DB_NAME_H=d2iaghkfdskics



