'use server'

export async function testAction(formData: FormData) {
  console.log(
    JSON.stringify({
      text: formData.get('name'),
      specials: Boolean(formData.get('specials')),
      capitals: Boolean(formData.get('capitals')),
      numbers: Boolean(formData.get('numbers')),
    })
  )
}

// Path: actions/index.ts
// Created at: 21:47:40 - 12/03/2024
// Language: Typescript
// Framework: React/Next.js
