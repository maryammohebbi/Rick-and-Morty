import { useState } from 'react'
import Navbar from './components/Navbar'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
import { allCharacters } from '../data/data'

function App() {

  return (
    <div className='container mx-auto max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-5xl p-5'>
      <Navbar/>
      <div className='flex flex-col lg:flex-row justify-between gap-2 h-auto w-full'>
        <CharacterList allCharacters={allCharacters}/>
        <CharacterDetail/>
      </div>
    </div>
  )
}

export default App
