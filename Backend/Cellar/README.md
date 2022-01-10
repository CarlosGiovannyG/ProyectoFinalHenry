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