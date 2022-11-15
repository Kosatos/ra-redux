import React from 'react'
import ItemList from './components/ItemList'
import AppForm from './components/AppForm'

function App() {
  return (
    <div className='max-w-[960px] mx-auto px-4 py-10'>
      <AppForm></AppForm>
      <ItemList></ItemList>
    </div>
  )
}

export default App
