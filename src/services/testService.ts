import mainHttpInstance from './httpMain'
import { AxiosResponse } from 'axios'

class testService {
  testGet (): Promise<AxiosResponse> {
    return mainHttpInstance.get('/')
  }
}

export default new testService()