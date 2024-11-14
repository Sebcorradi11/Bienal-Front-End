import { votacionApi } from "./api-config";

const vote = async (votacionData) => {
  try {
    const response = await votacionApi.post("/vote", votacionData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error creando el voto.", error.message);
    throw error;
  }
};

export {vote};