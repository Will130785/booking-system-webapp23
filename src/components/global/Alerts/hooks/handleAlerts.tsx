import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { setAlert } from '../../../../store/alertSlice'

export const useAlert = () => {
  const showAlert = useAppSelector((state) => state.alerts.showAlert)
  const alertType = useAppSelector((state) => state.alerts.type)
  const alertText = useAppSelector((state) => state.alerts.text)
  const alertDuration = useAppSelector((state) => state.alerts.duration)
  const dispatch = useAppDispatch()

  const handleAlert = (show: boolean, type: string, text: string, duration: string) => {
    // Alert config
    const alertConfig = {
      showAlert: show,
      type,
      text,
      duration
    }
    dispatch(setAlert(alertConfig))
    if (duration !== 'indefinite') {
      const alertConfigReset = {
        showAlert: false,
        type: '',
        text: '',
        duration: ''
      }
      setTimeout(() => {
        dispatch(setAlert(alertConfigReset))
      }, Number(duration))
    }
  }

  return {
    showAlert,
    alertType,
    alertText,
    alertDuration,
    handleAlert
  }
}