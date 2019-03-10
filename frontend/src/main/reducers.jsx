import { combineReducers } from "redux"

const rootReducer = combineReducers({
    dashboard: () => ({sumary:{credit: 100, debt:45}})
})

export default rootReducer