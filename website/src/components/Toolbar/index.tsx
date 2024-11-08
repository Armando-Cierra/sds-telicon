import classNames from 'classnames'
import { TeliconLogo, ThemeSettings } from '@/components'
import { Text } from '@sipster/react-text'
import { Link } from 'react-router-dom'
import { ActivePage } from '@/types'
import './toolbar.scss'

type Props = {
  activePage: ActivePage
}

export function Toolbar({ activePage }: Props) {
  return (
    <section
      className={classNames('toolbar', { showToolbar: activePage !== 'Home' })}
    >
      <Link to="/" className="logo logoText">
        <TeliconLogo />
        <Text.Span>SDS Telicon</Text.Span>
      </Link>
      <ThemeSettings />
    </section>
  )
}
