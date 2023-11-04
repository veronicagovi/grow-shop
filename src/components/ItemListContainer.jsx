import React from 'react'
import {  Image, Flex } from '@chakra-ui/react';



const ItemListContainer = ({greeting}) => {
    const titleStyle = {
        fontFamily: ' cursive', // Cambia la fuente según tus preferencias
        fontSize: '50px', // Tamaño del texto
        fontWeight: 'bold', // Peso de la fuente
        color: 'green', // Color del texto
        background: 'black'
      };
  return (
    <div>
         <Flex direction="column" alignItems="center" justifyContent="center">
      <Image src="/imagenes/descarga.jpg" borderRadius="full" boxSize="400px" alt="Descripción de la imagen" />
      <h1 style={titleStyle}>{greeting}</h1>
        </Flex>
        
    </div>
  )
}

export default ItemListContainer