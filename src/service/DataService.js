
import axios from 'axios'

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://localhost:8080/game';
// const DataService = () => {
class DataService {
    
    getBoard(){
        return axios.get(`${url}`);
    }
    // const getAllData = () => {
    //     let results = axios.get(`${url}`)
    //         .then(response => console.log(response.data))
    //         .catch(error => console.log(error))
    // }
   
}
 
export default new DataService();