const BASE_URL = "http://localhost:3042/reviews";

export const fetchRevies = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error loading revies");
  const data = await res.json();
  return data.data || [];
};
