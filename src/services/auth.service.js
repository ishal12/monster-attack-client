import axios from 'axios';
const API_URL = 'http://188.166.189.111/api/auth/';
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {

        if (response.data.status) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios
      .post(API_URL + 'register', {
        username: user.username,
        email: user.email,
        password: user.password
      })
      .then(response => {
        return response.data
      })
  }
}
export default new AuthService();