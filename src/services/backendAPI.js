import axios from "axios";

axios.defaults.baseURL = 'https://flat-backend.p.goit.global';

// add axios header token management (stores in global state, in localStorage)

export const registerUserApi = ({ name, email, password }) => {
    return axios
        .post(
            "/api/user/register",
            {
                name,
                email,
                password,
            },
        )
        .then(({ data: { name, email } }) => ({
            name,
            email
        }));
};

export const loginUserApi = ({ email, password }) => {
    return axios
        .post(
            "/api/user/login",
            {
                email,
                password,
            },
        )
        .then(({ data: { token } }) => ({
            token
        }));
};

export const getUserDataApi = () => {
    return axios
        .get("/api/user/info")
        .then(({ data: { user: { email, name, balance } } }) => ({
            name,
            email,
            balance
        }));
};

export const currentUserLogoutApi = () => {
    return axios.get('/api/user/logout');
}

export const addBalanceApi = ({ balance }) => {
    return axios
        .put('/api/user/addBalance', { balance })
        .then(({ data: { balance } }) => ({ balance }));
}