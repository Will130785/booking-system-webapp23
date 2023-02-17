import testService from '../../../services/testService'
import { useAppSelector } from '../../../store/hooks'

const DashboardMain = () => {
  const token = useAppSelector((state) => state.auth.token)
  const handleTest = async () => {
    const res = await testService.testGet(token)
    console.log(res)
  }
  return (
    <div>
      <p>This will be the dashboard</p>
      <button onClick={handleTest}>Test</button>
    </div>
  )
}

export default DashboardMain