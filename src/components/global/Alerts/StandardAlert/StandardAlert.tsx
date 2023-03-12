import { useAlert } from '../hooks/handleAlerts'

const StandardAlert = () => {
  const { showAlert, alertType, alertText, alertDuration, handleAlert } = useAlert() 

  return <div>
    {showAlert ? (
      <div className="rounded-lg shadow-lg absolute m-5 p-5 bg-white right-0 z-50">
        {alertDuration === 'indefinite' ? (
          <div className="flex justify-end">
            <button onClick={() => handleAlert(false, '', '', '')}>X</button>
          </div>
        ) : null}
        <div>
          <p className={`${alertType === 'error' ? 'text-red-400' : 'text-green-400'}`}>{alertText}</p>
        </div>
      </div>
    ) : null}
  </div>
}

export default StandardAlert