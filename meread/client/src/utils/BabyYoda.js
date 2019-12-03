import axios from "axios";

export default {
  getYodish: function(data) {
    return axios.get("https://api.funtranslations.com/translate/yoda.json?key=GEBeU8ypgRIEp5O4fwQWsQeF&text=" + data);
  }
}