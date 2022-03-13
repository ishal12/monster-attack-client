import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/quest/';
class QuestService {
  getAllQuest() {
    return axios.get(API_URL + 'listAllQuest', { headers: authHeader() });
  }
  doQuest(id) {
    return axios.post(API_URL + 'doQuest/:id', id, { headers: authHeader() });
  }
}
export default new QuestService();