import axios from "axios"

export const searchData = axios.create({
    baseURL: 'http://localhost:4000/api/v1'
})

export const getActivities = async () =>{
    const response = await searchData.get('/activities')
    return response.data
}