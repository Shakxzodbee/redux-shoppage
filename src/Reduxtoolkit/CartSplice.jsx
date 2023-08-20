import { createSlice} from '@reduxjs/toolkit'


export const showCartSlice = createSlice({
    name: "showcart",
    initialState: {
        isShowCart: false
    },
    reducers:{
        showCart:state =>{
            state.isShowCart = !state.isShowCart
        }
    }
})

export const { showCart } = showCartSlice.actions