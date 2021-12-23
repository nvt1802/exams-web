import HttpClient from 'services/httpClient'

class LoginServices {
  static getUserInfo(body: any) {
    return HttpClient.post('http://localhost:4000/login', body)
  }
}

export default LoginServices
