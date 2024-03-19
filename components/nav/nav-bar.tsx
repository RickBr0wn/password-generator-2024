import { DarkModeToggle } from '../dark-mode-toggle'
import GithubButton from '../github-button'

export default function NavBar() {
  return (
    <nav className="flex justify-end p-2 gap-2">
      <GithubButton />
      <DarkModeToggle />
    </nav>
  )
}

// Path: components/nav/nav-bar.tsx
// Created at: 16:05:08 - 11/03/2024
// Language: Typescript
// Framework: React/Next.js
