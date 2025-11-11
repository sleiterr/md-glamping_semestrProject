const API_URL = import.meta.env.VITE_API_BASE_URL;

const fetchData = async (endpoint) => {
  const res = await fetch(`${API_URL}/${endpoint}`);
  if (!res.ok) throw new Error(`Error fetching ${endpoint}`);
  const data = await res.json();
  return data.data || [];
};

//! fetchStays
export const fetchStays = () => fetchData("stays");

//! fetchRevies
export const fetchRevies = () => fetchData("reviews");

//! fetchStaysById
export const fetchStaysById = (id) => fetchData(`stay/${id}`);

//! fetchActiviti
export const fetchActiviti = () => fetchData("activities");

//! fetchActivitiById
export const fetchActivitiById = () => fetchData("activity/${id}");

//! fetchActiviti
export const fetchUsers = () => fetchData("users");

// const BASE_URL = "http://localhost:3042/reviews";

// export const fetchRevies = async () => {
//   const res = await fetch(BASE_URL);
//   if (!res.ok) throw new Error("Error loading revies");
//   const data = await res.json();
//   return data.data || [];
// };

// const STAYS_URL = "http://localhost:3042/stays";

// export const fetchStays = async () => {
//   const res = await fetch(STAYS_URL);
//   if (!res.ok) throw new Error("Error loading stays");
//   const data = await res.json();
//   return data.data || [];
// };

// export const fetchStaysById = async (id) => {
//   const res = await fetch(`${STAYS_URL}/${id}`);
//   if (!res.ok) throw new Error("Stays not found");
//   const data = await res.json();
//   return data.data || null;
// };
