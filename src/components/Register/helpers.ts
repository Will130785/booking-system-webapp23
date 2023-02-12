import authService from '../../services/authService'
const registerUser = authService.registerUser
import { IResponseError } from '../../types/Errors'

export const handleRegister = async (fields: any) => {
  try {
    const res = await registerUser(fields)
    if (res && res.data) {
      console.log('successfully added new user')
      return {
        success: true,
        data: res.data
      }
    }
  } catch (err) {
    const error: IResponseError = err as IResponseError
    console.log(error.response.data)
    return {
      success: false,
      data: error.response.data
    }
  }
}