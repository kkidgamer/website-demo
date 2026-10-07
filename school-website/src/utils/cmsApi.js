export const CMS_API_BASE = import.meta.env.VITE_CMS_API_URL?.replace(/\/$/, '')

export async function fetchCmsCollection(collection, signal) {
  if (!CMS_API_BASE) return null
  const response = await fetch(`${CMS_API_BASE}/api/${collection}/`, { signal })
  if (!response.ok) throw new Error(`CMS request failed (${response.status})`)
  return response.json()
}
