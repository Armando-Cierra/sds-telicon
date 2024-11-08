import { Link } from 'react-router-dom'
import { Text } from '@sipster/react-text'
import { Button } from '@sipster/react-button'
import { SipsterIcon } from '@/components'
import type { ActivePage } from '@/types'
import './error.scss'

type Props = {
  setActivePage: (e: ActivePage) => void
}

export function Error({ setActivePage }: Props) {
  setActivePage('Error')

  return (
    <main className="error404">
      <SipsterIcon />
      <Text.H1 typeset="heading1">Error 404</Text.H1>
      <Text.P variant="subtle">
        Ups! The page you're looking doesn't exists.
      </Text.P>
      <Link to="/">
        <Button variant="secondary" iconAfter="home--line">
          Go Back Home
        </Button>
      </Link>
    </main>
  )
}
