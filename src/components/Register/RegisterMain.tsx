import { useEffect, useState } from 'react'
import Card from '../global/Card/Card'
import StandardInput from '../global/StandardInput/StandardInput'
import StandardButton from '../global/StandardButton/StandardButton'
import { useFormFields } from '../../hooks/handleForms'
import { handleRegister } from './helpers'
import { IRegisterFormFields } from './types'

const RegisterMain = () => {
  const [fields, setFormValues, handleSubmit, response, setFormErrors, errors] = useFormFields({ username: '', password: '', confirmPassword: '' }, handleRegister)
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
      >
        <div>
          <StandardInput 
            labelPosition='top'
            labelText='Username'
            inputType='text'
            inputId='username'
            onChange={setFormValues}
          />
          {errors && errors.username && <p>Username is required</p>}
          <StandardInput 
            labelPosition='top'
            labelText='Password'
            inputType='password'
            inputId='password'
            onChange={setFormValues}
          />
          {errors && errors.password && <p>Password is required</p>}
          <StandardInput 
            labelPosition='top'
            labelText='Confirm Password'
            inputType='password'
            inputId='confirmPassword'
            onChange={setFormValues}
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

export default RegisterMain