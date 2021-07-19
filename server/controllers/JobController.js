import axios from 'axios'

const findAll = async (req, res) => {
    try {
        const response = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json`);
        return res.send(response.data);
    } catch (error) {
        return await error.message
    }
}

const findByParams = async (req, res) => {
    
    const desc = req.params.desc === 'null' ? '' : req.params.desc;
    const location = req.params.location === 'null' ? '' : req.params.location;
    const fullTime = req.params.fullTime === 'null' ? '': req.params.fullTime;
    
    try {
        const response = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${desc}&location=${location}&full_time=${fullTime}`);
        return res.send(response.data);
    } catch (error) {
        return await error.message
    }
}

const findByJobId = async (req, res) => {
    const jobId = req.params.jobId;
    try {
        const response = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${jobId}`);
        return res.send(response.data);
    } catch (error) {
        return await error.message
    }
}

export default {
    findAll,
    findByParams,
    findByJobId
}