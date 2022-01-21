<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Countries

<p align="left">
  <img height="200" src="./countries.png" />
</p>

# ProyectoFinalHenry / Users

---
# Modelo bodega.
### Developer: Rafael Sanabri

**Tecnoligias:**
1. Express
2. NodeJS
3. PostgreSQL
4. Cors
5. Dontenv
6. Sequelize
7. Sequeli-cli
7. Axios
8. Multer
9. Moment

### Este microservicio sera encargado de almacenar toda la data de la bodega del restaurante, inventarios etc.

*Se guardarán basados en un ID que proporciona la base de datos*

> Inventario de mesas.

* Capacidad de personas
* Estado "open / close"
* Hora de llegada
* Hora de entrega


> Todos estos datos los entregara en formato Json para poder ser consumidos por el ApiGateway el cual se encarga de entregar toda la información necesaria al Front para poder ser mostrada al consumidor final.

```json
"id",
"estado";
"hora-llegada";
"hora-entrega",
```

##### Para iniciar el microservicio:Para iniciar el microservicio:

- Clonar el repositorio con git clone [Ir al Repositorio](http://https://github.com/CarlosGiovannyG/ProyectoFinalHenry/tree/main "Enlace del Repositorio")
- Dirigirse a la carpeta Backend/Cellar
- Instalar todas las dependencias con npm i.
- Iniciar el servidor con npm run dev ya que está en producción
- Ir al localhost en el puerto 5003 [Ir a localhost](http://localhost:5003 "Ir a localhost")

**Las rutas con que cuenta el microservicio son:**
1. Una ruta para crear mesa.
2. Una ruta para ver todas las mesas.
3. Una ruta para ver las mesas open.
4. una ruta para ver las mesas close.
5. una ruta para reservar una mesa.
6. una ruta para reabrir una mesa.
7. una ruta para modificar una mesa.





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
  "estamesa": 4 ,
  "idclient":"bero"
}


Para mostrar todas las reservaciones realizadas y las mesas relacionadas
get    http://localhost:5009/mesas/usertable




El archivo .env tiene ::::



