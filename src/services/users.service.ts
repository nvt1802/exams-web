import httpClient from './httpClient'

const BASE_URL = 'http://localhost:4000'

export class UserService {
  static getAll(params: any) {
    return httpClient.get(`${BASE_URL}/api/admin`, { params })
  }

  static getUserById(id: any, params?: any) {
    return httpClient.get(`${BASE_URL}/api/admin/${id}`, { params })
  }

  static updateUser(id: any, body: any) {
    return httpClient.put(`${BASE_URL}/api/admin/${id}`, body)
  }

  static createUser(body: any) {
    return httpClient.post(`${BASE_URL}/api/admin`, body)
  }

  static deleteUser(id: any) {
    return httpClient.post(`${BASE_URL}/api/admin/${id}`)
  }

  static checkEmail(email: any) {
    return httpClient.get(`${BASE_URL}/api/admin/check/${email}`)
  }
}
