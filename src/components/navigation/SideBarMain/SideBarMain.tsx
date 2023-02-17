import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import { setSideBarOpen } from '../navigationSlice'
import { ISideBarMainProps } from './types'
import { Link } from 'react-router-dom'

const SideBarMain: React.FC<ISideBarMainProps> = ({ links }) => {
  const dispatch = useAppDispatch()
  const sideBarOpen = useAppSelector((state) => state.navigation.sideBarOpen)
  const handleSideBarStatus = () => {
    dispatch(setSideBarOpen())
  }
  return (
    <div className={`top-0 right-0 w-full md:w-[35vw] bg-blue-600 p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${sideBarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <button onClick={handleSideBarStatus} className="mt-20 text-4xl font-semibold text-white">Close the sidebar</button>
      {links && links.length && (
        <ul>
          {links.map((link: { path: string, text: string }, index: number) => {
            return <li key={`nav-link-main-${index}`}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          })}
        </ul>
      )}
    </div>
  )
}

export default SideBarMain