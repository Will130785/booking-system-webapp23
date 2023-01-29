import { IStandardButtonProps } from './types'

const StandardButton: React.FC<IStandardButtonProps> = ({ buttonText }) => {
  return (
    <button
      className='w-full bg-blue-300 p-4'
    >
      {buttonText}
    </button>
  )
}

export default StandardButton