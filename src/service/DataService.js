import axios from 'axios'

//const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://localhost:8080/game';

class DataService {
    
    getBoard(){
        return axios.get(`${url}`);
    }

    addPlayer(name){
        return axios.post(url, name)
    }
   
}
 
export default new DataService();