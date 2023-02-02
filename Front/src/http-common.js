import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:5130",
    headers: {
        "Content-type": "application/json"
    }
}); 