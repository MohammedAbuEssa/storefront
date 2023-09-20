import superagent from 'superagent'

export const select = (category)=>{
    return{
        type:'select',
        payload:category
    }
}
export const add = (item)=>{
    return{
        type:'add',
        payload:item
    }
}
export const remove = (item)=>{
    return{
        type:'remove',
        payload:item
    }
}
export const changeShowCart = (payload)=>{
    return{
        type:'changeShowCart',
    }
}
export const addToSpecific = (payload)=>{
    return{
        type:'addToSpecific',
        payload:payload
    }
}
export const removeFromSpecific = (payload)=>{
    return{
        type:'removeFromSpecific',
        payload:payload
    }
}

export const getAction=(payload)=>{
    return{
        type:'GET',
        payload:payload
    }
}
export const getApiData =  ()=> async (dispatch)=>{
    const results = await superagent.get('https://dummyjson.com/products')
    dispatch(getAction(results.body.products))
}