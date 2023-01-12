import axios from 'axios';

class Service{
    constructor(){
        this.baseUrl = 'http://localhost:4000/';
    }
    getdata(){
        return axios.get(this.baseUrl);
    }

    authenticate(prn,password){
        return axios.get(this.baseUrl+"auth/"+'"'+prn+'"/"'+password+'"');
    }
}

export default new Service;