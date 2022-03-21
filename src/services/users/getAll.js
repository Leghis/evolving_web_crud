import axios from "axios";
export default async function GetAll (url) {
    return await axios.get(url)
}