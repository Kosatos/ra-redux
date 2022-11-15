import {
  CHANGE_USER_VALUES,
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  SAVE_ITEM,
  CANCEL_EDIT_ITEM,
  SEARCH_ITEM,
} from './types'
import shortid from 'shortid'
import { services } from '../data/services'

const initialState = {
  items: services,
  editing: {
    status: false,
    itemId: null,
    nameValue: '',
    priceValue: '',
  },
  searching: {
    value: '',
  },
}

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_VALUES:
      return {
        ...state,
        editing: {
          ...state.editing,
          nameValue:
            action.payload.name === undefined
              ? state.editing.nameValue
              : action.payload.name,
          priceValue:
            action.payload.price === undefined
              ? state.editing.priceValue
              : action.payload.price,
        },
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { id: shortid.generate(), ...action.payload }],
        editing: { ...state.editing, nameValue: '', priceValue: '' },
      }

    case EDIT_ITEM:
      console.log(action.payload)
      return {
        ...state,
        editing: {
          status: true,
          itemId: action.payload.id,
          nameValue: action.payload.name,
          priceValue: action.payload.price,
        },
      }

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        editing: { status: false, nameValue: '', priceValue: '' },
      }

    case SAVE_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === state.editing.itemId) {
            return {
              ...item,
              name: state.editing.nameValue,
              price: state.editing.priceValue,
            }
          } else {
            return item
          }
        }),
        editing: { status: false, nameValue: '', priceValue: '' },
      }
    case CANCEL_EDIT_ITEM:
      return {
        ...state,
        editing: { status: false, nameValue: '', priceValue: '' },
      }
    case SEARCH_ITEM:
      return {
        ...state,
        searching: {
          value: action.payload.value,
        },
      }

    default:
      return state
  }
}
