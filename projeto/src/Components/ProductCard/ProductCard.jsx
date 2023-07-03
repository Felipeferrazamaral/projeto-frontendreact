import React from 'react'
import { Button, Card, CardContainer, ContainerSuperior, Img, P, Select, ContainerInferior } from './ProductCardStyle'
import {productsList} from '../../assets/productsList'

//TESTE

function ProductCard({
  productsOrdered,
  addToCart,}) {

  let quantity = 1;

    return (

  <CardContainer className='CardContainer'>
    
    <ContainerSuperior className='ContainerSuperior'>
                   
    </ContainerSuperior>
    {productsOrdered.map((product) => ( 
    <ContainerInferior className='ContainerInferior' key={product.id}>
      <Img src={product.imageUrl} alt={product.name}/>
      <h1>{product.name}</h1>
      <P className='P'>Valor: {product.value}</P>
      <Button className='Button' onClick={() => addToCart(product.name, product.value, quantity)}>
        Adicionar ao Carrinho
      </Button>
    </ContainerInferior>
    ))}
  </CardContainer>
  
  )
}


export default ProductCard