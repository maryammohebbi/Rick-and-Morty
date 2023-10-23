import {Bars3Icon, HeartIcon, XMarkIcon} from "@heroicons/react/24/outline"
import { useState } from "react"
function Navbar() {
    const [showNav, setShowNav] = useState(true)
    const handleNavOpen = ()=>{
        setShowNav(true)
    }
    const handNavClose = ()=>{
        setShowNav(false)
    }
  return (
    <nav className=''>
        <Bars3Icon 
        onClick={handleNavOpen}
        className={`w-10 h-10 text-slate-400 cursor-pointer md:hidden ${showNav && "hidden"}`}/>
        
        <div 
        className={`${showNav ? "" : "hidden"} bg-slate-700 flex flex-col gap-y-3 md:flex-row justify-between p-3 rounded-lg relative`}>
            <XMarkIcon 
            onClick={handNavClose}
            className="w-8 h-8 absolute top-1 right-1 text-slate-400 cursor-pointer md:hidden"/>
            <div className="text-slate-300 font-bold">LOGO 😍</div>
            <Search/>
            <SearchResult/>
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

function SearchResult(){
    return(
        <div className="text-slate-400 text-sm">Found X Characters</div>
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