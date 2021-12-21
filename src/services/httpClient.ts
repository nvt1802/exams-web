import Axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import { get as __get } from 'lodash'

export const URL = 'http://localhost:4000'

export const instance: AxiosInstance = Axios.create({
  baseURL: '',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  paramsSerializer(params: any) {
    const searchParams = new URLSearchParams()
    for (const key of Object.keys(params)) {
      const param = params[key]
      if (Array.isArray(param)) {
        for (const p of param) {
          searchParams.append(key, p)
        }
      } else {
        searchParams.append(key, param)
      }
    }
    return searchParams.toString()
  },
})

export const AxiosCreateSession = async (email?: string, password?: string) => {
  const bodyParams = {
    email,
    password,
  }

  const authResponse = await Axios.post(`${URL}/login`, bodyParams)

  const { data } = authResponse

  http.setAuthorizationHeader(data.token)

  return data.token
}

instance.interceptors.request.use(
  (response: any) => response,
  (error: any) => {
    Promise.reject(error.response || error.request || error.message)
  }
)

instance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    const { response = {} } = error
    if (response.status === 401) {
    } else {
      return error.response || error.request || error.message
    }
  }
)

const http = {
  setAuthorizationHeader(accessToken: string) {
    instance.defaults.headers.common = {
      authorization: `${accessToken}`,
    }
  },

  setDeviceTokenParam() {
    instance.defaults.params = {}
  },

  request(config: AxiosRequestConfig) {
    config.params = {
      ...config.params,
    }
    return instance.request(config)
  },

  get(url: string, config?: AxiosRequestConfig) {
    if (config) {
      config.params = {
        ...config.params,
      }
    }

    return instance.get(url, config)
  },

  post(url: string, data = {}, config?: AxiosRequestConfig) {
    if (config) {
      config.params = {
        ...config.params,
      }
    }

    return instance.post(url, data, config)
  },

  put(url: string, data = {}, config?: AxiosRequestConfig) {
    if (config) {
      config.params = {
        ...config.params,
      }
    }

    return instance.put(url, data, config)
  },

  patch(url: string, data = {}, config?: AxiosRequestConfig) {
    if (config) {
      config.params = {
        ...config.params,
      }
    }

    return instance.patch(url, data, config)
  },

  delete(url: string, config?: AxiosRequestConfig) {
    if (config) {
      config.params = {
        ...config.params,
      }
      config.data = {
        ...config.data,
      }
    }

    return instance.delete(url, config)
  },

  all(requests: any[]) {
    return Axios.all(requests)
  },
}

export const axiosHandler = (service: any) => {
  return new Promise<any>(async (resolve) => {
    const response: AxiosResponse = await service()

    const apiResponse = __get(response, '', undefined)
    const httpStatus = __get(response, 'status', 500)

    // TODO: Change response status
    if (apiResponse === '' || (response && response.status >= 500)) {
      resolve({ isSuccess: false, isInternalServerError: true, response })
    }

    const payload = __get(response, 'data', null)
    const status = __get(response, 'status', null)
    const errors = __get(response, 'errors', [])

    const data = payload

    let error = errors
    let message = null

    const isSuccess = status === 200
    const isFailure = status !== 200

    const isFormFieldFailure =
      isFailure && errors.length > 0 && errors[0].includes(':')

    if (isFormFieldFailure && errors.length > 0) {
      error = {}
      errors.forEach((errorItem: string) => {
        const splitItem: string[] = errorItem.split(':')

        if (splitItem.length >= 2) {
          const key: string = splitItem[0].trim()
          const value: string = splitItem[1].trim()
          error[key] = error[key] ? `${error[key]}\\n${value}` : value
        }
      })
    }

    if (!isFormFieldFailure && errors.length === 1) {
      message = errors[0]
    }

    resolve({
      data,
      error,
      status,
      httpStatus,
      message,
      isSuccess,
      isFailure,
      response,
      isInternalServerError: false,
    })
  })
}

export default http
