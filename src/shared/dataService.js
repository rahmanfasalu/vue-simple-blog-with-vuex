import * as axios from "axios";
import { API_URL } from "./config";

const loadBlogFeeds = async function() {
  try {
    const response = await axios.get(`${API_URL.getData}`);
    let data = parseList(response);
    return data;
  } catch (error) {
    return [];
  }
};

const parseList = (response) => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== "object") {
    list = [];
  }
  return list;
};

export const dataService = {
  loadBlogFeeds,
};
