# Modelo productos.
### Developer: Rafael Sarria

**Tecnoligias:**
1. Express
2. NodeJS
3. MongoDB
4. Cors
5. Dontenv
6. Mongoose
7. Axios
8. Moment
9. Multer

### Este microservicio será el encargado de crear, almacenar, listar, modificar todos los con que cuenta el restaurante (Menú).Este microservicio será el encargado de crear, almacenar, listar, modificar todos los con que cuenta el restaurante (Menú).

*Se guardarán basados en un ID que proporciona la base de datos MongoDB, adicionalmente se hará relación de ellos con:*
- Un nombre.
- Una descripción alusiva al producto en general esta lo describe.
- Un precio.
- Un rating o likes para poder hacer seguimiento a los productos que más han gustado del menú.
- Una imagen llamativa para hacerlo visible.
- Una categoría haciendo referencia a que tipo de producto es (plato, postre, bebida, etc.).
- Un ID del autor del producto

> Todos estos datos los entregara en formato Json para poder ser consumidos por el ApiGateway el cual se encarga de entregar toda la información necesaria al Front para poder ser mostrada al consumidor final.Todos estos datos los entregara en formato Json para poder ser consumidos por el ApiGateway el cual se encarga de entregar toda la información necesaria al Front para poder ser mostrada al consumidor final.

```json
"id",
"name";
"description",
"price",
"rating",
"image",
"category",
"id_autor",
```

##### Para iniciar el microservicio:
- Clonar el repositorio con git clone [Ir al Repositorio](https://github.com/CarlosGiovannyG/ProyectoFinalHenry/tree/main "Enlace del Repositorio")
- Dirigirse a la carpeta Backend/Produtcs
- Instalar todas las dependencias con npm i.
- Iniciar el servidor con npm run dev ya que está en producción
- Ir al localhost en el puerto 5000 [Ir a localhost](http://localhost:5000 "Ir a localhost")

**Las rutas con que cuenta el microservicio son:**
1. Una ruta para crear un producto.
2. Una ruta para listar todos los productos.
3. Una ruta para listar un producto por id.
4. una ruta que liste las estadísticas de los productos(rating, comentarios, etc.).
5. Una ruta para modificar un producto.
6. Una ruta para eliminar un producto (no se eliminará de la base de datos solo se cambiará su estado).
7. Una ruta para sumar al rating del producto.
8. Una ruta para listar por autor del producto