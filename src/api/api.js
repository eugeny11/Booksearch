const API_KEY = "AIzaSyCpAb9Q-S_UjJAWK3Jjpx3wmRVZaEU2sjc";

export const fetchBooks = async (
  searchValue,
  category,
  sortType,
  startIndex
) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&subject:${category}&orderBy=${sortType}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Ошибка при выполнении запроса к Google Books API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
