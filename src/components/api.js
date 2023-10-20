import axios from "axios";

const BASE_URL = "https://pixabay.com/api/"

export const fetchImges = async (query,page) => {
    const response = await axios.get(`${BASE_URL}`,{
        params: {
            key: "39333428-d2e3585d2c4254c6d1ca792d8",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            per_page: 12,
            page: page
        }
    })
    return response.data
}
