import authService from '../../services/authService'
const loginUser = authService.loginUser
import { IResponseError } from '../../types/Errors'
import { ILoginFormFields } from './types'

export const handleLogin = async (fields: ILoginFormFields) => {
  try {
    const res = await loginUser(fields)
    if (res && res.data) {
      // save token to local storage and store
      localStorage.setItem('token', res.data.token)
      return {
        success: true,
        data: res.data
      }
    }
  } catch (err) {
    const error: IResponseError = err as IResponseError
    return {
      success: false,
      data: error.response.data
    }
  }
}