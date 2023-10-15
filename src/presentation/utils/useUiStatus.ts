import { useState } from 'react'

export enum UiStateStatus {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    EMPTY = 'EMPTY',
    UNSET = 'UNSET',
}

export const useUiStatus = (initialStatus?: UiStateStatus) => {
  const [ status, setStatus ] = useState<UiStateStatus>(initialStatus || UiStateStatus.UNSET)
  const [ message, setMessage ] = useState<string>('')

  const isLoading = status === UiStateStatus.LOADING
  const isSuccess = status === UiStateStatus.SUCCESS
  const isError = status === UiStateStatus.ERROR
  const isEmpty = status === UiStateStatus.EMPTY
  const isUnset = status === UiStateStatus.UNSET

  const resetStatus = () => {
    setStatus(UiStateStatus.UNSET)
    setMessage('')
  }

  return {
    status,
    message,
    setStatus,
    setMessage,
    isLoading,
    isSuccess,
    isError,
    isEmpty,
    isUnset,
    resetStatus,
  }
}
