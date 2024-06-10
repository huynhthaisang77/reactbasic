import axios from './customize-axios';

const fetchALLUser = () => {
    return axios.get("/api/users?page=1");
}

export { fetchALLUser };