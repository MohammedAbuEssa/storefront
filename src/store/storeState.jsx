

let initialState = {
    selected:null,
    items:[  
    ],
}
export default (state = initialState,action)=>{
    const {type,payload}= action;
    switch(type){
        case 'select':
            return{
                selected:payload,
                items:state.items,
            }
        case 'GET':
            return{
                selected:state.selected,
                items:payload,
            }
        default:
            return {
                selected:state.selected,
                items:state.items,
            }
    }
}


