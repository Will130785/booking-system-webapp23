import { useEffect } from 'react'
import Card from '../global/Card/Card'
import StandardInput from '../global/StandardInput/StandardInput'
import StandardButton from '../global/StandardButton/StandardButton'
import { useFormFields } from '../global/StandardInput/hooks'

const RegisterMain = () => {
  const [fields, setFormValues] = useFormFields({ username: '', password: '', confirmPassword: '' })
  useEffect(() => {
    console.log(fields)
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
          <StandardInput 
            labelPosition='top'
            labelText='Password'
            inputType='password'
            inputId='password'
            onChange={setFormValues}
          />
          <StandardInput 
            labelPosition='top'
            labelText='Confirm Password'
            inputType='password'
            inputId='confirmPassword'
            onChange={setFormValues}
          />
          <StandardButton 
            buttonText='Register'
          />
        </div>
      </Card>
    </div>
  )
}

export default RegisterMain