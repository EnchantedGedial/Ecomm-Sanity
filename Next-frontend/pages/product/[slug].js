import React from 'react'
import {client,urlFor} from '../../../backend/Lib/client'

const productDetails = ({products,relatedProducts}) => {
  return (
    <>
    
    <h3>{relatedProducts?.name}</h3>

    <p>{products?.details}</p>
    {/* <img src={urlFor(products?.image)} alt="" /> */}
    
    </>
  )
}


export const getServerSideProps = async({params:{slug}})=>{

  const query=`*[_type == "product" && slug.current == ${slug}][0] `;
  const products = await client.fetch(query) ;
  
  const relatedProduct ='*[_type == "product"]';
  const relatedProducts = await client.fetch(relatedProduct) ;
  {console.log(relatedProducts)}
  return {
    props:{products,relatedProducts}
  }

}
export default productDetails
