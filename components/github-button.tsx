import { Button } from './ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function GithubButton() {
  return (
    <Link
      href={'https://github.com/RickBr0wn/password-generator-2024#readme'}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Button variant="outline" size="icon">
        <GitHubLogoIcon className="h-5 w-5" />
        <span className="sr-only">Go to developers github page</span>
      </Button>
    </Link>
  )
}

// Path: components/github-button.tsx
// Created at: 23:43:30 - 18/03/2024
// Language: Typescript
// Framework: React/Next.js
