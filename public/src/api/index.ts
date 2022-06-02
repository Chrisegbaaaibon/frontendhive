import axios from "axios";

const APP_URI = "https://hivend.herokuapp.com";

export default axios.create({ baseURL: `${APP_URI}/api/` });
