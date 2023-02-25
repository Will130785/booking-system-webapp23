import { ICardProps } from './types'

const Card: React.FC<ICardProps> = ({ children, cardTitle, width }) => {
  return (
    <div className={`p-10 shadow-md shadow-slate-300 ${width} h-auto`}>
      <h2 className='text-xl font-medium'>{cardTitle}</h2>
        {children}
    </div>
  )
}

export default Card
