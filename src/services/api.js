const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

export async function getMotorcycles(search = "") {
  const url = new URL(`${API_URL}/motorcycles`);

  if (search) {
    url.searchParams.set("search", search);
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Gagal mengambil data motor");
  }

  const result = await response.json();
  return result.data || [];
}

export async function getMotorcycleDetail(slug) {
  const response = await fetch(`${API_URL}/motorcycles/${slug}`);

  if (!response.ok) {
    throw new Error("Gagal mengambil detail motor");
  }

  const result = await response.json();
  return result.data;
}