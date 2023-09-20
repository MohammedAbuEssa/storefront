import React, { useState } from 'react'
import { useParams, Link } from "react-router-dom";
import { connect } from 'react-redux'
import {add} from '../store/actions'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {getApiData} from '../store/actions'
function Item({storeState,add}) {
    const {id}= useParams()
    let item 
    storeState.items.map((product)=>{
        if(product.id == id){
            item = product
        }
    })
    const [bigImage,setBigImage]=useState(item.images[0])
  return (
    <div className='itemEl'>
        <h2>{item.title}</h2>
        <div className='itemImages'>
        <div className='images'>
            {item.images.map((image,idx)=>{
                return <img className='image' src={image} onClick={()=>setBigImage(image)} key={idx}/>
            })}
        </div>
            <img className='bigImage' src={bigImage}/>
        </div>
        <div className='itemDes'>
            <h4>Description:</h4>
            <p> {item.description}</p>
            <p><span className='bigText'>Brand:</span> {item.brand}</p>
            <p><span className='bigText'>Price:</span> {item.price}$</p>
            <p><span className='bigText'>Rating:</span> {item.rating}</p>
        </div>
        <h3 className='addToCart' onClick={()=>{add(item)}}>Add To Cart</h3>
    </div>
  )
}
const mapStateToProps = (state)=>({
    storeState:state.storeState,
    ShoppingListState:state.ShoppingListState
})
const mapDispatchToProps= {add}

export default connect(mapStateToProps,mapDispatchToProps)(Item)
