import { combineReducers, legacy_createStore } from 'redux'
import { listReducer } from './listReducer'

export default function configureStore() {
  return legacy_createStore(combineReducers({ service: listReducer }))
}
