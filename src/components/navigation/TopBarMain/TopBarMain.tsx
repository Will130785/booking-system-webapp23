import { useAppDispatch } from '../../../store/hooks'
import { setSideBarOpen } from '../navigationSlice'

const TopBarMain = () => {
  const dispatch = useAppDispatch()
  const handleSideBarStatus = () => {
    dispatch(setSideBarOpen())
  }
  return (
    <nav className="h-10 bg-slate-100">
      <button onClick={handleSideBarStatus}>X</button>
    </nav>
  )
}

export default TopBarMain