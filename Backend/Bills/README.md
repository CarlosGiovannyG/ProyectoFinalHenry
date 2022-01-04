# ProyectoFinalHenry / Bills

---
# Modelo facturas.
### Developer: Axel Castillo

**Tecnoligias:**
1. Express
2. NodeJS
3. MongoDB
4. Cors
5. Dontenv
6. Mongoose
7. Axios
8. Moment

### Este microservicio será el encargado de crear, almacenar, listar, modificar todo lo relacionado con la facturación del restaurante.Este microservicio será el encargado de crear, almacenar, listar, modificar todo lo relacionado con la facturación del restaurante.

*Se guardarán basadas en un ID que proporciona la base de datos MongoDB, adicionalmente se hará relación de ellas con:*

- El id del cliente el cual será proporcionado por el microservicio de Users.
- Una descripción de la compra (local, domicilio, evento, etc.).
- Un listado de los productos (nombre, id, precio) el cual será proporcionado por el microservicio de Produtcs. 
- Un estado de la factura (abono, pendiente, cancelada).
- Una fecha de creación.
- Un subtotal.
- Un total.

> Todos estos datos los entregara en formato Json para poder ser consumidos por el ApiGateway el cual se encarga de entregar toda la información necesaria al Front para poder ser mostrada al consumidor final.Todos estos datos los entregara en formato Json para poder ser consumidos por el ApiGateway el cual se encarga de entregar toda la información necesaria al Front para poder ser mostrada al consumidor final.

```json
"_id",
"idUser";
"description",
"products":[
  {
    "idProduct",
    "name",
    "price"
    },
     {
    "idProduct",
    "name",
    "price"
    }
    ]
"status",
"date",
"subTotal",
"total",
```

##### Para iniciar el microservicio:Para iniciar el microservicio:

- Clonar el repositorio con git clone [Ir al Repositorio](http://https://github.com/CarlosGiovannyG/ProyectoFinalHenry/tree/main "Enlace del Repositorio")
- Dirigirse a la carpeta Backend/Bills
- Instalar todas las dependencias con npm i.
- Iniciar el servidor con npm run dev ya que está en producción
- Ir al localhost en el puerto 6000 [Ir a localhost](http://localhost:6000 "Ir a localhost")

**Las rutas con que cuenta el microservicio son:**
1. Una ruta para crear una factura.
2. Una ruta para listar las facturas de un cliente.
3. Una ruta para listar las facturas pendientes.
4. Una ruta para listar las facturas canceladas
5. Una ruta para listar todas las facturas
6. Una ruta para modificar una factura
7. Una ruta para cambiar el estado de una factura
8. Una ruta para eliminar una factura (esta ruta no la eliminará de la base de datos solo cambiará su estatus)