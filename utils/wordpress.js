const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function fetchAPI(query, { variables } = {}) {
  if (!API_URL) {
    throw new Error(
      "Missing NEXT_PUBLIC_WORDPRESS_API_URL. Set it in your environment (e.g. .env.local)."
    );
  }
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}