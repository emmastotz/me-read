import axios from "axios";

export default {
  // Gets all templates
  getTemplates: function() {
    return axios.get("/api/templates");
  },
  // Gets the template with the given id
  getTemplate: function(id) {
    return axios.get("/api/templates/" + id);
  },
  // Saves a template to the database
  saveTemplate: function(templateData) {
    return axios.post("/api/templates", templateData);
  }
};