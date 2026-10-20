
const API_BASE_URL = "http://localhost:5000/api";

export async function getPrizes() {
  try {
    const response = await fetch(`${API_BASE_URL}/prizes`);

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Unable to fetch prizes");
    }

    return data.prizes;
  } catch (error) {
    console.error("Error fetching prizes:", error.message);
    throw error;
  }
}
