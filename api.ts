/**
 * Reusable function used to resolve data fetching promise and handle errors
 * @param endpoint URL endpoint
 * @returns data fetch promise
 */
const SERVER_URL = "https://app.wewantwaste.co.uk/api";
export const apiHandler = async (endpoint: string) => {
  const url = SERVER_URL + endpoint;

  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error: any) {
    throw error;
  }
};
