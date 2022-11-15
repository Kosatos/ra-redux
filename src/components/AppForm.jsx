import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItem,
  cancelEditItem,
  changeUserValues,
  saveItem,
  searchItem,
} from '../redux/actions'

export default function AppForm() {
  const {
    status,
    nameValue: name,
    priceValue: price,
  } = useSelector((state) => state.service.editing)
  const { value } = useSelector((state) => state.service.searching)

  const dispatch = useDispatch()

  const handleChange = (evt) => {
    dispatch(
      changeUserValues({
        [evt.target.name]: evt.target.value,
      })
    )
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(
      addItem({
        name: name.trim(),
        price: +price,
      })
    )
  }
  const handleSave = (evt) => {
    evt.preventDefault()
    dispatch(saveItem())
  }
  const handleCancel = (evt) => {
    evt.preventDefault()
    dispatch(cancelEditItem())
  }
  const handleChangeSearch = (evt) => {
    dispatch(searchItem({ value: evt.target.value }))
  }
  return (
    <div>
      <form className='flex gap-4 py-8' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Введите название услуги'
          name='name'
          value={name}
          className='py-2 px-4 w-72 border-2 border-gray-200 rounded-md'
          onChange={handleChange}
        />
        <input
          type='number'
          min={0}
          name='price'
          value={price}
          placeholder='Введите стоимость'
          className='py-2 px-4 w-72 border-2 border-gray-200 rounded-md'
          onChange={handleChange}
        />

        {status ? (
          <div className='flex gap-2'>
            <button
              className='py-2 px-4 text-white text-lg font-medium bg-amber-500 hover:bg-amber-600 transition-colors rounded-md'
              onClick={handleSave}
            >
              Сохранить
            </button>
            <button
              className='py-2 px-4 text-white text-lg font-medium bg-red-500 hover:bg-red-600 transition-colors rounded-md'
              onClick={handleCancel}
            >
              Отмена
            </button>
          </div>
        ) : (
          <button className='py-2 px-4 text-white text-lg font-medium bg-amber-500 hover:bg-amber-600 transition-colors rounded-md'>
            Добавить
          </button>
        )}
      </form>
      <div className='flex items-center gap-2 mb-4'>
        <span className='text-lg'>Поиск:</span>
        <input
          type='text'
          value={value}
          className='py-2 px-4 w-72 border-2 border-gray-200 rounded-md'
          onChange={handleChangeSearch}
        />
      </div>
    </div>
  )
}
