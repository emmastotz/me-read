import axios from "axios";

export default {
  getYodish: function() {
    return axios.get("https://yodish.p.rapidapi.com/yoda.json");
  }
}