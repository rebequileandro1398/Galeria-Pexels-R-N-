import axios from "axios";

export const getApi = async (searchTerm = 'technology') => {

    return await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
            Authorization: '563492ad6f917000010000012e14de9b0a6c4688ab821da9715afa7a'
        }
    })
}