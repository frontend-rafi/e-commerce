import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
  } from "mdb-react-ui-kit";
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
const ProductCart = () => {
const {searchInput,radioData}= useSelector(state=> state.card);
  const allProducts = useSelector(state=> state.card.products )
 
  // const {title}=allProducts.map((prod)=> prod.title)
  
    console.log(allProducts);
    const dispatch = useDispatch();
    const filteredProducts = allProducts.filter((item) => {
      if (searchInput.length === 0) {
        return item;
      } else {
        return item.title.toLowerCase().includes(searchInput.toLowerCase())
      }
    })

   
  return (
    <div>
      <div className="m-2 " >
      <MDBContainer >
        <MDBRow className="mb-3">
        {
        filteredProducts.filter((item) => {
          if (radioData === item.title) {
            return item
          } else {
            return item
          }
        }).map((product)=>(
            <MDBCol  key={product.id} size="md">
            <MDBCard   style={{ width:"250px"}}>
              <MDBCardImage src={product.img}
         
              alt="..." />
              <MDBCardBody>
                <MDBCardTitle>{product.title}</MDBCardTitle>
                <MDBCardText>{product.price}</MDBCardText>
                <MDBBtn onClick={()=> dispatch(addToCart(product))} >
                  Add to Cart
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
            
          </MDBCol>
          ))
        }
           
       
        </MDBRow>
        
      </MDBContainer>
    </div>
    </div>
  )
}

export default ProductCart
