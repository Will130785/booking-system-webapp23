import { useEffect } from 'react'
import Card from '../../../components/global/Card/Card'
import StandardInput from '../../../components/global/StandardInput/StandardInput'
import StandardButton from '../../../components/global/StandardButton/StandardButton'
import { useFormFields } from '../../../hooks/handleForms'
import { handleLogin } from '../helpers'
import { useAppDispatch } from '../../../store/hooks'
import { loginUserAction } from '../../../store/authSlice'
import { ILoginFormFields } from '../types'

const LoginMain = () => {
  const [
    fields, 
    setFormValues, 
    handleSubmit, 
    response, 
    setFormErrors, 
    errors
  ] = useFormFields(
    { 
      username: '', 
      password: '', 
      confirmPassword: '' 
    }, handleLogin)
  const dispatch = useAppDispatch()

  // Form validation
  useEffect(() => {
    setFormErrors(() => {
      const errors: ILoginFormFields = {}
      if (!fields.username) {
        errors.username = 'Username required'
      }
      if (!fields.password) {
        errors.password = 'PAssword required'
      }
      return errors
    })
  }, [fields])

  // Set token
  useEffect(() => {
    if (response && response.data && response.data.token) {
      dispatch(loginUserAction(response.data))
    }
  }, [response])

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Card
        cardTitle='Login'
        width="w-3/6"
      >
        <div>
          <StandardInput 
            labelPosition='top'
            labelText='Username'
            inputType='text'
            inputId='username'
            onChange={setFormValues}
            value={fields.username}
          />
          {errors && errors.username && <p>Username is required</p>}
          <StandardInput 
            labelPosition='top'
            labelText='Password'
            inputType='password'
            inputId='password'
            onChange={setFormValues}
            value={fields.password}
          />
          {errors && errors.password && <p>Password is required</p>}
          <StandardButton 
            buttonText='Login'
            onClick={handleSubmit}
          />
          {response && response.data && (
            <p>{response.data.message}</p>
          )}
        </div>
      </Card>
    </div>
  )
}

export default LoginMain