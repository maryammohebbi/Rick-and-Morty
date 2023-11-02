import { XCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Modal({title, children, onOpen, open}) {
    if(!open) return null;
  return (
    <div className=''>
        <div 
        onClick={()=> onOpen(false)}
        className='bg-slate-900 fixed top-0 left-0 right-0 h-full opacity-80 z-10'></div>
        <div className='absolute w-[40%] min-h-[250px] bg-slate-700 z-20 top-[50%] left-[50%] -translate-x-[50%] translate-y-[50%] rounded-lg p-3 shadow-2xl'>
            <div className='flex justify-between border-b-2 border-slate-500 pb-2'>
                <h2 className='text-slate-300 font-bold'>{title}</h2>
                <button
                onClick={()=> onOpen(false)}
                 className='text-red-400'>
                    <XCircleIcon className='w-6 h-6'/>
                </button>
            </div>
            {children}
        </div>

    </div>
  )
}

export default Modal