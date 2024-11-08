import { useState } from 'react'
import classNames from 'classnames'
import { Text } from '@sipster/react-text'
import { Telicon } from '@sipster/react-telicon'
import { Themes } from '@/types'
import './theme-settings.scss'

export function ThemeSettings() {
  const themes: Themes[] = ['Auto', 'Light', 'Dark']
  const [activeColorMode, setActiveColorMode] = useState<Themes>(
    (localStorage.getItem('colormode') as Themes) ?? 'Auto'
  )

  function changeTheme(selectedTheme: Themes) {
    if (selectedTheme === 'Auto') {
      const systemPreference = window.matchMedia(
        '(prefers-color-scheme: light)'
      )

      if (systemPreference.matches) {
        document.body.setAttribute('data-sds-colormode', 'Light')
      } else {
        document.body.setAttribute('data-sds-colormode', 'Dark')
      }

      window.localStorage.setItem('colormode', selectedTheme)
      setActiveColorMode(selectedTheme)
    } else {
      document.body.setAttribute('data-sds-colormode', selectedTheme)
      window.localStorage.setItem('colormode', selectedTheme)
      setActiveColorMode(selectedTheme)
    }
  }

  return (
    <div className="colormode">
      <div className="textBox">
        <Telicon iconName="slider-knobs--fill" />
        <Text.Span variant="subtle">Color Modes</Text.Span>
      </div>
      <div className="options">
        {themes.map((themeName: Themes, index: number) => (
          <div
            className={classNames(`${themeName.toLowerCase()}`, {
              active: themeName === activeColorMode
            })}
            key={`theme-${index}`}
            onClick={() => {
              changeTheme(themeName)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
