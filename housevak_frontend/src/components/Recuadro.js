import React from 'react'
import Casa1 from '../assets/Casa 7.jpg'
import {Button ,Card ,CardActions, CardMedia , CardContent,Divider,Typography} from "@mui/material"

type CardProps = {
    image: string ;
    name: string;
    descripcion: String;
}

export default function Recuadro()
{
    return(
      <Card sx={{maxWidth:345}}>
        <CardMedia 
        component="img"
        alt="Imagen"
        height="200"
        image="https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg"
        title="Imagen" />
        <CardContent>
            <Typography variant='h4' sx={{mb:1.5}}>hola</Typography>
            <Divider/>
            <Typography sx={{mt:1.5}}>Descripcion</Typography>
        </CardContent>
        <CardActions>
            <Button fullWidth variant="contained" size="small">Leer mas</Button>
        </CardActions>
      </Card>  
    );
}
