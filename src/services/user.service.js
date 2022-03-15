import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://188.166.189.111/api/user/';
class UserService {
  getUser(id) {
    return axios.post(API_URL + 'getUser', { id: id }, { headers: authHeader() })
      .then(response => {
        return response.data;
      });
  }
  leaderboard() {
    return axios.get(API_URL + 'leaderboard', { headers: authHeader() })
      .then(response => {
        return response.data;
      });
  }
}
export default new UserService();
