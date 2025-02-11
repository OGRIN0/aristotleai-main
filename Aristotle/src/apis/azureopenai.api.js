import { Result } from "./resultType";
import axios from 'axios';

const config = {
  api: "http://localhost:8004",
};

export const queryAzureOpenAI = async (data) => {
  try {
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
      return Result.Err(`Error => ${error.response?.data || error.message}`);
    }
    return Result.Err(`Error => ${error.message}`);
  }
};
