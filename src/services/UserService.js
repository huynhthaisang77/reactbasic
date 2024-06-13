import axios from './customize-axios';

const fetchALLUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

export { fetchALLUser };