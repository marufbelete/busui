import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://melabus.herokuapp.com/";
const config = {
  headers: {
    "Content-Type": "application/json"
    },
    withCredentials: true
  }

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'getorganizationroute',  { headers: authHeader() });
  }
  getReservedSit() {
    return axios.get(API_URL + 'getreservedsit/6214d859b3778328889ce30a' ,{withCredentials: true, credentials: 'include'});
  }
  getBusList() {
    return axios.get(API_URL + 'getallorganizationbus',{withCredentials: true});
  }
  getUserList() {
    return axios.get(API_URL + 'getallorganizationuser', { headers: authHeader() });
  }
  getBookedList() {
    return axios.get(API_URL + 'bookedList', { headers: authHeader() });
  }
  getAllTripHistory() {
    return axios.get(API_URL + 'getalltriphistory', { headers: authHeader() });
  }
}

export default new UserService();
