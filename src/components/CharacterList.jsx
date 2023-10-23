import {EyeIcon} from "@heroicons/react/24/outline"
function CharacterList() {
  return (
    <div className="w-full lg:w-[40%]">
        <Character/>
        <Character/>
    </div>
  )
}

export default CharacterList

function Character(){
    return(
        <div className="w-full bg-slate-800 rounded-xl flex justify-between items-center p-2 mb-4">
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt=""
            className="w-20 h-20 rounded-xl" />
            <div>
                <h3>
                    <span>👨🏻‍🦰</span>
                    <span className="text-slate-200 font-bold"> Character name</span>
                </h3>
                <div className="text-slate-200 text-sm">
                    <span>👨🏻‍🦰</span>
                    <span> Dead</span>
                    <span> - Human</span>
                </div>
            </div>
            <button className="w-6 h-6 sm:w-8 sm:h-8 text-red-500"><EyeIcon /></button>
        </div>
    )
}