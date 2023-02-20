import { IMainLayoutProps } from './types'
import TopBarMain from '../navigation/TopBarMain/TopBarMain'
import SideBarMain from '../navigation/SideBarMain/SideBarMain'

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const links = [
    {
      path: 'add-booking',
      text: 'Add Booking'
    },
    {
      path: 'all-bookings',
      text: 'Bookings'
    },
    {
      path: 'add-booking',
      text: 'Reminders'
    },
    {
      path: 'add-booking',
      text: 'Archives'
    }
  ]
  return (
    <div>
      <TopBarMain />
      <SideBarMain links={links} />
      <main>
        {children}
      </main>
    </div>
  )
}

export default MainLayout