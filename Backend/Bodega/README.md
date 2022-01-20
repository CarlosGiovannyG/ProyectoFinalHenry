<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Countries

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## Rutas disponibles

Para mostrar los alimentos que hay en la bodega  : 
    get     http://localhost:5008/bodega


Para ingresar un alimento a la bodega     :
    post     http://localhost:5008/bodega
con { name,  ubicacion,  unidad_de_medida,  cantidad }   por body


Para consultar un alimento de la bodega por id por parametros   : 
get       http://localhost:5008/bodega/:id


Para actualizar un alimento de la bodega   : 
put       http://localhost:5008/bodega
const { id,  name,   ubicacion,   unidad_de_medida, cantidad } por body


