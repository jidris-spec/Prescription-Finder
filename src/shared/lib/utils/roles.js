export function normalizeRole(role) {
  if (!role) return null
  const r = String(role).toLowerCase()
  if (r === 'pharmacy') return 'pharmacist'
  return r
}

export function isRoleAllowed(role, allow = []) {
  const current = normalizeRole(role)
  const allowed = allow.map(normalizeRole)
  return allowed.includes(current)
}
