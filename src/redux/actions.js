import {
  CHANGE_USER_VALUES,
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  SAVE_ITEM,
  CANCEL_EDIT_ITEM,
  SEARCH_ITEM,
} from './types'

export function changeUserValues(payload) {
  return {
    type: CHANGE_USER_VALUES,
    payload,
  }
}

export function addItem(payload) {
  return {
    type: ADD_ITEM,
    payload,
  }
}

export function removeItem(payload) {
  return {
    type: REMOVE_ITEM,
    payload,
  }
}

export function editItem(payload) {
  return {
    type: EDIT_ITEM,
    payload,
  }
}

export function saveItem() {
  return {
    type: SAVE_ITEM,
  }
}

export function cancelEditItem() {
  return {
    type: CANCEL_EDIT_ITEM,
  }
}

export function searchItem(payload) {
  return {
    type: SEARCH_ITEM,
    payload,
  }
}
