import axios from "axios";

export default {
  getTemplates: function() {
    return axios.get("/Generator/api/templates");
  },
  getTemplate: function(id) {
    return axios.get("/Generator/api/templates/" + id);
  },
  deleteTemplate: function(id) {
    return axios.delete("/Generator/api/templates/" + id);
  },
  saveTemplate: function(templateData) {
    return axios.post("/Generator/api/templates", templateData);
  }
};