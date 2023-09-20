import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {getApiData} from '../store/actions'
import Product from './product'

function Main(props) {
  useEffect(()=>{
    props.getApiData()
  },[])
  
  return (
    <main>
      <div className='cards'>
      {
        props.storeState.items.map((product,idx)=>{
          if(!props.storeState.selected){
            return <Product product={product} key={idx} />
          }else{if(product.category == props.storeState.selected){
            return <Product product={product} key={idx}/>
          }}
        })
      }
      </div>
    </main>
  )
}
const mapStateToProps = (state) => ({
  storeState: state.storeState
})
const mapDispatchToProps = {getApiData}
export default connect(mapStateToProps,mapDispatchToProps)(Main);
