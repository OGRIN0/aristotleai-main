import { Result } from "./resultType";

export async function finGPTQuery(query) {
  try {
    const response = await fetch("http://127.0.0.1:5002/api/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: query }),
    });

    if (!response.ok) {
      return Result.Err(`Error => ${error.message}`);
    }

    const result = await response.json();
    return Result.Ok(result);
  } catch (error) {
    return Result.Err(`Error => ${error.message}`);
  }
}
