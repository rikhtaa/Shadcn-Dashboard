import classNames from 'classnames'
import { Dispatch } from 'react'
import { BsList} from 'react-icons/bs'
export default function Header({toggleCollapse, setToggleCollapse}:{toggleCollapse:boolean, setToggleCollapse:Dispatch<React.SetStateAction<boolean>>})
{

  const sideBarToggle=()=>{
    setToggleCollapse(!toggleCollapse)
  }

  const headerStyle = classNames("fixed bg-[#31353d] w-full z-0 px-4 shadow-sm shadow-slate-500/40",
    {
      ["sm:pl-[20rem]"]:!toggleCollapse,
      ["sm:pl-[5.6rem]"]:toggleCollapse
    }
  )

  return(
    <header className={headerStyle}>
      <div className="flex items-center justify-between h-16">
        <button onClick={sideBarToggle} className="order-2 sm:order-2 bg-[#3a3f48] hover:bg-white ml-3 rounded-md h-[30px] 
       w-[30px] shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
        <BsList></BsList>
        </button>
        <div className='order-1 sm:order-2 h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center text-center'>
          <span className='font-semibold text-sm'>SR</span>
        </div>
      </div>
    </header>
  )
}