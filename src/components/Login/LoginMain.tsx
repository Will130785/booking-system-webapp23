import Card from '../global/Card/Card'
import StandardInput from '../global/StandardInput/StandardInput'
import StandardButton from '../global/StandardButton/StandardButton'
import { useFormFields } from '../../hooks/handleForms'
import { handleLogin } from './helpers'

const LoginMain = () => {
  const [fields, setFormValues] = useFormFields({ username: '', password: '' })
 
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Card 
        cardTitle='Login'
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
          <StandardButton 
            buttonText='Login'
            onClick={() => handleLogin(fields)}
          />
        </div>
      </Card>
    </div>
  )
}

export default LoginMain