export async function getData() {
  const url = import.meta.env.VITE_API_URL ?? "https://jsonplaceholder.typicode.com/todos";
  const response = await fetch(url);
  if (!response.ok) throw new Error(`API responded ${response.status}`);

  const data = await response.json();

  return data ?? [];
}
