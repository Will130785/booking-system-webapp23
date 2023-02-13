import mainHttpInstance from './httpMain'
import { AxiosResponse } from 'axios'

class AuthService {
  registerUser (data: {}): Promise<AxiosResponse> {
    return mainHttpInstance.post('/register', data)
  }
  loginUser (data: {}): Promise<AxiosResponse> {
    return mainHttpInstance.post('/login', data)
  }
}

export default new AuthService()