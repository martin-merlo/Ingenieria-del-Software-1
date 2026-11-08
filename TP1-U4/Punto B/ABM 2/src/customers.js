export const STORAGE_KEY = 'cad_cliente'

export function loadCustomers() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    return Array.isArray(stored) ? stored : []
  } catch {
    return []
  }
}

export function emailAlreadyExists(customers, email, editIndex) {
  const normalized = email.trim().toLowerCase()
  return customers.some((customer, index) =>
    index !== editIndex && customer.email.trim().toLowerCase() === normalized,
  )
}
