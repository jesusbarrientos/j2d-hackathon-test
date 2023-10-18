import { AxiosError } from 'axios'
import { CatchResponse, HttpErrorResponse } from '@/resources/repositories/common/rest/types.ts'

export const catchResponse: CatchResponse = async (fn) => {
  try {
    const { data } = await fn()
    return { data, error: null }
  }
  catch (error) {
    return {
      data  : null,
      error : {
        statusCode : (error as AxiosError).response?.status,
        message    : (error as AxiosError).message,
      } as HttpErrorResponse,
    }
  }
}
