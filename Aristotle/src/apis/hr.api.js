import { Result } from "./resultType";
import axios from 'axios';

const config = {
  api: "http://lapis.chimera-dev.cloud:5003",
};

export const queryHRAI = async (data) => {
  try {
    let response = await axios.get(config.api + "/gai/chat", {
      params: { q: data },
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (response.status !== 200)
      return Result.Err(`Error querying API: ${response.statusText}`);
    const result = response.data;
    return Result.Ok(result);
  } catch (error) {
    console.error('Catch block error:', error.message);
    return Result.Err(`Error => ${error.message}`);
  }
};