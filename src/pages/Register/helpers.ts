import authService from '../../services/authService'
const registerUser = authService.registerUser
import { IResponseError } from '../../types/Errors'
import { IRegisterFormFields } from './types'

export const handleRegister = async (fields: IRegisterFormFields) => {
  try {
    const res = await registerUser(fields)
    if (res && res.data) {
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