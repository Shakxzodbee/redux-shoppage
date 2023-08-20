import { createSlice} from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
    name: "card",
    initialState: {
        newData: [],
        cartQuantity:0
    },
    reducers:{
        
        addCart: (state, action) => {
            // console.log(action.payload);
            const newItem = action.payload
            const isExist = state.newData.find((item )=> item.id === newItem.id )
            // state.cartQuantity++;
            if(!isExist){
                state.newData.push({id: newItem.id, quantity:1, name: newItem.name, desc:newItem.desc, totalPrice:newItem.price, price:newItem.price })
            }
            else{
                isExist.quantity++
                isExist.totalPrice = isExist.totalPrice+newItem.price 
            }
        },

        removeItem: (state, action) =>{
            const cartdata = action.payload;
            const id = cartdata.id;
            const isExist = state.newData.find((item) => item.id === id);
            // state.cartQuantity--,
            // isExist.quantity --;
            state.changed =true

            if(isExist.quantity ===1){
                state.newData = state.newData.filter((item) => item.id !== id)
            }else{
                isExist.quantity--
                isExist.totalPrice = isExist.totalPrice - cartdata.price
            }
        }
    }
})

export const {addCart, removeItem} = addToCartSlice.actions