import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
  } from "mdb-react-ui-kit";
  import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, searchingData } from '../features/cart/cartSlice';

  function Nav() {
    const [searchInput,setSearchInput]=useState("");
    console.log(searchInput);
    const {totalQuantity,cart} = useSelector(state => state.card);

    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getCartTotal())
    }, [cart])
    
    
    useEffect(() => {
      dispatch(searchingData(searchInput))
      }, [searchInput])
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <div 
        style={{width:'300px'}} 
        class="input-group">
 
    <input type="search" id="form1" 
     value={searchInput}
onChange={(e)=> setSearchInput(
  e.target.value
)}
placeholder="Search"
    class="form-control"
   />

</div>

        <span>
          <Link to="/">All Product </Link>
        </span>
        <MDBBtn color="light">
          <Link to="/cart">Cart({totalQuantity})</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Nav