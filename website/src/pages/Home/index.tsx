import { Link } from 'react-router-dom'
import { Text } from '@sipster/react-text'
import { Button } from '@sipster/react-button'
import { SipsterIcon, TeliconLogo, ThemeSettings } from '@/components'
import { ActivePage } from '@/types'
import './home.scss'

type Props = {
  setActivePage: (e: ActivePage) => void
}

export function Home({ setActivePage }: Props) {
  setActivePage('Home')

  return (
    <main className="home">
      <div className="container">
        <div className="logo">
          <TeliconLogo />
          <Text.H1 className="logoText">SDS Telicon</Text.H1>
        </div>
        <div className="content">
          <Text.P typeset="heading2" variant="subtle">
            A SVG icon collection for Sipster Design System
          </Text.P>
          <div className="buttonBox">
            <Link to="/icon-list">
              <Button variant="primary" size="large">
                View Icons
              </Button>
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://2600hz.gitbook.io/sds/v/sds-3.0/sds-telicon/sds-telicon"
            >
              <Button variant="base" size="large">
                View Documentation
              </Button>
            </a>
          </div>
          <ThemeSettings />
        </div>
      </div>
      <SipsterIcon />
    </main>
  )
}
