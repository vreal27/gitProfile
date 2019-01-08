import { createStore, combineReducers } from 'redux'
import profileReducer from './reducers/profile'
import repoReducer from './reducers/repos'

const rootReducer = combineReducers({
    profileReducer: profileReducer,
    repoReducer: repoReducer
})
const store = createStore(rootReducer)

export default store 