export default function generatePassword(
  length: number,
  includeSpecialChars: boolean,
  includeCapitals: boolean,
  includeNumerics: boolean
): [string, string] {
  const specials = '!@#$%^&*()_+-=[]{}|;:,.<>?'
  const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numerics = '0123456789'

  let charset = 'abcdefghijklmnopqrstuvwxyz'
  let password = ''

  if (includeSpecialChars) charset += specials
  if (includeCapitals) charset += capitals
  if (includeNumerics) charset += numerics

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    password += charset[randomIndex]
  }

  // Calculate security rating based on password complexity
  let securityRating = 'very weak'
  if (
    length >= 8 &&
    (includeSpecialChars || includeCapitals || includeNumerics)
  ) {
    securityRating = 'weak'
  }
  if (
    length >= 12 &&
    (includeSpecialChars || includeCapitals || includeNumerics)
  ) {
    securityRating = 'average'
  }
  if (
    length >= 16 &&
    includeSpecialChars &&
    includeCapitals &&
    includeNumerics
  ) {
    securityRating = 'good'
  }
  if (
    length >= 20 &&
    includeSpecialChars &&
    includeCapitals &&
    includeNumerics
  ) {
    securityRating = 'very good'
  }

  return [password, securityRating]
}

// Path: lib/generate-password.ts
// Created at: 19:45:57 - 11/03/2024
// Language: Typescript
// Framework: React/Next.js
