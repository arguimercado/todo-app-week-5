
const FORCE = null;

export async function getData() {
  const url = import.meta.env.VITE_API_URL ?? "https://jsonplaceholder.typicode.com/todos";
  
  
  if(FORCE === "slow") 
    await new Promise((resolve) => setTimeout(resolve, 3000));

  if(FORCE == 'error') throw new Error('Forced error');


  const response = await fetch(url);
  if (!response.ok) throw new Error(`API responded ${response.status}`);

  const data = await response.json();

  return FORCE === 'empty' ? [] : data;
}
