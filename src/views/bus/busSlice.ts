import {createSlice, PayloadAction,createAsyncThunk} from '@reduxjs/toolkit'
import UserService from '../../services/user.service'
// export interface BUS {
//     id:string
//     plateNo:string
//     sideNo:string
//     driverId:string|undefined
//     redatId:string|undefined
//     NoOfSeat:number,
//     state:string
// }

interface BussesState {
    busses:any[]
    status:'idle' | 'loading' | 'succeeded' | 'failed'
    error:string|undefined
} 
const initialState = {
    busses:[],
    status:"idle",
    error:undefined
    
} as BussesState
export const fetchBusses = createAsyncThunk('busses/fetchBusses',async ()=>{
 return await (await UserService.getBusList()).data
})

const busSlice = createSlice({
    name:'busses',
    initialState,
    reducers:{
        addBus:(state,action:PayloadAction<any>)=>{
            state.busses.push(action.payload)
        },
        // deleteBus:(state,action:PayloadAction<string>)=>{
        //     state.busses = state.busses.filter(({id})=>id!==action.payload)
        // },

        // updateBus:(state,action:PayloadAction<BUS>)=>{
        //     const busTobeEdited = action.payload
        //     const oldBus = state.busses.find((bus)=>bus.id===busTobeEdited.id)
        //     if(oldBus){
        //         oldBus.sideNo = busTobeEdited.sideNo  
        //         oldBus.plateNo = busTobeEdited.plateNo
        //         oldBus.driverId = busTobeEdited.driverId
        //         oldBus.redatId = busTobeEdited.redatId
        //         oldBus.NoOfSeat = busTobeEdited.NoOfSeat
        //         oldBus.state = busTobeEdited.state
                
        //     }
        // }

    }
    ,
    extraReducers(builder) {
        builder
          .addCase(fetchBusses.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(fetchBusses.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched busses to the array
            state.busses = state.busses.concat(action.payload)
          })
          .addCase(fetchBusses.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
      }
})
export default busSlice.reducer
export const {addBus} = busSlice.actions