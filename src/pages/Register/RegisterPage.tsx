import { useEffect } from 'react'
import Card from '../../components/global/Card/Card'
import StandardInput from '../../components/global/StandardInput/StandardInput'
import StandardButton from '../../components/global/StandardButton/StandardButton'
import { useFormFields } from '../../hooks/handleForms'
import { handleRegister } from './helpers'
import { IRegisterFormFields } from './types'
import { IUseFormFields } from '../../hooks/types'

const RegisterPage = () => {
  const { fields, setFormValues, handleSubmit, response, setFormErrors, errors } = useFormFields({ username: '', password: '', confirmPassword: '' }, handleRegister) as IUseFormFields
  useEffect(() => {
    setFormErrors(() => {
      const errors: IRegisterFormFields = {}
      if (!fields.username) {
        errors.username = 'Username required'
      }
      if (!fields.password) {
        errors.password = 'PAssword required'
      }
      if (!fields.confirmPassword) {
        errors.confirmPassword = 'Confirm Password required'
      }
      return errors
    })
  }, [fields])
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Card 
        cardTitle='Register User'
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
          <StandardInput 
            labelPosition='top'
            labelText='Confirm Password'
            inputType='password'
            inputId='confirmPassword'
            onChange={setFormValues}
            value={fields.confirmPassword}
          />
          {errors && errors.confirmPassword && <p>Confirm password is required</p>}
          <StandardButton 
            buttonText='Register'
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

export default RegisterPage