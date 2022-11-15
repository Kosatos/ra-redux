import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Item from './Item'

export default function ItemList() {
  const { items } = useSelector((state) => state.service)
  const { value: searchValue } = useSelector((state) => state.service.searching)
  const [filtered, setFiltered] = useState(
    items.filter((item) => item.name.includes(searchValue))
  )

  useEffect(() => {
    setFiltered((prev) =>
      items.filter((item) => item.name.includes(searchValue))
    )
  }, [items, searchValue])

  if (!items.length) return null
  return (
    <ul className='flex flex-col gap-4'>
      {filtered.map((itm) => (
        <Item item={itm} key={itm.id}></Item>
      ))}
    </ul>
  )
}
