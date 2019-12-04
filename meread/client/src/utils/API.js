import axios from "axios";

export default {
  getTemplates: function() {
    return axios.get("/api/templates");
  },
  getTemplate: function(id) {
    return axios.get("/api/templates/" + id);
  },
  deleteTemplate: function(id) {
    return axios.delete("/api/templates/" + id);
  },
  saveTemplate: function(templateData) {
    return axios.post("/api/templates", templateData);
  }
};