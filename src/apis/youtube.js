import axios from "axios";

const KEY = "AIzaSyAK69haF0gNcNRDN5fIVAKwxNPkBv1TuHg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 25,
    key: KEY,
  },
});
