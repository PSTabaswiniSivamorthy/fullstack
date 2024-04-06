import axios from "axios";

export const getAll = async () => {
  try {
    const { data } = await axios.get("/api/cakes");
    return data;
  } catch (error) {
    console.error("An error occurred while fetching all cakes:", error);
    throw error;
  }
};

export const search = async (searchTerm) => {
  try {
    const { data } = await axios.get("/api/cakes/search/" + searchTerm);
    return data;
  } catch (error) {
    console.error("An error occurred while searching for cakes:", error);
    throw error;
  }
};

export const getAllTags = async () => {
  try {
    const { data } = await axios.get("/api/cakes/tags");
    return data;
  } catch (error) {
    console.error("An error occurred while fetching all tags:", error);
    throw error;
  }
};

export const getAllByTag = async (tag) => {
  try {
    if (tag === "All") return getAll();
    const { data } = await axios.get("/api/cakes/tag/" + tag);
    return data;
  } catch (error) {
    console.error("An error occurred while fetching cakes by tag:", error);
    throw error;
  }
};

export const getById = async (cakeId) => {
  try {
    const { data } = await axios.get("/api/cakes/" + cakeId);
    return data;
  } catch (error) {
    console.error("An error occurred while fetching cake by ID:", error);
    throw error;
  }
};
