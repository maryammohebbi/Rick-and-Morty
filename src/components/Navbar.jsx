import {HeartIcon} from "@heroicons/react/24/outline"
import { useState } from "react"
function Navbar({children}) {
  return (
    <nav className='mb-5'>      
        <div className="bg-slate-700 flex justify-between p-3 rounded-lg relative">
            <div className="hidden md:block text-slate-300 font-bold">LOGO 😍</div>
            <Search/>
            {children}
            <Favorites/>
        </div> 
    </nav>
  )
}

export default Navbar

function Search(){
    return(
            <input type="text" placeholder="Search..."
            className="w-40 p-1 rounded-md bg-slate-500" />
    )
}

export function SearchResult({numOfSearchResult}){
    return(
        <div className="hidden md:block text-slate-400 text-sm">Found {numOfSearchResult} Characters</div>
    )
}

function Favorites(){
    return(
        <button className="relative w-8 h-8">
            <HeartIcon className="w-full h-full text-red-600"/>
            <span 
            className="absolute w-5 h-5 bg-red-700 rounded-full -top-1 -right-2 text-xs text-slate-300 flex items-center justify-center font-bold">
                3
            </span>
        </button>
    )
}