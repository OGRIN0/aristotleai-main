import { Result } from "./resultType";
import axios from 'axios';

const config = {
  api: process.env.REACT_APP_API_URL || "https://aristotleai-backend-deployment.onrender.com", 
};

export const queryBankingBot = async (data) => {
  try {
    if (!data || typeof data !== "string") {
      return Result.Err("Invalid input: prompt must be a non-empty string.");
    }

    let response = await axios.post(`${config.api}/query`, 
      { prompt: data }, 
      {
        headers: {
          "Content-Type": "application/json",  
        },
      }
    );
    
    return Result.Ok(response.data.answer); 
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.error || error.message;
      return Result.Err(`Mosaic API Error: ${errorMessage}`);
    }
    return Result.Err(`Unexpected Error: ${error.message}`);
  }
};
