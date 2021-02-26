import ky from "ky";

const api = {
  // `endpoint` is a made up name, and we give a default value
  index(endpoint = "https://api.imgflip.com/get_memes") {
    return ky.get(endpoint).json();
  },
};

export default api;
