import UserService from '../../services/user.service'
import AuthService from "../../services/auth.service";
import {createSlice,PayloadAction,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users/fetchUsers',async ()=>{
    return await (await UserService.getUserList()).data
})

export const addUsers = createAsyncThunk(
  'users/addNewuser',
  async (user: any, thunkAPI) => {
    const response = await AuthService.addUser(user)
    return response.data
  }
)
export interface USER {
id:string
firstName:string
lastName:string
gender:string
phoneNumber:string
userRole:string
password:string
}
type initialStateType = {
    users:any[],
    status:'idle' | 'loading' | 'succeeded' | 'failed'
    error:string|undefined
}
const initialState:initialStateType = {
        users:[
        //     {
        //         id:'6210dbdba4368b3c88da8419',
        //         firstName:'Dummy',
        //         lastName:'Driver',
        //         gender:'Male',
        //         phoneNumber:"+251927784322",
        //         role:'3',
        //         password:'12345',
        //         },
        //         {
        //             id:'6252cbbc9c79a5ce22d5f206',
        //             firstName:'Dummy',
        //             lastName:'Redat',
        //             gender:'Male',
        //             phoneNumber:"+251927784322",
        //             role:'4',
        //             password:'12345',
        //             },
        // {
        // id:'0',
        // firstName:'Dawit',
        // lastName:'Fissha',
        // gender:'Male',
        // phoneNumber:"+251927784322",
        // role:'3',
        // password:'12345',
        // },
        // {
        //     id:'1',
        //     firstName:'Melaku',
        //     lastName:'Ayu',
        //     gender:'Male',
        //     phoneNumber:"+251927784322",
        //     role:'3',
        //     password:'12345',
        //     },
        //     {
        //         id:'2',
        //         firstName:'Maruf',
        //         lastName:'Belete',
        //         gender:'Male',
        //         phoneNumber:"+251927784322",
        //         role:'4',
        //         password:'12345',
        //         },
        //         {
        //             id:'3',
        //             firstName:'Mercy',
        //             lastName:'Teshome',
        //             gender:'Female',
        //             phoneNumber:"+251927784322",
        //             role:'4',
        //             password:'12345',
        //             }
        ],
        status:'idle',
        error:""
        } as initialStateType
const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        // addUser:(state,action:PayloadAction<USER>)=>{
        //     state.users.push(action.payload)
        // }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded'
            
            state.users = state.users.concat(action.payload)
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
          .addCase(addUsers.fulfilled,(state,action)=>{
              state.users.push(action.payload)
          })
      }
})
// export const {addUser} = usersSlice.actions
export default usersSlice.reducer
