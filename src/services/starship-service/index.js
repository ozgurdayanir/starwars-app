import axios from 'axios';

const baseURL= 'https://swapi.dev/api/';

export const fetchStarships = async (page = 1) => {
    try {
        const response = await axios.get(`${baseURL}starships/?page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching starships:", error);
        return null;
    }
};

export const fetchStarshipDetails = async (id) => {
    try {
        const response = await axios.get(`${baseURL}starships/${id}/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching starship details:", error);
        return null;
    }
};
