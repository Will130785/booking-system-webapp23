import { IStandardButtonProps } from './types'

const StandardButton: React.FC<IStandardButtonProps> = ({ buttonText, onClick }) => {
  return (
    <button
      className='w-full bg-blue-300 p-4'
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}

export default StandardButton