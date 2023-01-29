import { IStandardInputProps } from './types'

const StandardInput: React.FC<IStandardInputProps> = ({ labelPosition, labelText, inputType, inputId, onChange }) => {
  return (
    <div className='flex flex-col mb-4 mt-4'>
      {labelPosition === 'top' && (
        <label htmlFor={inputId} className='mb-4'>{labelText}</label>
      )}
      <input 
        type={inputType}
        className='bg-slate-50 p-4'
        id={inputId}
        onChange={onChange}
      />
      {labelPosition === 'bottom' && (
        <label htmlFor={inputId} className='mt-4'>{labelText}</label>
      )}
    </div>
  )
}

export default StandardInput