import { useAppDispatch } from '../../../store/hooks'
import { setSideBarOpen } from '../navigationSlice'
import { useUserActions } from '../../../hooks/user'

const TopBarMain = () => {
  const { logoutUser } = useUserActions()
  const dispatch = useAppDispatch()
  const handleSideBarStatus = () => {
    dispatch(setSideBarOpen())
  }
  return (
    <nav className="h-10 bg-slate-100">
      <button onClick={handleSideBarStatus}>X</button>
      <button onClick={logoutUser}>Logout</button>
    </nav>
  )
}

export default TopBarMain