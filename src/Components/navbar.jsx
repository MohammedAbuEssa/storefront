import React from 'react'
import { connect } from 'react-redux'
import { select } from'../store/actions'
function Navbar(props) {
  let categories =[] 
  props.storeState.items.map((item,idx)=>{
    if(!categories.includes(item.category)){
        categories.push(item.category)
    }})
  return (
    <div className='navbar'>
        {categories.map((category,idx)=>{
          return <h4 onClick={()=>props.select(category)} key={idx}>{category}</h4>
        })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  storeState: state.storeState
})
const mapDispatchToProps = { select };
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);