const API_KEY = "SF9iTUj6nhCVPu2H1SEAypln081nKnA5";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";

export async function getEvents(page = 0, country, key) {
    try {
        const searchParams = new URLSearchParams({
          size: 20,
          page: page,
          apikey: API_KEY,
          countryCode: country,
          keyword: key,
        });

        const response = await fetch(`${BASE_URL}events.json?${searchParams}`);

        if (!response.ok) {
            throw new Error("Помилка завантаження інформації");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}