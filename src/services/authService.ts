import mainHttpInstance from './httpMain'
import { AxiosResponse } from 'axios'

class AuthService {
  registerUser (data: {}): Promise<AxiosResponse> {
    return mainHttpInstance.post('/register', data)
  }
}

export default new AuthService()