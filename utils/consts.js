//export const
import React from "react";

// export const API = "http://api.galam.life:8080/api/v2/";
// export const API_BOlASHAQ = "http://178.18.250.138:1337";
// export const API_BOlASHAQ = "http://localhost:1337";

export const getAboutUsPage = (id) => {
  switch (id) {
    case 0:
      return "administration";
    case 1:
      return "documents";
    case 2:
      return "gallery?page=1";
    case 3:
      return "tour";
    default:
      return "administration";
  }
};
