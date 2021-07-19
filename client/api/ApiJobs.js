import axios from 'axios';



const list = async () => {
    try {
        let response = await axios.get(`/api/jobs/findAll`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

const findById = async (id) => {
    try {
        let response = await axios.get(`/api/jobs/findByJobId/${id}`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

const findByParams = async (filterParams) => {
    const {desc,location,fullTime} = filterParams;
    try {
        let response = await axios.get(`/api/jobs/findByParams/${desc}/${location}/${fullTime}`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

export default {
    list,
    findById,
    findByParams
}