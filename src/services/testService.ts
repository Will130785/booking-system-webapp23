import mainHttpInstance from './httpMain'
import { AxiosResponse } from 'axios'

class testService {
  testGet (token: string): Promise<AxiosResponse> {
    return mainHttpInstance.get('/test', {
      headers: {
        token: token
      }
    })
  }
}

export default new testService()