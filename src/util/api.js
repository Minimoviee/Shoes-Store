import axios from "axios";


const checkURL = (url) => {
    return axios.get(`http://localhost:8000/CyberGuard?URL=${url}`)
}

export {
    checkURL,
}