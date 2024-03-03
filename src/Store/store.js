import {configureStore} from "@reduxjs/toolkit"
import workingArrays from "./reducer"

let store= configureStore({
    reducer:{
        workingReducer:workingArrays
    }
})

export default store