const initialState = {
    showCart:false,
    cartItems:[],
    count:0
}
export default (state = initialState, action)=>{
    const {type,payload}= action;
    switch(type){
        case 'add':
            let itemsList
            if(state.cartItems.find(item=>item.id == payload.id)){
                 itemsList = state.cartItems.map(item=>{
                    if(item.id==payload.id){
                        return {...item,count:item.count+1}
                    }else{return item}
                })   
            }else {itemsList =[...state.cartItems,{...payload,count:1}]}
            return{
                showCart:state.showCart,
                cartItems:itemsList,
                count:state.count+1,
            }
        case 'remove':
            const shoppingList = state.cartItems.filter((item)=> item.id!==payload.id)
            return{
                showCart:state.showCart,
                cartItems:shoppingList,
                count:state.count-payload.count,
            }
        case 'changeShowCart':
            return{
                showCart:!state.showCart,
                cartItems:state.cartItems,
                count:state.count,
            }
        case 'addToSpecific':
            const list = state.cartItems.map(item=>{
                if(item.id==payload.id){
                    return {...item,count:item.count+1}
                }else{return item}})
            return{
            showCart:state.showCart,
            cartItems:list,
            count:state.count,
            }
        case 'removeFromSpecific':
            let itemlist
            if(payload.count == 1){
                itemlist = state.cartItems.filter((item)=> item.id!==payload.id)
            }
            else{
            itemlist = state.cartItems.map(item=>{
                if(item.id==payload.id){
                    return {...item,count:item.count-1}
                }else{return item}})}
            return{
            showCart:state.showCart,
            cartItems:itemlist,
            count:state.count-1,
            }
        
        default:
            return state
    }
}
