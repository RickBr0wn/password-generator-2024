import PasswordGenerator from '~/components/password-generator/generator'
import { Card } from '~/components/ui/card'

export default function Home() {
  return (
    <main>
      <Card className="p-6 flex justify-center">
        <PasswordGenerator />
      </Card>
    </main>
  )
}

// Path: app/page.tsx
// Created at: 16:00:15 - 11/03/2024
// Language: Typescript
// Framework: React/Next.js
