import axios from "axios";

const API_URL = 'http://localhost:8000/users/'
const options = {
    headers : {
        'user-agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        'accept-language' :'en-US,en;q=0.9',

    }};

const register = (email,password) => {
    return axios.post(API_URL + 'create/', {
        email,
        password,
    }, );
};


const login = (email,password) => {
    return axios
        .post(API_URL + 'token/', {
            email,
            password
        })
        .then((response)=>{
            console.log(response);
            if(response.data){
                console.log(response.data.token)
                axios.get(API_URL + 'me/', {
                    headers : {
                        Authorization: 'Token ' + response.data.token
                    }
                    })
                    .then((response)=>{
                        localStorage.setItem('user', JSON.stringify(response.data));
                    })
            }

            return response.data
        });
};


const logout = () => {
    localStorage.removeItem("user");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register,
    login,
    logout
};