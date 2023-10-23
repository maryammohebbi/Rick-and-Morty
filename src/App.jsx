import { useState } from 'react'
import Navbar from './components/Navbar'
import CharacterList from './components/CharacterList'


function App() {

  return (
    <div className='container mx-auto max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-5xl p-5'>
      <Navbar/>
      <CharacterList/>
    </div>
  )
}

export default App
