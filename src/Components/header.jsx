import React from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProfilHeader from './profileHeader'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {changeShowCart} from '../store/actions'

function Header(props) {
  
  return (
    <header>
      <Link to={'/'}>
        <h2>Our Website</h2>
      </Link>
        <Badge  color="secondary" badgeContent={props.ShoppingListState.count}>
          <ShoppingCartIcon onClick={()=>props.changeShowCart()}/>{" "}
        </Badge>
        {/* <ProfilHeader/> */}
    </header>
  )
}
const mapStateToProps = (state)=>({
  ShoppingListState: state.ShoppingListState
})
const mapDispatchToProps = {changeShowCart}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
