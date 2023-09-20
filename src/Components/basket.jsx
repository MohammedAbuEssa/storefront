import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';

import { remove,removeFromSpecific,addToSpecific} from '../store/actions'

function Basket({ShoppingListState,remove,removeFromSpecific,addToSpecific}) {
    let total = 0
  return (
    <div className='basket'>
        <h2>Order summary</h2>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {ShoppingListState.cartItems.map((item,idx)=>{
                total +=item.price*item.count
            return(<ListItem key={idx}>
                <ListItemAvatar>
                <Avatar>
                    <img  src={item.images[0]}/>
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.category} />
                <AddCircleIcon onClick={()=>addToSpecific(item)}/>&nbsp;
                <div className='number'>
                <h2>{item.count}</h2>
                </div>&nbsp;
                <RemoveCircleIcon onClick={()=>removeFromSpecific(item)}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <DeleteIcon onClick={()=>remove(item)}/>
                <h4 className='price'>{item.price*item.count} $</h4>
            </ListItem>)
            })}
        </List>
        <h3 className='price'>Total: {total} $</h3>
        <div className='basketInput'>
            <div className='basketBill'>
                <h2>Billing Address</h2>
                <TextField id="outlined-basic" label="Address" variant="standard" />
                <TextField id="standard-basic" label="City" variant="standard" />
                <TextField id="standard-basic" label="Country" variant="standard" />
                
            </div>
            <div className='basketPayment'>
                <h2>Payment</h2>
                <TextField id="standard-basic" label="Credit Card NO." variant="standard" />
                <TextField id="standard-basic" label="CVV" variant="standard" />      
            </div>
        </div>
            <Button variant="contained">Place your order</Button>
    </div>
  )
}
const mapStateToProps = (state)=>({
    ShoppingListState:state.ShoppingListState
})
const mapDispatchToProps= {remove,removeFromSpecific,addToSpecific}
export default connect(mapStateToProps,mapDispatchToProps)(Basket);

