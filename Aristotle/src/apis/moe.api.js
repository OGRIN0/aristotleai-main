import { Result } from "./resultType";

const config = {
  api: "https://apis.chimera-dev.cloud:5001",
};

export const queryMixingOfExperts = async (data) => {
  try {
    let response = await fetch(config.api + "/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    if (!response.ok)
      return Result.Err(`Error uploading file: ${error.message}`);
    const result = await response.json();
    return Result.Ok(result);
  } catch (error) {
    return Result.Err(`Error => ${error.message}`);
  }
};
