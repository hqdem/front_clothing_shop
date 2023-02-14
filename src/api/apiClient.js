import axios from "axios"

export default axios.create({
    baseURL: "https://u1941269.isp.regruhosting.ru/api/v1/",
    headers: {
        "Content-type": "application/json"
    }
})
