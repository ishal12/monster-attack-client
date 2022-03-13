import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8000/api/quest/';
class QuestService {
  getAllQuest() {
    return axios.get(API_URL + 'listAllQuest', { headers: authHeader() })
      .then(response => {
        return response.data;
      });
  }
  doQuest(quest_id, user_id) {
    return axios.post(API_URL + `doQuest/${quest_id}`, { id: user_id }, { headers: authHeader() });
  }
}
export default new QuestService();