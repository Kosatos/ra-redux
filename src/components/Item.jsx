import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem, editItem } from '../redux/actions'

export default function Item({ item }) {
  const dispatch = useDispatch()
  return (
    <li className='p-4 flex justify-between items-center gap-4 border-2 border-gray-100 rounded-md shadow-md'>
      <h4 className='text-xl'>{item.name}</h4>
      <span className='text-xl font-bold'>{item.price}</span>
      <div className='flex gap-2'>
        <button
          className='py-2 px-4 text-white text-lg font-medium bg-lime-500 hover:bg-lime-600 transition-colors rounded-md'
          onClick={() =>
            dispatch(
              editItem({ name: item.name, price: item.price, id: item.id })
            )
          }
        >
          Редактировать
        </button>
        <button
          className='py-2 px-4 text-white text-lg font-medium bg-red-500 hover:bg-red-600 transition-colors rounded-md'
          onClick={() => dispatch(removeItem({ id: item.id }))}
        >
          Удалить
        </button>
      </div>
    </li>
  )
}
