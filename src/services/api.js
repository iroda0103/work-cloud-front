import axios from 'axios';
// import.meta.env.BASE_URL || 
// Backend URL
const API_URL = 'http://localhost:3000/api';

// Axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Token ni har requestga qo'shish
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// API methods
export default {
    // Auth
    register(username, password, email) {
        return api.post('/register', { username, password, email });
    },
    
    login(username, password) {
        return api.post('/login', { username, password });
    },
    
    // Workspace
    startWorkspace() {
        return api.post('/workspace/start');
    },
    
    // Users
    getUsers() {
        return api.get('/users');
    }
};