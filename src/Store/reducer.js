import {createSlice} from "@reduxjs/toolkit"

const workingArrays=createSlice({
    name:'workingReducer',
    initialState:{
        homeArray:[],
        daysOfWeek:[],
        deleteData:null,
        updateData:null,
        addMyBag:null,
    },
    reducers:{
        getHomeArray:(state,action)=>{
            return{...state,homeArray:action.payload}
        },
        deleteWork:(state,action)=>{
            return{...state,deleteData:action.payload}
        },
        updateWork:(state,action)=>{
          return{...state,updateData:action.payload}
        },
        addWork:(state,action)=>{
            return{...state,addMyBag:action.payload}
        },
        getDaysOfWeek:(state,action)=>{
            return{...state,daysOfWeek: action.payload}
        }
    }
})

export const {getHomeArray,
    deleteWork,
    updateWork,
    addWork,
    getDaysOfWeek}=workingArrays.actions
export default workingArrays.reducer
