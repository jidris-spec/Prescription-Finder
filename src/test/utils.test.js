import { describe, it, expect } from 'vitest'
import { cn } from '@/shared/lib/utils/cn'
import { normalizeRole, isRoleAllowed } from '@/shared/lib/utils/roles'

// ─── cn (class merging utility) ───────────────────────────────────────────────

describe('cn', () => {
  it('merges class strings', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('deduplicates conflicting Tailwind classes (last wins)', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })

  it('conditionally includes classes', () => {
    expect(cn('base', false && 'hidden', 'active')).toBe('base active')
  })

  it('handles undefined and null gracefully', () => {
    expect(cn(undefined, null, 'visible')).toBe('visible')
  })

  it('returns empty string for no args', () => {
    expect(cn()).toBe('')
  })
})

// ─── normalizeRole ─────────────────────────────────────────────────────────────

describe('normalizeRole', () => {
  it('returns null for falsy input', () => {
    expect(normalizeRole(null)).toBeNull()
    expect(normalizeRole(undefined)).toBeNull()
    expect(normalizeRole('')).toBeNull()
  })

  it('lowercases the role', () => {
    expect(normalizeRole('Doctor')).toBe('doctor')
    expect(normalizeRole('ADMIN')).toBe('admin')
  })

  it('maps "pharmacy" to "pharmacist"', () => {
    expect(normalizeRole('pharmacy')).toBe('pharmacist')
    expect(normalizeRole('Pharmacy')).toBe('pharmacist')
  })

  it('passes through known roles unchanged', () => {
    expect(normalizeRole('patient')).toBe('patient')
    expect(normalizeRole('doctor')).toBe('doctor')
    expect(normalizeRole('admin')).toBe('admin')
    expect(normalizeRole('pharmacist')).toBe('pharmacist')
  })
})

// ─── isRoleAllowed ─────────────────────────────────────────────────────────────

describe('isRoleAllowed', () => {
  it('returns true when role is in the allow list', () => {
    expect(isRoleAllowed('doctor', ['doctor', 'admin'])).toBe(true)
  })

  it('returns false when role is not in the allow list', () => {
    expect(isRoleAllowed('patient', ['doctor', 'admin'])).toBe(false)
  })

  it('handles "pharmacy" alias — matches "pharmacist" in allow list', () => {
    expect(isRoleAllowed('pharmacy', ['pharmacist'])).toBe(true)
  })

  it('is case-insensitive', () => {
    expect(isRoleAllowed('DOCTOR', ['doctor'])).toBe(true)
  })

  it('returns false for null role', () => {
    expect(isRoleAllowed(null, ['doctor', 'patient'])).toBe(false)
  })

  it('returns false for empty allow list', () => {
    expect(isRoleAllowed('admin', [])).toBe(false)
  })
})
