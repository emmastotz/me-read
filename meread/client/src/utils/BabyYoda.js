import axios from 'axios';
export default {

  getYodish: function (textToTranslate) {
    return axios({
      'method': 'POST',
      'url': 'https://yodish.p.rapidapi.com/yoda.json',
      'headers': {
        'content-type': 'application/x-www-form-urlencoded',
        'x-rapidapi-host': 'yodish.p.rapidapi.com',
        'x-rapidapi-key': '91517b45bamsh422e95c783d3857p157a15jsne3d2bb772529'
      }, 'params': {
        'text': textToTranslate
      }, 'data': {
      }
    })
      .then((response) => {
        console.log(response.data.contents.translated);
        return response.data.contents.translated;
      })
      .catch((error) => {
        console.log(error)
      })
  }
}